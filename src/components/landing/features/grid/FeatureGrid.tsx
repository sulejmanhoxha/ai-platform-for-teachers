import React from "react";

import { CornerBlur } from "@/components/landing/utils/CornerBlur";
import { CornerGrid } from "@/components/landing/utils/CornerGrid";

import { Content } from "./Content";

export const FeatureGrid = () => {
  return (
    <div id="features" className="relative overflow-hidden">
      <Content />
      <CornerBlur />
      <CornerGrid />
    </div>
  );
};
