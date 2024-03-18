"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="h-screen flex justify-center items-center">
      <button
        className="font-mono text-white bg-gray-700 py-3 px-4 rounded-sm mt-6"
        onClick={() => router.replace("/auth/signin")}
      >
        Click to Sign In
      </button>
    </div>
  );
}
