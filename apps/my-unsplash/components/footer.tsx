'use client';

import { Button } from '@devchallenges/ui';
import { FC } from 'react';

const Footer: FC = () => (
  <footer className='mt-4'>
    <div className='flex w-full items-center justify-center'>
      <Button variant='link' asChild>
        <a href='https://github.com/cvrlnolan' target='_blank' rel='noreferrer'>
          @cvrlnolan
        </a>
      </Button>
    </div>
  </footer>
);

export { Footer };
