import { Beams } from "@/components/landing/utils/Beams";

import { Content } from "./Content";
import { GradientGrid } from "./GradientGrid";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <Content />
      <Beams />
      <GradientGrid />
    </section>
  );
};
