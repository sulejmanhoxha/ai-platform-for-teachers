"use client";

import { createContext, use, useState } from "react";

type AIContextProviderProps = {
  children: React.ReactNode;
};

type AIContext = {
  generatedText: string;
  setGeneratedText: React.Dispatch<React.SetStateAction<string>>;
  generating: boolean;
  setGenerating: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AIContext = createContext<AIContext | null>(null);

export default function AIContextProvider({
  children,
}: AIContextProviderProps) {
  const [generatedText, setGeneratedText] = useState("");
  const [generating, setGenerating] = useState(false);
  return (
    <AIContext
      value={{
        generatedText,
        setGeneratedText,

        generating,
        setGenerating,
      }}
    >
      {children}
    </AIContext>
  );
}

// custom hook
export function useAIContext() {
  const context = use(AIContext);
  if (!context) {
    throw new Error("useAIContext must be used within a AIContextProvider");
  }
  return context;
}
