"use client";

import { motion } from "motion/react";
import React, { CSSProperties, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export const Card = ({
  className,
  children,
  style = {},
}: {
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
}) => {
  return (
    <motion.div
      initial={{
        filter: "blur(2px)",
      }}
      whileInView={{
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        delay: 0.25,
      }}
      style={style}
      className={twMerge(
        "relative h-full w-full overflow-hidden rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-950/50 to-zinc-900/80 p-6",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};
