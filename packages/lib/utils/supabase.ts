import { createClient } from '@supabase/supabase-js';

export const supabase = <T>() =>
  createClient<T>(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? 'fake',
    process.env.NEXT_PUBLIC_SUPABASE_KEY ?? 'fake',
  );
