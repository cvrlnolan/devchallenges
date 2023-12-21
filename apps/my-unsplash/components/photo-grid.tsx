'use client';

import Image from 'next/image';
import { FC, useContext } from 'react';

import { Database } from '../lib/supabase.types';
import { DeleteModal } from './delete-modal';
import { SearchContext } from './search-context-wrapper';

type PhotoType = Database['public']['Tables']['photos']['Row'];

const PhotoGrid: FC<{ photos: PhotoType[] }> = ({ photos }) => {
  const searchTerm = useContext(SearchContext);

  return (
    <div className='w-full px-2 py-4'>
      <div>
        <ul className='list-none columns-3'>
          {(searchTerm
            ? photos.filter((photo) =>
                photo.label.toLowerCase().includes(searchTerm.toLowerCase()),
              )
            : photos
          ).map((photo, i) => (
            <li
              key={i}
              className='relative mb-4 h-auto w-full break-inside-avoid'
            >
              <div className='absolute left-0 top-0 h-full w-full cursor-pointer rounded-2xl bg-slate-900/40 opacity-0 hover:opacity-100'>
                <div className='relative h-full w-full'>
                  <div className='flex justify-end p-2'>
                    <DeleteModal id={photo.id} />
                  </div>

                  <div className='text-primary-foreground absolute bottom-4 left-0 w-full p-4 text-xl font-bold'>
                    {photo.label}
                  </div>
                </div>
              </div>
              <Image
                src={photo.photo_url}
                alt={photo.label}
                width={800}
                height={600}
                sizes='100vw'
                style={{
                  width: '100%',
                  height: 'auto',
                }}
                className='rounded-2xl object-cover'
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { PhotoGrid };
