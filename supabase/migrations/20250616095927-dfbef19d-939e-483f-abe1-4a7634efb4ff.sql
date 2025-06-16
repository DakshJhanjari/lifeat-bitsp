
-- Create a table to store editable content sections
CREATE TABLE public.content_sections (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  section_key TEXT NOT NULL UNIQUE,
  section_title TEXT NOT NULL,
  content_type TEXT NOT NULL CHECK (content_type IN ('text', 'html', 'list', 'card', 'json')),
  content_data JSONB NOT NULL,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.content_sections ENABLE ROW LEVEL SECURITY;

-- Create policy that allows everyone to read content (public content)
CREATE POLICY "Anyone can view active content" 
  ON public.content_sections 
  FOR SELECT 
  USING (is_active = true);

-- Create policy for admin operations (for now, service role can manage all)
CREATE POLICY "Service role can manage content" 
  ON public.content_sections 
  FOR ALL 
  USING (true);

-- Create an index for faster lookups
CREATE INDEX idx_content_sections_section_key ON public.content_sections(section_key);
CREATE INDEX idx_content_sections_display_order ON public.content_sections(display_order);

-- Insert initial content from MessAndFood section
INSERT INTO public.content_sections (section_key, section_title, content_type, content_data, display_order) VALUES
('mess_hero_title', 'Mess & Food Hero Title', 'text', '{"text": "🍽️ Mess & Food"}', 1),
('mess_hero_subtitle', 'Mess & Food Hero Subtitle', 'text', '{"text": "From hearty meals to late-night snacks, discover all the delicious options on campus!"}', 2),
('mess_system_title', 'Mess System Title', 'text', '{"text": "Mess System"}', 3),
('mess_system_allocation', 'Mess Allocation Info', 'card', '{"title": "Mess Allocation", "content": "Each hostel is attached to a mess block; you''ll be assigned one"}', 4),
('mess_system_features', 'Mess System Features', 'list', '{"title": "Meal Features:", "items": ["Food options with decent variety", "Jain options available daily", "Fixed timings for all meals", "Night canteens open later"]}', 5),
('redi_culture_title', 'Redi Culture Title', 'text', '{"text": "Redi Culture"}', 6),
('redi_culture_description', 'Redi Culture Description', 'text', '{"text": "Each hostel has a \"Redi\" - small food kiosks that are part of campus life!"}', 7),
('redi_timings', 'Redi Timings', 'card', '{"title": "🕘 Timings", "content": "Daily: 9:00 AM to 6:00 PM"}', 8),
('redi_menu', 'Redi Menu Items', 'list', '{"title": "What they serve:", "items": ["Hot Maggi & noodles", "Grilled sandwiches & toasties", "Fresh juices, shakes & soft drinks", "Tea, coffee, and snacks"]}', 9),
('coop_store_title', 'Co-op Store Title', 'text', '{"text": "BITS Co-op Store"}', 10),
('coop_store_description', 'Co-op Store Description', 'card', '{"title": "Your Campus Store", "content": "Run by Rajasthan Government - fair pricing & easy access"}', 11),
('coop_store_items', 'Co-op Store Items', 'list', '{"title": "What You''ll Find:", "items": ["📚 Textbooks & reference books", "✏️ Stationery & lab equipment", "💻 Basic electronics & chargers", "🧼 Daily essentials & toiletries"]}', 12),
('cnot_title', 'C''not Title', 'text', '{"text": "C''not (Connaught Place) - The Heart of Student Life"}', 13),
('cnot_description', 'C''not Description', 'text', '{"text": "Affectionately called C''not, this is the central commercial hub inside BITS Pilani''s campus — think of it as the student marketplace meets food court meets hangout zone."}', 14),
('campus_eateries_title', 'Campus Eateries Title', 'text', '{"text": "Campus Eateries - ANC, Looters, TOTT, and DCC"}', 15),
('campus_eateries_hours', 'Campus Eateries Hours', 'card', '{"title": "🕔 Operating Hours: 5:00 PM to 2:00 AM (with short break during dinner hours)", "content": "Perfect for evening hangouts, late-night cravings, or grabbing a quick bite after classes."}', 16),
('eatery_names', 'Eatery Names', 'list', '{"title": "Campus Eateries", "items": ["ANC", "TOTT", "Looters", "DCC"]}', 17),
('laundry_title', 'Laundry Services Title', 'text', '{"text": "🧼 Laundry & Services"}', 18),
('laundry_paid', 'Paid Laundry Services', 'list', '{"title": "💰 Paid Services:", "items": ["Dhobi services (₹10 per item for washing + ironing)", "Campus laundromat (paid basis)"]}', 19),
('laundry_diy', 'DIY Laundry Options', 'list', '{"title": "🚿 DIY Options:", "items": ["Handwash clothes in designated wash areas", "Bring extension cords (only 2 plug points per room)"]}', 20);
