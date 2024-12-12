import React from "react";

export const CornerGrid = () => {
  return (
    <div className="bg-grid-blue-900/50 absolute right-0 top-0 z-0 size-[50vw]">
      <div
        style={{
          backgroundImage:
            "radial-gradient(100% 100% at 100% 0%, rgba(9,9,11,0), rgba(9,9,11,1))",
        }}
        className="absolute inset-0"
      />
    </div>
  );
};
