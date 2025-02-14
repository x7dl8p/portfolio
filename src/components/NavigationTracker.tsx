'use client';

import { usePoints } from '@/contexts/PointsContext';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function NavigationTracker() {
  const pathname = usePathname();
  const { recordVisit } = usePoints();

  useEffect(() => {
    const pageName = pathname.split('/')[1];
    const formattedName = pageName 
      ? pageName.charAt(0).toUpperCase() + pageName.slice(1)
      : 'Home';
    
    if (pathname === '/') {
      recordVisit('Welcome', 'Very welcome, hope you enjoy being here');
    } else {
      recordVisit(formattedName);
    }
  }, [pathname, recordVisit]);

  return null;
}
