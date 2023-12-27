import { HomeBanner } from '../components/home-banner';
import { getBreeds } from '../lib/actions';
import { CatBreedListSchema } from '../lib/types';

export default async function Page(): Promise<JSX.Element> {
  const data = await getBreeds();

  const breeds = CatBreedListSchema.parse(data);

  return <HomeBanner breeds={breeds} />;
}
