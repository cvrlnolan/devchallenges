import Image from 'next/image';

import { RatingBars } from '../../../components/rating-bars';
import { breedCharacteristics } from '../../../lib/constants';

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className='my-4 w-full grow'>
      <div className='grid w-full grid-cols-2 gap-4'>
        <div className='relative h-[350px] w-[350px] rounded-lg'>
          <Image fill alt='' src='' className='rounded-lg object-cover' />
        </div>
        <div className='space-y-3'>
          <p className='text-primary text-2xl font-bold capitalize'>
            Breed name
          </p>
          <p>Breed description</p>
          <div className='flex items-center gap-2'>
            <p className='font-bold'>Temperament:</p>
            <p>Breed temperament</p>
          </div>
          <div className='flex items-center gap-2'>
            <p className='font-bold'>Origin:</p>
            <p>Breed origin</p>
          </div>
          <div className='flex items-center gap-2'>
            <p className='font-bold'>Life Span:</p>
            <p>Breed life span</p>
          </div>
          {breedCharacteristics.map((characteristic) => (
            <div
              key={characteristic.key}
              className='grid w-full grid-cols-3 items-center gap-2'
            >
              <div className='font-bold'>{characteristic.title}:</div>
              <div className='col-span-2'>
                <RatingBars rating={0} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='mt-8 space-y-6'>
        <p className='text-primary text-2xl font-bold'>Other Photos</p>
        <div className='grid w-full grid-cols-4 items-center gap-4'>
          {new Array(8).fill(0).map((_, i) => (
            <div key={i} className='relative h-[200px] w-[200px] rounded-lg'>
              <Image fill alt='' src='' className='rounded-lg object-cover' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
