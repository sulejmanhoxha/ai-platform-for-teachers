import React from "react";
import { FiZap } from "react-icons/fi";

import { MaxWidthWrapper } from "@/components/landing/utils/MaxWidthWrapper";
import { Minigrid } from "@/components/landing/utils/Minigrid";
import { SectionHeading } from "@/components/landing/utils/SectionHeading";
import { SectionHeadingSpacing } from "@/components/landing/utils/SectionHeadingSpacing";
import { SectionSubheading } from "@/components/landing/utils/SectionSubheading";

import { CodeCard } from "./CodeCard";
import { Stepper } from "./Stepper";

export const CodeDemo = () => {
  return (
    <section className="relative overflow-hidden border-y border-zinc-700">
      <MaxWidthWrapper className="relative z-20 py-20 md:py-36">
        <span className="mx-auto mb-3 block w-fit rounded bg-gradient-to-br from-zinc-800 to-zinc-950 p-3 text-3xl shadow-md shadow-blue-900">
          <FiZap />
        </span>
        <SectionHeadingSpacing>
          <SectionHeading persistCenter>
            If it's code, show how it works
          </SectionHeading>
          <SectionSubheading persistCenter>
            Show why you're better than your competitors
          </SectionSubheading>
        </SectionHeadingSpacing>
        <CodeCard />
        <Stepper />
      </MaxWidthWrapper>
      <Minigrid />
    </section>
  );
};
