import { supabaseClient } from '$lib/supabase';
import { error } from '@sveltejs/kit';

export const load = async () => {
  const res = await supabaseClient.auth.getUser();
  if (res.error) error(500, res.error.message);

  return res.data;
};
