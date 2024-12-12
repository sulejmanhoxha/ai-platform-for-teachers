import React from "react";

import { MaxWidthWrapper } from "@/components/landing/utils/MaxWidthWrapper";
import { SectionHeading } from "@/components/landing/utils/SectionHeading";
import { SectionHeadingSpacing } from "@/components/landing/utils/SectionHeadingSpacing";
import { SectionSubheading } from "@/components/landing/utils/SectionSubheading";

import { LongCard } from "./LongCard";
import { MiniCard1 } from "./MiniCard1";
import { MiniCard2 } from "./MiniCard2";
import { SimpleGrid } from "./SimpleGrid";
import { Tower } from "./Tower";

export const Content = () => {
  return (
    <section>
      <MaxWidthWrapper className="relative z-20 pb-20 pt-20 md:pb-28 md:pt-40">
        <SectionHeadingSpacing>
          <SectionHeading>
            Show the people
            <br />
            <span className="bg-gradient-to-br from-blue-400 to-blue-700 bg-clip-text text-transparent">
              what makes you great
            </span>
          </SectionHeading>
          <SectionSubheading>
            Here's a good way to show some high levels pros as to what your
            product does and for who.
          </SectionSubheading>
        </SectionHeadingSpacing>

        <Grid />
        <div className="my-12 h-[1px] w-full bg-gradient-to-r from-blue-800/0 via-blue-400/50 to-blue-800/0 md:my-20" />
        <SimpleGrid />
      </MaxWidthWrapper>
    </section>
  );
};

const Grid = () => (
  <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
    <Tower />
    <div className="col-span-1 grid grid-cols-2 gap-4 lg:col-span-8 lg:grid-cols-2">
      <MiniCard1 />
      <MiniCard2 />
      <LongCard />
    </div>
  </div>
);
