import React from "react";

export const SectionHeadingSpacing = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="mb-12 space-y-3">{children}</div>;
};
