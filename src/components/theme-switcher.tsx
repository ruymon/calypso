'use client';

import { Button, ButtonProps, ButtonVariants, buttonVariants } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface ThemeSwitcherProps extends ButtonProps {};

export function ThemeSwitcher({ variant = 'ghost', size = 'icon-sm', ...props }: ThemeSwitcherProps) {
  const [isMounted, setIsMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setIsMounted(true)
  }, [])


  function handleThemeChange() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  if (!isMounted) {
    return <ThemeSwitcherSkeleton />
  }

  return (
    <Button variant={variant} size={size} {...props} onClick={handleThemeChange}>
      {theme === 'dark' ? <Sun className='w-full h-full' /> : <Moon className='w-full h-full' />}
    </Button>
  );
};

interface ThemeSwitcherSkeletonProps {
  variant?: 'icon-sm' | 'icon' | 'icon-lg';
};

const themeSwitcherSkeletonVariants = {
  "icon-sm": "h-7 w-7 rounded-sm",
  "icon": "h-9 w-9 rounded-lg",
  "icon-lg": "h-10 w-10 rounded-lg",
}
function ThemeSwitcherSkeleton({ variant = 'icon-sm' }: ThemeSwitcherSkeletonProps) {
  return <Skeleton className={cn(themeSwitcherSkeletonVariants[variant])} />
}