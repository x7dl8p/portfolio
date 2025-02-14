'use client';

import { cn } from '@/lib/utils';
import { usePoints } from '@/contexts/PointsContext';

export default function PointsCounter() {
  const { points } = usePoints();

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <div className={cn(
        "flex items-center gap-2 rounded-full border bg-background/80 px-4 py-2 backdrop-blur transition-colors",
        points === 100 && "border-green-500 text-green-500"
      )}>
        <span className="relative flex h-3 w-3">
          <span className={cn(
            "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
            points === 100 ? "bg-green-500" : "bg-primary"
          )}></span>
          <span className={cn(
            "relative inline-flex h-3 w-3 rounded-full",
            points === 100 ? "bg-green-500" : "bg-primary"
          )}></span>
        </span>
        <span className="text-sm font-medium">
          {points}/100 Points
        </span>
      </div>
    </div>
  );
}
