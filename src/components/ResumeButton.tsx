'use client';

import { Button } from "@/components/ui/Button";
import { usePoints } from "@/contexts/PointsContext";
import { FileDown } from "lucide-react";
import { useState } from "react";

export default function ResumeButton() {
  const [hasViewed, setHasViewed] = useState(false);
  const { addPoints } = usePoints();

  const handleClick = () => {
    if (!hasViewed) {
      addPoints(15, "Downloaded resume for review");
      setHasViewed(true);
    }
    window.open('/resume.pdf', '_blank');
  };

  return (
    <Button variant="outline" onClick={handleClick}>
      <span className="font-semibold">Resume</span>
      <FileDown className="ml-2 size-5" />
    </Button>
  );
}
