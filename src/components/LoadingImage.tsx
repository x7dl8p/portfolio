'use client';

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { usePoints } from "@/contexts/PointsContext";

interface Props {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  threshold?: number; // Time in ms before triggering notification
}

export default function LoadingImage({ 
  src, 
  alt, 
  className,
  width,
  height,
  threshold = 3000 // Default 3 seconds
}: Props) {
  const [isHovering, setIsHovering] = useState(false);
  const [borderProgress, setBorderProgress] = useState(0);
  const progressInterval = useRef<NodeJS.Timeout>();
  const { addPoints } = usePoints();
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    if (isHovering && !hasTriggered) {
      let progress = 0;
      progressInterval.current = setInterval(() => {
        progress += 1;
        setBorderProgress(progress);
        
        if (progress >= 100) {
          clearInterval(progressInterval.current);
          setHasTriggered(true);
          addPoints(5, "Looked at the image suspiciously long 🤨");
        }
      }, threshold / 100); // Divide threshold into 100 steps
    } else {
      clearInterval(progressInterval.current);
      setBorderProgress(0);
    }

    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, [isHovering, threshold, addPoints, hasTriggered]);

  return (
    <div 
      className="relative rounded-lg"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div 
        className={cn(
          "absolute inset-0 rounded-lg transition-all",
          isHovering && "border-2 border-transparent"
        )}
        style={{
          background: isHovering 
            ? `conic-gradient(from 0deg at 50% 50%, 
                theme(colors.primary) ${borderProgress}%, 
                transparent ${borderProgress}%, 
                transparent 100%)`
            : "none"
        }}
      />
      <div className="absolute inset-[2px] rounded-lg bg-background" /> {/* Border mask */}
      <div className="relative"> {/* Content container */}
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={cn("rounded-lg", className)}
        />
      </div>
    </div>
  );
}
