"use client";

import Link from "next/link";
import { useAuth } from "@/lib/auth";

export default function NewThreadButton() {
  const { user } = useAuth();

  if (!user) {
    return (
      <Link
        href="/join"
        className="rounded-lg border border-orange-500/50 px-4 py-2 text-sm font-semibold text-orange-400 hover:bg-orange-500/10 transition-colors flex-shrink-0"
      >
        + New Thread
      </Link>
    );
  }

  return (
    <button className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-400 transition-colors flex-shrink-0">
      + New Thread
    </button>
  );
}
