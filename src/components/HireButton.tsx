'use client';

import { Button } from "@/components/ui/Button";
import { usePoints } from "@/contexts/PointsContext";
import { HeartHandshakeIcon } from "lucide-react";
import Link from "next/link";

export default function HireButton() {
  const { points } = usePoints();
  
  if (points < 100) return null;

  return (
    <Link href="/contact">
      <Button
        size="lg"
        className="animate-bounce gap-2 bg-primary hover:bg-primary/90"
      >
        <HeartHandshakeIcon className="size-5" />
        <span className="font-semibold">Hire Me!</span>
      </Button>
    </Link>
  );
}
