"use client";
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return <SignUp redirectUrl="/dashboard" />;
}
