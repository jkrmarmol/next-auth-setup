"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function page() {
  const router = useRouter();
  const session = useSession();

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="border-2 border border-gray-500 p-5">
        <p className="text-center font-sans text-xl mb-5 font-medium">Welcome Users!</p>
        <p className="font-mono">Name: {session.status === "authenticated" && session.data.user?.name}</p>
        <p className="font-mono">Email: {session.status === "authenticated" && session.data.user?.email}</p>
        <br />
        <button
          className="font-mono text-white bg-gray-700 py-3 px-4 rounded-sm mt-6"
          onClick={async (e) => {
            e.preventDefault();
            await signOut({ redirect: false });
            router.replace("/auth/signin");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
