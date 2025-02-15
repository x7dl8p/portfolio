'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { usePoints } from "@/contexts/PointsContext";
import careerData from "@/data/career.json";
import educationData from "@/data/education.json";
import { careerSchema, educationSchema } from "@/lib/schemas";
import { useState } from "react";
import Timeline from "./Timeline";

export default function Experience() {
  const career = careerSchema.parse(careerData).career;
  const education = educationSchema.parse(educationData).education;
  const { addPoints } = usePoints();
  const [viewedSections, setViewedSections] = useState(new Set<string>());

  const handleTabChange = (value: string) => {
    if (!viewedSections.has(value)) {
      setViewedSections(prev => new Set(prev).add(value));
      if (value === 'work') {
        addPoints(10, "Explored work experience");
      } else if (value === 'education') {
        addPoints(8, "Checked educational background");
      }
    }
  };

  return (
    <Tabs defaultValue="work" onValueChange={handleTabChange}>
      <TabsList className="mb-6 grid w-full grid-cols-2 rounded-xl bg-card/60 backdrop-blur-sm">
        <TabsTrigger 
          value="work" 
          className="text-base relative border-none text-stone-400 rounded-md after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:scale-x-0 after:bg-primary/80 after:transition-transform data-[state=active]:after:scale-x-100"
        >
          Experience
        </TabsTrigger>
        <TabsTrigger 
          value="education" 
          className="text-base relative border-none text-stone-400 rounded-md after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:scale-x-0 after:bg-primary/80 after:transition-transform data-[state=active]:after:scale-x-100"
        >
          Education
        </TabsTrigger>
      </TabsList>
      <TabsContent value="work">
        <Timeline experience={career}></Timeline>
      </TabsContent>
      <TabsContent value="education">
        <Timeline experience={education}></Timeline>
      </TabsContent>
    </Tabs>
  );
}
