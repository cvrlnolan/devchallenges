import { cn } from '@devchallenges/lib';
import { FC } from 'react';

const RatingBars: FC<{ rating: number }> = ({ rating }) => (
  <div className='flex items-center gap-2'>
    {new Array(5).fill(0).map((_, i) => (
      <div
        key={i}
        className={cn('flex h-3 w-[75px] rounded-full bg-gray-100', {
          'bg-primary': i + 1 <= rating,
        })}
      />
    ))}
  </div>
);

export { RatingBars };
