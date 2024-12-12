import { useRouter } from "next/navigation";
import React from "react";

import { GhostButton } from "../buttons/GhostButton";
import { SplashButton } from "../buttons/SplashButton";

export const NavCTAs = () => {
  const router = useRouter();
  return (
    <div className="flex items-center gap-2">
      <GhostButton
        onClick={() => router.push("/signup")}
        className="rounded-md px-4 py-1 text-base"
      >
        Sign up
      </GhostButton>
      <SplashButton
        onClick={() => router.push("/signin")}
        className="px-4 py-1 text-base text-zinc-100"
      >
        Sign in
      </SplashButton>
    </div>
  );
};
