import { cn } from '@/lib/utils';
import { ScanEyeIcon } from 'lucide-react';

export function Logo({ className }: { className?: string }) {
  return (
    <figure className={cn('flex items-center gap-2', className)}>
      <LogoIcon />
      <LogoText />
    </figure>
  );
};

export function LogoIcon({ className }: { className?: string }) {
  return (
    <figure className={cn('bg-primary text-primary-foreground p-1 flex items-center justify-center rounded-md w-7 h-7', className)}>
      <ScanEyeIcon className='w-full h-full' />
    </figure>
  );
};

export function LogoText({ className }: { className?: string }) {
  return (
    <figcaption className={cn('text-foreground text-2xl', className)}>
      <strong className='font-extrabold'>sky</strong>
      <span className='font-normal text-accent-foreground'>scope</span>
    </figcaption>
  );
};
