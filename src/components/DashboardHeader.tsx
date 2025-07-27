"use client";

import { UserButton } from "@clerk/nextjs";
import UserDetails from "./UserDetails";

export default function DashboardHeader() {
  return (
    <div className="flex items-center gap-4">
      <UserDetails />
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
