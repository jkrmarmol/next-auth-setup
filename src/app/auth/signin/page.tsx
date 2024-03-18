"use client";
import React, { FormEvent } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  const session = useSession();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
      redirect: false,
    });
    if (res?.ok) {
      router.replace("/dashboard");
    }
  };
  if (session.status === "authenticated") {
    router.replace("/dashboard");
  }
  return (
    <div className="h-screen flex justify-center items-center">
      <form className="border-2 border border-gray-500 p-5" onSubmit={handleSubmit}>
        <h1 className="text-center font-sans font-bold">Sign In</h1>
        <div className="mt-6">
          <p className="text-sm font-mono">Email </p>
          <input
            type="text"
            name="email"
            className="border font-mono bg-gray-200 py-3 px-1 focus:outline-none rounded-sm"
          />
        </div>
        <div className="mt-6">
          <p className="text-sm font-mono">Password </p>
          <input
            type="password"
            name="password"
            className="border font-mono bg-gray-200 py-3 px-1 focus:outline-none rounded-sm"
          />
        </div>
        <button type="submit" className="font-mono text-white bg-gray-700 py-3 px-4 rounded-sm mt-6">
          Login
        </button>
      </form>
    </div>
  );
}
