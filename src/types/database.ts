// Database types for EventFlow

export type AppRole = 'admin' | 'club_admin' | 'student';

export interface Profile {
  id: string;
  user_id: string;
  full_name: string | null;
  email: string;
  phone: string | null;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface UserRole {
  id: string;
  user_id: string;
  role: AppRole;
  created_at: string;
}

export interface Club {
  id: string;
  name: string;
  description: string | null;
  logo_url: string | null;
  contact_email: string | null;
  contact_phone: string | null;
  instagram_handle: string | null;
  created_by: string | null;
  created_at: string;
  updated_at: string;
}

export interface Event {
  id: string;
  title: string;
  description: string | null;
  club_id: string;
  event_date: string;
  event_time: string;
  venue: string;
  category: string;
  total_seats: number;
  image_emoji: string | null;
  status: 'open' | 'closed' | 'cancelled';
  created_by: string;
  created_at: string;
  updated_at: string;
}

export interface EventWithDetails extends Event {
  club_name: string;
  club_email: string | null;
  club_phone: string | null;
  club_instagram: string | null;
  filled_seats: number;
}

export interface Registration {
  id: string;
  event_id: string;
  user_id: string;
  status: 'registered' | 'attended' | 'cancelled';
  registered_at: string;
}

export interface RegistrationWithEvent extends Registration {
  event: EventWithDetails;
}
