"use client";

import { useChatbot } from "@/contexts/ChatContext";
import { usePoints } from "@/contexts/PointsContext";
import { Bot, BotOff } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/Button";

export default function ChatToggle() {
  const { isVisible, toggleChatbot } = useChatbot();
  const [hasChatted, setHasChatted] = useState(false);
  const { addPoints } = usePoints();

  const handleToggle = () => {
    toggleChatbot();
    if (!hasChatted && !isVisible) {
      addPoints(7, "Opened chat for assistance");
      setHasChatted(true);
    }
  };

  return (
    <Button size="icon" variant="ghost" onClick={handleToggle}>
      {isVisible ? <Bot className="size-5" /> : <BotOff className="size-5" />}
      <span className="sr-only">Chat Toggle</span>
    </Button>
  );
}
