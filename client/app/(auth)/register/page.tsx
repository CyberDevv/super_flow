"use client";

import React from "react";
import AuthLayout from "../AuthLayout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import FormInput from "@/components/FormInput";

const Page = () => {
  const [email, setEmail] = React.useState("");

  return (
    <AuthLayout
      alt={
        <div className="text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="underline underline-offset-4">
            Sign in
          </Link>
        </div>
      }
    >
      <FormInput
        label="Email"
        type="email"
        placeholder="m@example.com"
        required
        value={email}
        setValue={setEmail}
      />
      <FormInput
        label="Password"
        type="password"
        placeholder="********"
        required
        value={email}
        setValue={setEmail}
      />{" "}
      <FormInput
        label="Confirm Password"
        type="password"
        placeholder="********"
        required
        value={email}
        setValue={setEmail}
      />
      <Button type="submit" className="w-full">
        Register
      </Button>
    </AuthLayout>
  );
};

export default Page;
