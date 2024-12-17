"use client";

import AIContextProvider from "@/components/AIContext";
import { AIResponse } from "@/components/AIResponse";

export default function AIGenerationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AIContextProvider>
      <div className="@xl:grid @xl:grid-cols-2 @lg:grid-cols-1 h-full w-full grid-cols-1 md:min-h-[100vh]">
        {children}
        <AIResponse />
      </div>
    </AIContextProvider>
  );
}
