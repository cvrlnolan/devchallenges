import { supabase } from '@devchallenges/lib';

import { PhotoGrid } from '../components/photo-grid';
import { Database } from '../lib/supabase.types';

export const revalidate = 0;

const getPhotos = async () => {
  const { data, error } = await supabase<Database>()
    .from('photos')
    .select()
    .order('created_at', { ascending: false });

  if (error) throw new Error(error.message);

  return data;
};

export default async function Page(): Promise<JSX.Element> {
  const photos = await getPhotos();

  return <PhotoGrid photos={photos} />;
}
