import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/nextjs";
import UserDetails from "@/components/UserDetails"; // adjust path as needed
import DashboardHeader from "@/components/DashboardHeader";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SignedOut>
        <SignIn redirectUrl="/dashboard" />
      </SignedOut>

      <SignedIn>
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="w-64 bg-purple-100 p-6">
            <h2 className="text-xl font-bold mb-4">InsightLegi</h2>
            <ul className="space-y-2">
              <li><a href="/dashboard" className="text-purple-700 hover:underline">Dashboard</a></li>
              <li><a href="/dashboard/reports" className="text-purple-700 hover:underline">Reports</a></li>
              <li><a href="/dashboard/settings" className="text-purple-700 hover:underline">Settings</a></li>
            </ul>
          </aside>

          {/* Main content */}
          <main className="flex-1">
            <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
              <h1 className="text-lg font-medium">Dashboard</h1>
              <DashboardHeader />
            </header>
            <section className="p-6">{children}</section>
          </main>
        </div>
      </SignedIn>
    </>
  );
}
