"use client";

import { ChatProvider } from "@/contexts/ChatContext";
import { PointsProvider } from "@/contexts/PointsContext";
import { ThemeProvider, useTheme } from "next-themes";
import React from "react";
import { Toaster } from "sonner";
import Chat from "./Chat";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      enableSystem
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
    >
      <PointsProvider>
        <ChatProvider>
          {children}
          <Chat />
        </ChatProvider>
      </PointsProvider>
      <ToastProvider />
    </ThemeProvider>
  );
}

function ToastProvider() {
  const { resolvedTheme } = useTheme();

  return (
    <Toaster
      className="mt-12"
      position="top-right"
      theme={resolvedTheme === "dark" ? "dark" : "light"}
    />
  );
}
