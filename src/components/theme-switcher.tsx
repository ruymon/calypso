'use client';

import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeSwitcher() {
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
    <Button variant='ghost' onClick={handleThemeChange} size='icon'>
      {theme === 'dark' ? <Sun className='shrink-0 w-5 h-5' /> : <Moon className='shrink-0 w-5 h-5' />}
    </Button>
  );
};


function ThemeSwitcherSkeleton() {
  return <Skeleton className='h-9 w-9' />
}