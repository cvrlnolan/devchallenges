import { supabase } from '@devchallenges/lib';

import { PhotoGrid } from '../components/photo-grid';
import { Database } from '../lib/supabase.types';

const getPhotos = async () => {
  const { data, error } = await supabase<Database>().from('photos').select();

  if (error) throw new Error(error.message);

  return data;
};

export default async function Page(): Promise<JSX.Element> {
  await getPhotos();

  return <PhotoGrid />;
}
