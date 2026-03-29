"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth";

export default function AuthNav() {
  const { user, logout, isLoading } = useAuth();
  const router = useRouter();

  if (isLoading) {
    return <div className="w-24 h-8 rounded-full bg-gray-800 animate-pulse" />;
  }

  if (user) {
    return (
      <div className="flex items-center gap-3">
        <Link
          href={`/members/${user.username}`}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-xs font-bold text-orange-400 group-hover:ring-2 group-hover:ring-orange-500/50 transition-all">
            {user.avatar}
          </div>
          <span className="hidden sm:inline text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
            {user.name.split(" ")[0]}
          </span>
        </Link>
        <button
          onClick={() => {
            logout();
            router.push("/");
          }}
          className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
        >
          Sign out
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <Link
        href="/login"
        className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
      >
        Sign in
      </Link>
      <Link
        href="/join"
        className="rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-400 transition-colors"
      >
        Join Free
      </Link>
    </div>
  );
}
