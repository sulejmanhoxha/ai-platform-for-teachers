import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { SignInForm } from "@/components/auth/SignInForm";
import { SocialSignIn } from "@/components/auth/SocialsForm";

export default async function SignInPage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <Card className="mx-auto w-full max-w-sm bg-background text-foreground">
        <CardHeader>
          <CardTitle className="text-2xl">Signin</CardTitle>
          <CardDescription>
            Enter your email and password below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <SignInForm />

          <SocialSignIn />

          <div className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
