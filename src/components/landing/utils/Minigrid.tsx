import React from "react";

import { Beams } from "@/components/landing/utils/Beams";

export const Minigrid = () => {
  return (
    <div className="bg-grid-blue-900/50 absolute bottom-0 left-0 right-0 top-0">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/0 to-zinc-950/80" />
      <Beams />
    </div>
  );
};
