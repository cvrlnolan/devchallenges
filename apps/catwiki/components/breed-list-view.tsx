import Image from 'next/image';
import { FC } from 'react';

import type { CatBreed } from '../lib/types';

const BreedListView: FC<{ breeds: CatBreed[] }> = ({ breeds }) => (
  <>
    {breeds.map((breed, i) => (
      <div key={breed.id} className='mt-4 grid w-full grid-cols-5 gap-2'>
        <div className='relative flex h-[200px] w-[200px] rounded-2xl'>
          <Image
            fill
            alt={breed.name}
            src={`https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`}
            className='rounded-2xl object-cover'
          />
        </div>
        <div className='col-span-4 space-y-4'>
          <div className='text-primary text-2xl font-semibold'>
            {i + 1}. {breed.name}
          </div>
          <div>{breed.description}</div>
        </div>
      </div>
    ))}
  </>
);

export { BreedListView };
