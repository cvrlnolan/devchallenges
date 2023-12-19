'use client';

import { Button } from '@devchallenges/ui';
import Image from 'next/image';

export default function Page(): JSX.Element {
  return (
    <div className='w-full p-2'>
      <div>
        <ul className='list-none columns-3 p-0'>
          {new Array(12).fill(0).map((_, i) => (
            <li
              key={i}
              className='relative mb-4 h-auto w-full break-inside-avoid'
            >
              <div className='absolute left-0 top-0 h-full w-full cursor-pointer rounded-2xl bg-slate-900/40 opacity-0 hover:opacity-100'>
                <div className='relative h-full w-full'>
                  <div className='flex justify-end p-2'>
                    <Button
                      size='sm'
                      variant='outline'
                      className='text-destructive border-destructive hover:bg-destructive/90 rounded-full bg-transparent'
                    >
                      delete
                    </Button>
                  </div>

                  <div className='text-primary-foreground absolute bottom-4 left-0 w-full p-4 text-xl font-bold'>
                    Some text
                  </div>
                </div>
              </div>
              <Image
                src={`https://source.unsplash.com/random/${i}`}
                alt='img'
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
}
