import { Experience } from "@/lib/schemas";
import TimelineItem from "./TimelineItem";
import { Card, CardContent } from "./ui/Card";

interface Props {
  experience: Experience[];
}

export default function Timeline({ experience }: Props) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <ul className="relative ml-10 before:absolute before:-left-[1px] before:top-8 before:h-[calc(100%-4rem)] before:w-[2px] before:bg-border">
          {experience.map((exp, id) => (
            <TimelineItem key={id} experience={exp} />
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
