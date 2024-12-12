"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import React, { useState } from "react";

import { authClient } from "@/lib/auth-client";

import { UserDropdown } from "@/components/auth/UserDropdown";
import { MaxWidthWrapper } from "@/components/landing/utils/MaxWidthWrapper";

import { NavCTAs } from "./NavCTAs";
import { NavLinks } from "./NavLinks";
import { NavLogo } from "./NavLogo";

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 150) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <motion.nav
      initial={{
        opacity: 0,
        y: "-100%",
      }}
      animate={{
        opacity: 1,
        y: "0%",
      }}
      transition={{
        duration: 1.25,
        ease: "easeInOut",
      }}
      className={`fixed left-0 right-0 top-0 z-50 bg-zinc-950/0 py-3 transition-colors ${scrolled && "bg-zinc-950/80 backdrop-blur"}`}
    >
      <MaxWidthWrapper>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            <NavLogo />
            <div className="hidden md:block">
              <NavLinks />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Session />
          </div>
        </div>
        <div className="block pt-1.5 md:hidden">
          <NavLinks />
        </div>
      </MaxWidthWrapper>
    </motion.nav>
  );
};

function Session() {
  const { data: session, isPending, error } = authClient.useSession();

  if (isPending) {
    return (
      <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-zinc-200"></div>
    );
  } else if (error || !session) {
    return <NavCTAs />;
  } else {
    return <UserDropdown user={session.user.name} />;
  }
}
