'use client';

import data from "@/data/socials.json";
import { socialSchema } from "@/lib/schemas";
import { usePoints } from "@/contexts/PointsContext";
import Icon from "./Icon";

export default function Socials() {
  const socials = socialSchema.parse(data).socials;
  const { addPoints } = usePoints();

  const handleClick = (name: string) => {
    addPoints(10, `Explored ${name} social profile`);
  };

  return (
    <section className="flex gap-6">
      {socials.map((item) => (
        <a
          href={item.href}
          key={item.name}
          target="_blank"
          className="text-muted-foreground hover:text-foreground"
          rel="noopener noreferrer"
          title={item.name}
          onClick={() => handleClick(item.name)}
        >
          <span className="sr-only">{item.name}</span>
          <Icon name={item.icon} aria-hidden="true" className="size-5" />
        </a>
      ))}
    </section>
  );
}
