-- Make created_by nullable for seed data
ALTER TABLE public.events ALTER COLUMN created_by DROP NOT NULL;