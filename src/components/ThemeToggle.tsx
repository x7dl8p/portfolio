"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { usePoints } from "@/contexts/PointsContext";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/Button";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [hasChangedTheme, setHasChangedTheme] = useState(false);
  const { addPoints } = usePoints();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={() => {
        const newTheme = resolvedTheme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        if (!hasChangedTheme) {
          addPoints(7, `Changed theme to ${newTheme} mode`);
          setHasChangedTheme(true);
        }
      }}
    >
      {resolvedTheme === "dark" ? (
        <SunIcon className="size-4 text-orange-300" />
      ) : (
        <MoonIcon className="size-4 text-indigo-500" />
      )}
      <span className="sr-only">Theme Toggle</span>
    </Button>
  );
}
