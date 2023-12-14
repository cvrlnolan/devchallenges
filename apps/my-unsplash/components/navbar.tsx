'use client';

import { Button, Input } from '@devchallenges/ui';
import { User } from 'lucide-react';
import { FC } from 'react';

const Navbar: FC = () => (
  <div className='flex w-full items-center justify-between p-2'>
    <div className='flex w-auto items-center gap-6'>
      <div className='flex items-center gap-2'>
        <User size={24} />
        <div>
          <p className='text-sm font-bold'>My Unsplash</p>
          <p className='text-xs'>devchallenges.io</p>
        </div>
      </div>
      <div className='w-[275px]'>
        <Input type='text' placeholder='Search by name' className='h-12' />
      </div>
    </div>

    <Button size='lg'>Add a photo</Button>
  </div>
);

export { Navbar };
