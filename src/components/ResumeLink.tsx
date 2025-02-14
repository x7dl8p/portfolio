'use client';

import { usePoints } from '@/contexts/PointsContext';
import { FileTextIcon } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/Button';

export default function ResumeLink() {
  const [hasViewed, setHasViewed] = useState(false);
  const { addPoints } = usePoints();

  const handleResumeClick = () => {
    if (!hasViewed) {
      addPoints(15, "Downloaded resume for review");
      setHasViewed(true);
    }
    window.open('/resume.pdf', '_blank');
  };

  return (
    <Button
      variant="default"
      className="gap-2"
      onClick={handleResumeClick}
    >
      <FileTextIcon className="size-4" />
      Resume
    </Button>
  );
}
