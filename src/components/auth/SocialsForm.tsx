"use client";

import { toast } from "@/hooks/use-toast";

import { authClient } from "@/lib/auth-client";

import { Button } from "@/components/ui/button";

export function SocialSignIn() {
  async function socialSingIn() {
    console.log("socialSingIn");

    await authClient.signIn.social(
      {
        provider: "github",
        callbackURL: "/",
        errorCallbackURL: "/error",
      },
      {
        onRequest: (ctx) => {
          toast({
            variant: "default",
            description: "Signing in...",
          });
        },
        onSuccess: (ctx) => {
          //redirect to the dashboard
          toast({
            variant: "default",
            description: "Signed in successfully.",
          });
        },
        onError: (ctx) => {
          toast({
            variant: "destructive",
            description: ctx.error.message,
          });
        },
      },
    );
  }

  return (
    <Button variant={"outline"} onClick={socialSingIn} className="w-full">
      Signin with Github
    </Button>
  );
}
