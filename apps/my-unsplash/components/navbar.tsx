'use client';

import {
  Button,
  Input,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@devchallenges/ui';
import { Menu, User } from 'lucide-react';
import { Dispatch, FC, SetStateAction } from 'react';

import { AddPhoto } from './add-photo';

const Navbar: FC<{
  searchText: string | null;
  setSearchText: Dispatch<SetStateAction<string | null>>;
}> = ({ searchText, setSearchText }) => (
  <>
    <div className='hidden w-full items-center justify-between overflow-hidden px-2 py-4 md:flex'>
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
            placeholder='Search by label'
            className='h-12'
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </div>

      <AddPhoto />
    </div>

    {/* Mobile Nav  */}
    <div className='flex w-full items-center justify-between px-2 py-4 md:hidden'>
      <div className='flex items-center gap-2'>
        <User size={24} />
        <div>
          <p className='text-sm font-bold'>My Unsplash</p>
          <p className='text-xs'>devchallenges.io</p>
        </div>
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant='ghost' size='sm'>
            <Menu size={24} />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <div className='space-y-4 py-4'>
            <Input
              value={searchText ?? undefined}
              type='text'
              placeholder='Search by label'
              onChange={(e) => setSearchText(e.target.value)}
            />

            <div className='flex w-full justify-center'>
              <AddPhoto />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  </>
);

export { Navbar };
