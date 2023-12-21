'use client';

import { Input } from '@devchallenges/ui';
import { User } from 'lucide-react';
import { Dispatch, FC, SetStateAction } from 'react';

import { AddPhoto } from './add-photo';

const Navbar: FC<{
  searchText: string | null;
  setSearchText: Dispatch<SetStateAction<string | null>>;
}> = ({ searchText, setSearchText }) => (
  <div className='flex w-full items-center justify-between px-2 py-4'>
    <div className='flex items-center gap-6'>
      <div className='flex items-center gap-2'>
        <User size={24} />
        <div>
          <p className='text-sm font-bold'>My Unsplash</p>
          <p className='text-xs'>devchallenges.io</p>
        </div>
      </div>
      <div className='w-[275px]'>
        <Input
          value={searchText ?? undefined}
          type='text'
          placeholder='Search by name'
          className='h-12'
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
    </div>

    <AddPhoto />
  </div>
);

export { Navbar };
