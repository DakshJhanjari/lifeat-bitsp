
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

type ContentSection = Tables<"content_sections">;

export const useContent = () => {
  return useQuery({
    queryKey: ["content"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("content_sections")
        .select("*")
        .eq("is_active", true)
        .order("display_order");
      
      if (error) throw error;
      return data as ContentSection[];
    },
  });
};

export const useContentByKey = (sectionKey: string) => {
  return useQuery({
    queryKey: ["content", sectionKey],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("content_sections")
        .select("*")
        .eq("section_key", sectionKey)
        .eq("is_active", true)
        .single();
      
      if (error) throw error;
      return data as ContentSection;
    },
  });
};

export const useUpdateContent = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ id, content_data }: { id: string; content_data: any }) => {
      const { data, error } = await supabase
        .from("content_sections")
        .update({ 
          content_data,
          updated_at: new Date().toISOString()
        })
        .eq("id", id)
        .select();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["content"] });
    },
  });
};
