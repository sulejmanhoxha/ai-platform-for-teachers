"use client";

import Link from "next/link";

import { authClient } from "@/lib/auth-client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

import { NavSubjects } from "@/components/sidebar/nav-projects";
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

const categories = [
  {
    title: "Quizzes",
    url: "quizzes",
  },
  {
    title: "Assignments",
    url: "assignments",
  },
  {
    title: "Lesson Plans",
    url: "lesson-plans",
  },
  {
    title: "Presentations",
    url: "presentations",
  },
];

export function AppSidebar() {
  const { data: session, isPending, error } = authClient.useSession();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Your AI Generated</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {categories.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>{item.title}</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

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
