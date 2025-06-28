import { supabaseClient } from '$lib/supabase';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url }) => {
  const categoryId = Number(url.searchParams.get('category'));
  let query = supabaseClient.rpc('get_all_words');

  if (isNaN(categoryId)) {
    query = query.is('category_id', null);
  } else {
    query = query.eq('category_id', categoryId);
  }

  const { data } = await query;

  return { words: data };
};
