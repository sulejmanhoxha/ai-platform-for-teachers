import { LayoutDashboard, LogOut, User } from "lucide-react";
import Link from "next/link";

import { authClient } from "@/lib/auth-client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function UserDropdown({ user }: { user: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{user}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <Link href="/dashboard">
          <DropdownMenuItem>
            <LayoutDashboard />
            <span>Dashboard</span>
          </DropdownMenuItem>
        </Link>

        <Link href="/dashboard/profile">
          <DropdownMenuItem>
            <User />
            <span>Profile</span>
          </DropdownMenuItem>
        </Link>

        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => authClient.signOut()}>
          <LogOut />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
