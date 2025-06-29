import { getCategories } from '$lib/supabase';
import { error } from '@sveltejs/kit';

export const load = async () => {
  try {
    const categories = await getCategories();
    return { categories };
  } catch (err) {
    error(500, err instanceof Error ? err.message : 'Something went wrong');
  }
};
