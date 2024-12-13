"use client";

import { authClient } from "@/lib/auth-client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar";

import { NavSubjects } from "@/components/sidebar/nav-subjects";
import { NavUser } from "@/components/sidebar/nav-user";

const subjects = [
  {
    title: "Mathematics",
    url: "mathematics",
  },
  {
    title: "Science",
    url: "science",
  },
  {
    title: "English",
    url: "english",
  },
];

export function AppSidebar() {
  const { data: session, isPending, error } = authClient.useSession();

  return (
    <Sidebar>
      <SidebarContent>
        <NavSubjects subjects={subjects} />
      </SidebarContent>

      <SidebarFooter>
        {isPending ? (
          <div className="mx-auto mb-5 h-5 w-5 animate-spin rounded-full border-b-2 border-zinc-200"></div>
        ) : (
          ""
        )}
        {session ? <NavUser user={session?.user} /> : ""}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
