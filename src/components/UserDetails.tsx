"use client";

import { useUser } from "@clerk/nextjs";

export default function UserDetails() {
  const { user } = useUser();

  if (!user) return null;

  return (
    <div className="text-right">
      <p className="text-sm font-medium">{user.fullName}</p>
      <p className="text-xs text-gray-500">{user.primaryEmailAddress?.emailAddress}</p>
    </div>
  );
}
