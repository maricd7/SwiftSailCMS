"use client";
import Link from "next/link";
import { Heading } from "@/app/components/common/Heading/Heading";
import { useAuthContext } from "@/app/contexts/AuthContext";
import { useRouter } from "next/navigation";
import React from "react";
import supabase from "@/app/supabase";

const Login = () => {
  const { setSignedIn } = useAuthContext();
  const router = useRouter();
  const signIn = async (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (data) {
      console.log(data, "succes sign in");
      setSignedIn(true);
      router.push("/");
    }
  };

  return (
    <div className="flex-1 flex flex-col  px-8 sm:max-w-md justify-center gap-2">
      <Link
        href="/"
        className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{" "}
        Back
      </Link>
      <Heading text="Login" />
      <form
        className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
        action={signIn}
      >
        <label className="text-md text-gray-950" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6 border border-gray-950 text-gray-950"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md text-gray-950" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6 border border-gray-950 text-gray-950"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <button className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2">
          Sign In
        </button>
        <button
          type="submit"
          className="border border-foreground/20 rounded-md px-4 py-2 text-foreground mb-2"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};
export default Login;
