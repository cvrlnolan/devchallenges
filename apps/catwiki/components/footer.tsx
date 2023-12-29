import { cn } from '@devchallenges/lib';
import { Cat } from 'lucide-react';
import { FC } from 'react';

import { glassAntiqua } from '../style/fonts';

const Footer: FC = () => (
  <div className='flex justify-between rounded-t-3xl bg-black p-5 text-white'>
    <div className={cn(glassAntiqua.className, 'flex items-center gap-2')}>
      <p className='text-2xl'>Catwiki</p>
      <Cat size={24} />
    </div>
    <div className='flex items-center gap-2 text-sm'>
      <p>
        &copy; created by{' '}
        <span className='inline-flex underline underline-offset-2'>
          cvrlnolan
        </span>
      </p>
      <p>- devChallenges.io {new Date().getFullYear()}</p>
    </div>
  </div>
);

export { Footer };
