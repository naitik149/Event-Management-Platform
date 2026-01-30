-- Drop the security definer view and recreate as a regular view
DROP VIEW IF EXISTS public.events_with_counts;

-- Create as a regular view (not security definer)
CREATE VIEW public.events_with_counts 
WITH (security_invoker = true) AS
SELECT 
  e.*,
  c.name as club_name,
  c.contact_email as club_email,
  c.contact_phone as club_phone,
  c.instagram_handle as club_instagram,
  COALESCE(r.registered_count, 0) as filled_seats
FROM public.events e
LEFT JOIN public.clubs c ON e.club_id = c.id
LEFT JOIN (
  SELECT event_id, COUNT(*) as registered_count
  FROM public.registrations
  WHERE status = 'registered'
  GROUP BY event_id
) r ON e.id = r.event_id;