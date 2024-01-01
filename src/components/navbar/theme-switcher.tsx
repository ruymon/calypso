'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Skeleton } from '../ui/skeleton';

interface NavbarProps {};

export function NavbarThemeSwitcher({}: NavbarProps) {
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
    return <NavbarThemeSwitcherSkeleton />
  }

  return (
    <Button variant='ghost' onClick={handleThemeChange} size='icon'>
      {theme === 'dark' ? <Sun className='shrink-0 w-5 h-5' /> : <Moon className='shrink-0 w-5 h-5' />}
    </Button>
  );
};


function NavbarThemeSwitcherSkeleton() {
  return <Skeleton className='h-9 w-9' />
}