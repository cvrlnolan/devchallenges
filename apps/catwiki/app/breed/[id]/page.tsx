import Image from 'next/image';

import { RatingBars } from '../../../components/rating-bars';
import { getBreed, getBreedImages } from '../../../lib/actions';
import { breedCharacteristics } from '../../../lib/constants';
import { CatBreedImageListSchema, CatBreedSchema } from '../../../lib/types';

export default async function Page({
  params,
}: {
  params: { id: string };
}): Promise<JSX.Element> {
  const breedData = await getBreed(params.id);
  const breedImagesData = await getBreedImages(params.id);

  const breed = CatBreedSchema.parse(breedData);
  const breedImages = CatBreedImageListSchema.parse(breedImagesData);

  return (
    <div className='my-4 w-full grow'>
      <div className='grid w-full grid-cols-2 gap-2'>
        <div className='relative h-[350px] w-[350px] rounded-lg'>
          <Image
            fill
            alt={breed.name}
            src={`https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`}
            className='rounded-lg object-cover'
          />
        </div>
        <div className='space-y-3'>
          <p className='text-primary text-2xl font-bold capitalize'>
            {breed.name}
          </p>
          <p>{breed.description}</p>
          <div className='flex gap-2'>
            <p className='font-bold'>Temperament:</p>
            <p>{breed.temperament}</p>
          </div>
          <div className='flex gap-2'>
            <p className='font-bold'>Origin:</p>
            <p>{breed.origin}</p>
          </div>
          <div className='flex gap-2'>
            <p className='font-bold'>Life Span:</p>
            <p>{breed.life_span}</p>
          </div>
          {breedCharacteristics.map((characteristic) => (
            <div
              key={characteristic.key}
              className='grid w-full grid-cols-3 items-center gap-2'
            >
              <div className='font-bold'>{characteristic.title}:</div>
              <div className='col-span-2'>
                <RatingBars rating={breed[characteristic.key]} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='mt-8 space-y-6'>
        <p className='text-primary text-2xl font-bold'>Other Photos</p>
        <div className='grid w-full grid-cols-4 items-center gap-4'>
          {breedImages.map((image, i) => (
            <div key={i} className='relative h-[300px] w-[300px] rounded-lg'>
              <Image
                fill
                alt={image.id}
                src={image.url}
                className='rounded-lg object-cover'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
