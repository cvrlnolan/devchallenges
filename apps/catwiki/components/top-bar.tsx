import { cn } from '@devchallenges/lib';
import { Cat } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

import { glassAntiqua } from '../style/fonts';

const TopBar: FC = () => (
  <div className='w-full py-2'>
    <Link href='/'>
      <div
        className={cn(
          glassAntiqua.className,
          'text-primary flex items-center gap-2',
        )}
      >
        <p className='text-2xl'>Catwiki</p>
        <Cat size={24} />
      </div>
    </Link>
  </div>
);

export { TopBar };
