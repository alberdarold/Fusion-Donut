"use client";

import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/lib/auth";

interface Props {
  threadId: string;
  categorySlug: string;
}

export default function ReplyForm({ threadId, categorySlug }: Props) {
  const { user } = useAuth();
  const [body, setBody] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!user) {
    return (
      <div className="text-center py-4">
        <p className="text-gray-400 text-sm">
          <Link href="/login" className="text-orange-400 hover:text-orange-300">Sign in</Link>{" "}
          or{" "}
          <Link href="/join" className="text-orange-400 hover:text-orange-300">create an account</Link>{" "}
          to reply.
        </p>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="rounded-lg bg-green-500/10 border border-green-500/20 px-4 py-3 text-sm text-green-400 text-center">
        Reply posted! (Note: replies are not persisted in this demo build.)
      </div>
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!body.trim()) return;
    setSubmitted(true);
    setBody("");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-9 h-9 rounded-full bg-orange-500/20 flex items-center justify-center text-xs font-bold text-orange-400">
          {user.avatar}
        </div>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Share your thoughts…"
          rows={4}
          required
          className="flex-1 rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none resize-none"
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="rounded-lg bg-orange-500 px-5 py-2 text-sm font-semibold text-white hover:bg-orange-400 transition-colors"
        >
          Post reply
        </button>
      </div>
    </form>
  );
}
