"use client";
import { SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-between items-center px-12 bg-white">
      <div className="w-2/3 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Welcome to InsightLegi</h1>
        <p className="text-lg text-gray-700 mb-6">
          Your gateway to understanding how laws shape local communities.
        </p>
        <p className="text-gray-600 mb-4">
          InsightLegi is a public platform that provides interactive access to county-level
          financial data and legislative rules across the United States. We are committed to breaking down legal and financial complexity to promote transparency and understanding for researchers, journalists, advocates and the public.
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Explore how fines, fees, and surcharges are applied across different counties</li>
          <li>Understand where public money goes and how it's collected</li>
          <li>Analyze structured legal data to uncover trends and disparities</li>
          <li>Promote transparency and better policymaking through data</li>
        </ul>
      </div>

      <SignedOut>
        <div className="absolute top-1/3 right-40 flex flex-col gap-4">
          <SignUpButton>
            <button className="bg-purple-600 text-white font-semibold py-2 px-8 rounded shadow-md hover:bg-purple-700 transition">
              Sign Up
            </button>
          </SignUpButton>

          <SignInButton>
            <button className="bg-purple-600 text-white font-semibold py-2 px-8 rounded shadow-md hover:bg-purple-700 transition">
              Sign In
            </button>
          </SignInButton>
        </div>
      </SignedOut>
    </main>
  );
}
