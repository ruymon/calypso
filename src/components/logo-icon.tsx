import { cn } from '@/lib/utils';
import { TowerControlIcon } from 'lucide-react';

interface LogoIconProps {};

export function LogoIcon({}: LogoIconProps) {
  return (
    <figure className='w-9 h-9 rounded-md bg-gradient-to-b from-primary to-indigo-700 flex items-center justify-center relative overflow-clip'>
      <TowerControlIcon className='w-9 h-9 absolute bottom-0 translate-y-0.5 text-primary-foreground fill-primary-foreground/40' />
      <LogoIconGrid className='w-9 h-9' />
    </figure>
  );
};


function LogoIconGrid({ className }: { className?: string }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' className={cn('text-primary-foreground/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2', className)} fill='none' viewBox='0 0 32 32'>
      <g stroke='currentColor' strokeWidth='0.4' clipPath='url(#clip0_202_61)'>
        <circle cx='16' cy='16' r='13.891' />
        <circle cx='16' cy='16' r='8.422' />
        <circle cx='16' cy='16' r='5.953' />
        <path d='M2.105 2.083L29.917 29.895' />
        <path d='M1.958 30.02L30.02 1.958' />
        <path d='M0 21.953L32 21.953' />
        <path d='M2.094 2.109L29.906 2.109' />
        <path d='M0 29.891L32 29.891' />
        <path d='M0 10.047L32 10.047' />
        <path d='M0 15.984L32 15.984' />
        <path d='M10.047 32L10.047 0' />
        <path d='M2.109 32L2.109 0' />
        <path d='M29.891 32L29.891 0' />
        <path d='M16 32L16 0' />
        <path d='M21.953 32L21.953 0' />
      </g>
      <defs>
        <clipPath id='clip0_202_61'>
          <path fill='currentColor' d='M0 0H32V32H0z' />
        </clipPath>
      </defs>
    </svg>
  )
}