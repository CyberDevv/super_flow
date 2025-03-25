"use client"

import { ClockFading } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import React from "react";

const AuthLayout = ({
  children, alt
}: Readonly<{
  children: React.ReactNode;
  alt: React.ReactNode;
}>) => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className={cn("flex flex-col gap-6")}>
          <form>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-md">
                  <ClockFading className="size-10" />
                </div>
                <span className="sr-only">SuperFlow</span>
                <h1 className="text-xl font-bold">Welcome to SuperFlow</h1>

                {alt}
              </div>

              <div className="flex flex-col gap-6">
                {children}
              </div>

              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-neutral-200 dark:after:border-neutral-800">
                <span className="relative z-10 bg-white px-2 text-neutral-500 dark:bg-neutral-950 dark:text-neutral-400">
                  Or
                </span>
              </div>

              <Button variant="outline" className="w-full ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 24">
                  <path
                    className="fill-foreground"
                    d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 12.48 5.867 .307 5.387.307 12s5.56 12 12.173 12c3.573 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                    fill="currentColor"
                  />
                </svg>
                Continue with Google
              </Button>
            </div>
          </form>
          <div className="text-balance text-center text-xs text-neutral-500 [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-neutral-900  dark:text-neutral-400 dark:hover:[&_a]:text-neutral-50">
            By clicking continue, you agree to our{" "}
            <a href="#">Terms of Service</a>
            {""}
            and <a href="#">Privacy Policy</a>.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
