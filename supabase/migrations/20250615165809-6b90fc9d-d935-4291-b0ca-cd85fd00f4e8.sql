
-- Create the notifications table
CREATE TABLE public.notifications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  type TEXT NOT NULL CHECK (type IN ('info', 'warning', 'success')),
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  expires_at TIMESTAMP WITH TIME ZONE,
  is_active BOOLEAN NOT NULL DEFAULT true
);

-- Enable Row Level Security
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows everyone to read notifications (since this is a public notification system)
CREATE POLICY "Anyone can view active notifications" 
  ON public.notifications 
  FOR SELECT 
  USING (is_active = true);

-- Create policies for admin operations (you can adjust these based on your auth setup)
CREATE POLICY "Service role can manage notifications" 
  ON public.notifications 
  FOR ALL 
  USING (true);

-- Enable realtime for notifications
ALTER TABLE public.notifications REPLICA IDENTITY FULL;
ALTER PUBLICATION supabase_realtime ADD TABLE public.notifications;
