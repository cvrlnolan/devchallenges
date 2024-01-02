import { BreedListView } from '../../../components/breed-list-view';
import { getBreeds } from '../../../lib/actions';
import { CatBreedListSchema } from '../../../lib/types';

export default async function Page(): Promise<JSX.Element> {
  const data = await getBreeds(10);

  const breeds = CatBreedListSchema.parse(data);

  return (
    <div className='my-4 w-full grow'>
      <div className='text-primary text-2xl font-bold'>
        Top 10 most searched breeds
      </div>
      <div className='mt-8'>
        <BreedListView breeds={breeds} />
      </div>
    </div>
  );
}
