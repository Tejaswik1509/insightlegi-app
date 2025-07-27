// app/dashboard/page.tsx
import { SignedIn, SignedOut, SignIn } from "@clerk/nextjs";

export default function Dashboard() {
  return (
    <>
      <SignedIn>
        <div className="p-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          {/* Add more components here */}
        </div>
      </SignedIn>

      <SignedOut>
        <SignIn redirectUrl="/dashboard" />
      </SignedOut>
    </>
  );
}
