
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

type ContentSection = Tables<"content_sections">;

const DEFAULT_CONTENT: Record<string, { title: string; type: 'text' | 'html' | 'list' | 'card' | 'json'; data: any }> = {
  'mess_hero_title': {
    title: 'Mess & Food Hero Title',
    type: 'text',
    data: { text: "🍽️ Mess & Food" }
  },
  'mess_hero_subtitle': {
    title: 'Mess & Food Hero Subtitle',
    type: 'text',
    data: { text: "From hearty meals to late-night snacks, discover all the delicious options on campus!" }
  },
  'mess_system_title': {
    title: 'Mess System Title',
    type: 'text',
    data: { text: "Mess System" }
  },
  'mess_system_allocation': {
    title: 'Mess Allocation Info',
    type: 'card',
    data: { title: "Mess Allocation", content: "Each hostel is attached to a mess block; you'll be assigned one" }
  },
  'mess_system_features': {
    title: 'Mess System Features',
    type: 'list',
    data: { title: "Meal Features:", items: ["Food options with decent variety", "Jain options available daily", "Fixed timings for all meals", "Night canteens open later"] }
  },
  'redi_culture_title': {
    title: 'Redi Culture Title',
    type: 'text',
    data: { text: "Redi Culture" }
  },
  'redi_culture_description': {
    title: 'Redi Culture Description',
    type: 'text',
    data: { text: "Each hostel has a \"Redi\" - small food kiosks that are part of campus life!" }
  },
  'redi_timings': {
    title: 'Redi Timings',
    type: 'card',
    data: { title: " Timings", content: "Daily: 9:00 AM to 6:00 PM" }
  },
  'redi_menu': {
    title: 'Redi Menu Items',
    type: 'list',
    data: { title: "What they serve:", items: ["Hot Maggi & noodles", "Grilled sandwiches & toasties", "Fresh juices, shakes & soft drinks", "Tea, coffee, and snacks"] }
  },
  'coop_store_title': {
    title: 'Co-op Store Title',
    type: 'text',
    data: { text: "BITS Co-op Store" }
  },
  'coop_store_description': {
    title: 'Co-op Store Description',
    type: 'card',
    data: { title: "Your Campus Store", content: "Run by Rajasthan Government - fair pricing & easy access" }
  },
  'coop_store_items': {
    title: 'Co-op Store Items',
    type: 'list',
    data: { title: "What You'll Find:", items: [" Textbooks & reference books", " Stationery & lab equipment", " Basic electronics & chargers", " Daily essentials & toiletries"] }
  },
  'cnot_title': {
    title: "C'not Title",
    type: 'text',
    data: { text: "C'not (Connaught Place) - The Heart of Student Life" }
  },
  'cnot_description': {
    title: "C'not Description",
    type: 'text',
    data: { text: "Affectionately called C'not, this is the central commercial hub inside BITS Pilani's campus — think of it as the student marketplace meets food court meets hangout zone." }
  },
  'campus_eateries_title': {
    title: 'Campus Eateries Title',
    type: 'text',
    data: { text: "Campus Eateries - ANC, Looters, TOTT, and DCC" }
  },
  'campus_eateries_hours': {
    title: 'Campus Eateries Hours',
    type: 'card',
    data: { title: " Operating Hours: 5:00 PM to 2:00 AM (with short break during dinner hours)", content: "Perfect for evening hangouts, late-night cravings, or grabbing a quick bite after classes." }
  },
  'eatery_names': {
    title: 'Eatery Names',
    type: 'list',
    data: { title: "Campus Eateries", items: ["ANC", "TOTT", "Looters", "DCC"] }
  },
  'laundry_title': {
    title: 'Laundry Services Title',
    type: 'text',
    data: { text: " Laundry & Services" }
  },
  'laundry_paid': {
    title: 'Paid Laundry Services',
    type: 'list',
    data: { title: " Paid Services:", items: ["Dhobi services (₹10 per item for washing + ironing)", "Campus laundromat (paid basis)"] }
  },
  'laundry_diy': {
    title: 'DIY Laundry Options',
    type: 'list',
    data: { title: " DIY Options:", items: ["Handwash clothes in designated wash areas", "Bring extension cords (only 2 plug points per room)"] }
  }
};

const buildDefaultSection = (key: string): ContentSection => {
  const def = DEFAULT_CONTENT[key];
  if (!def) {
    throw new Error(`Default content not found for key: ${key}`);
  }
  return {
    id: `default-${key}`,
    section_key: key,
    section_title: def.title,
    content_type: def.type,
    content_data: def.data,
    display_order: 0,
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };
};

const getLocalSections = (): ContentSection[] => {
  const stored = localStorage.getItem("local_content_sections");
  if (!stored) return [];
  try {
    return JSON.parse(stored);
  } catch {
    return [];
  }
};

const saveLocalSections = (sections: ContentSection[]) => {
  localStorage.setItem("local_content_sections", JSON.stringify(sections));
};

export const useContent = () => {
  return useQuery({
    queryKey: ["content"],
    queryFn: async () => {
      const localData = getLocalSections();
      const presentKeys = new Set(localData.map(item => item.section_key));
      
      const merged = [...localData];
      Object.keys(DEFAULT_CONTENT).forEach(key => {
        if (!presentKeys.has(key)) {
          merged.push(buildDefaultSection(key));
        }
      });
      
      return merged;
    },
  });
};

export const useContentByKey = (sectionKey: string) => {
  return useQuery({
    queryKey: ["content", sectionKey],
    queryFn: async () => {
      const localData = getLocalSections();
      const found = localData.find(item => item.section_key === sectionKey);
      if (found) {
        return found;
      }
      return buildDefaultSection(sectionKey);
    },
  });
};

interface UpdateArgs {
  id: string;
  content_data: any;
  section_key?: string;
  section_title?: string;
  content_type?: 'text' | 'html' | 'list' | 'card' | 'json';
}

export const useUpdateContent = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ id, content_data, section_key, section_title, content_type }: UpdateArgs) => {
      const localData = getLocalSections();
      const isDefault = id.startsWith('default-');
      const realKey = isDefault ? section_key! : localData.find(item => item.id === id)?.section_key || section_key!;
      
      const updatedSection: ContentSection = {
        id: isDefault ? `local-${realKey}` : id,
        section_key: realKey,
        section_title: section_title || DEFAULT_CONTENT[realKey]?.title || "Untitled",
        content_type: content_type || DEFAULT_CONTENT[realKey]?.type || "text",
        content_data,
        display_order: 0,
        is_active: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };

      const existingIndex = localData.findIndex(item => item.section_key === realKey);
      if (existingIndex > -1) {
        localData[existingIndex] = updatedSection;
      } else {
        localData.push(updatedSection);
      }
      
      saveLocalSections(localData);
      return [updatedSection];
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["content"] });
    },
  });
};

