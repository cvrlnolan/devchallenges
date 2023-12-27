'use client';

import { cn } from '@devchallenges/lib';
import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@devchallenges/ui';
import { Cat, MoveRight } from 'lucide-react';
import Image from 'next/image';
import { FC, useState } from 'react';

import { searchBreed } from '../lib/actions';
import type { CatBreed } from '../lib/types';
import { glassAntiqua } from '../style/fonts';

const HomeBanner: FC<{ breeds: CatBreed[] }> = ({ breeds }) => {
  const [searchText, setSearchText] = useState<string>();
  const [searchedBreeds, setSearchedBreeds] = useState<CatBreed[]>();

  return (
    <div className='my-4 w-full rounded-2xl'>
      <div className='relative flex h-[600px] w-full flex-col justify-center'>
        <Image
          fill
          alt='home_cat'
          src='https://unsplash.com/photos/uqxHIVMyvJ4/download?force=true&w=1920'
          className='rounded-t-2xl object-cover object-right'
        />
        <div className='z-10 ml-12 w-[300px] items-center text-white'>
          <div
            className={cn(glassAntiqua.className, 'flex items-center gap-2')}
          >
            <p className='text-[64px]'>Catwiki</p>
            <Cat size={64} />
          </div>
          <div className='mt-1 text-xl'>
            Get to know more about your cat breed
          </div>
          <div className='mt-4 w-full'>
            <Popover open={Boolean(searchedBreeds?.length)}>
              <PopoverTrigger className='w-full'>
                <Input
                  type='text'
                  placeholder='Enter your breed'
                  className='h-[50px] rounded-full text-black'
                  value={searchText}
                  onChange={async (e) => {
                    setSearchText(e.target.value);
                    searchBreed(e.target.value).then((breeds) =>
                      setSearchedBreeds(breeds),
                    );
                  }}
                />
              </PopoverTrigger>
              <PopoverContent
                className='max-h-[200px] w-[300px] overflow-y-auto rounded-2xl'
                onOpenAutoFocus={(e) => e.preventDefault()}
                onCloseAutoFocus={(e) => e.preventDefault()}
              >
                <ul>
                  {searchedBreeds?.map((breed) => (
                    <li key={breed.id}>
                      <Button
                        variant='ghost'
                        className='w-full justify-start'
                        onClick={() => {
                          setSearchText(breed.name);
                          setSearchedBreeds(undefined);
                        }}
                      >
                        {breed.name}
                      </Button>
                    </li>
                  ))}
                </ul>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
      <div className='text-primary h-[600px] w-full rounded-b-2xl bg-stone-300'>
        <div className='container p-12'>
          <div className='space-y-2'>
            <p className='text-2xl font-bold'>Most Searched Breeds</p>
            <div className='bg-primary h-1 w-14 rounded-full' />
          </div>
          <div className='mt-10 flex w-full justify-between'>
            <p className='w-[400px] text-4xl font-bold'>
              66+ Breeds for you to discover
            </p>
            <div className='flex items-center gap-2 self-end'>
              <Button variant='link' className='font-semibold uppercase'>
                See more
                <MoveRight size={24} className='ml-2' />
              </Button>
            </div>
          </div>
          <div className='mt-10 grid w-full grid-cols-4'>
            {breeds.map((breed) => (
              <div className='space-y-1 justify-self-center'>
                <div key={breed.id} className='relative h-[250px] w-[250px]'>
                  <Image
                    fill
                    alt={breed.name}
                    src={`https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`}
                    className='rounded-2xl object-cover'
                  />
                </div>
                <p className='font-semibold'>{breed.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { HomeBanner };