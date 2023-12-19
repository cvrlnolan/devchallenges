'use client';

import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
} from '@devchallenges/ui';
import { User } from 'lucide-react';
import { FC } from 'react';

const Navbar: FC = () => (
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
        <Input type='text' placeholder='Search by name' className='h-12' />
      </div>
    </div>

    <Dialog>
      <DialogTrigger asChild>
        <Button size='lg'>Add a photo</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a new photo</DialogTitle>
        </DialogHeader>
        <div className='space-y-3'>
          <div className='space-y-1'>
            <Label htmlFor='label'>Label</Label>
            <Input id='label' type='text' placeholder='Enter some label text' />
          </div>
          <div className='space-y-1'>
            <Label htmlFor='photoURL'>Photo URL</Label>
            <Input
              id='photoURL'
              type='text'
              placeholder='https://source.unsplash.com/...'
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant='ghost'>Cancel</Button>
          </DialogClose>
          <Button>Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
);

export { Navbar };
