"use client";

import ReactMarkdown from "react-markdown";

import { TextShimmer } from "@/components/ui/text-shimmer";

import { useAIContext } from "@/components/AIContext";

export function AIResponse() {
  const { generatedText, generating } = useAIContext();

  return (
    <div className="mx-4 my-10">
      <h2 className="text-2xl font-bold">AI Response</h2>
      {generating ? (
        <TextShimmer className="mt-4 text-lg tracking-wide" duration={1}>
          Generating...
        </TextShimmer>
      ) : (
        <div className="prose max-w-none dark:prose-invert prose-hr:my-2">
          <ReactMarkdown>{generatedText}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}
