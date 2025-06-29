import { createClient } from '@supabase/supabase-js';
import type { Database } from './supabase.types';

export const supabaseClient = createClient<Database>(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY,
);

export async function getCategories() {
  const { data, error } = await supabaseClient
    .from('categories')
    .select()
    .order('name_en');

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

// TODO add api client and implement log in functionality
export async function loginWithGoogle() {
  console.log('Logging in...');
}
