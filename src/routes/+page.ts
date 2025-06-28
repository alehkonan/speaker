import { getCategories } from '$lib/supabase';

export const load = async () => {
  const categories = await getCategories();

  return { categories };
};
