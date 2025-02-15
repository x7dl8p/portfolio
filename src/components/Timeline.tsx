import { Experience } from "@/lib/schemas";
import TimelineItem from "./TimelineItem";
import { Card, CardContent } from "./ui/Card";

interface Props {
  experience: Experience[];
}

export default function Timeline({ experience }: Props) {
  return (
    <Card className="overflow-hidden border-none shadow-none">
      <CardContent className="p-0 py-2">
        <ul className="relative ml-10 before:absolute before:-left-[1px] before:top-8 before:h-[calc(100%-4rem)] before:w-[2px] before:bg-primary/20">
          {experience.map((exp, id) => (
            <TimelineItem key={id} experience={exp} />
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
