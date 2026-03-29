"use client";

import { useState, useEffect } from "react";
import { REACTIONS } from "@/lib/community-data";

interface Props {
  reactions: Record<string, number>;
  targetId: string;
}

const STORAGE_PREFIX = "fh_rxn_";

export default function ReactionBar({ reactions: initialReactions, targetId }: Props) {
  const [reactions, setReactions] = useState(initialReactions);
  const [userReactions, setUserReactions] = useState<Set<string>>(new Set());

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_PREFIX + targetId);
      if (stored) setUserReactions(new Set(JSON.parse(stored)));
    } catch {}
  }, [targetId]);

  function toggle(emoji: string) {
    const hasReacted = userReactions.has(emoji);
    const newCount = (reactions[emoji] ?? 0) + (hasReacted ? -1 : 1);
    const newReactions = { ...reactions, [emoji]: Math.max(0, newCount) };
    const newUserReactions = new Set(userReactions);
    if (hasReacted) {
      newUserReactions.delete(emoji);
    } else {
      newUserReactions.add(emoji);
    }
    setReactions(newReactions);
    setUserReactions(newUserReactions);
    try {
      localStorage.setItem(STORAGE_PREFIX + targetId, JSON.stringify([...newUserReactions]));
    } catch {}
  }

  const activeReactions = Object.entries(reactions).filter(([, count]) => count > 0);
  const hasAny = activeReactions.length > 0;

  return (
    <div className="flex items-center gap-1.5 flex-wrap">
      {activeReactions.map(([emoji, count]) => (
        <button
          key={emoji}
          onClick={() => toggle(emoji)}
          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs border transition-all ${
            userReactions.has(emoji)
              ? "bg-orange-500/20 border-orange-500/40 text-orange-300"
              : "bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700"
          }`}
        >
          {emoji} <span>{count}</span>
        </button>
      ))}
      <div className="relative group">
        <button
          className={`inline-flex items-center justify-center w-7 h-7 rounded-full border text-sm transition-all ${
            hasAny
              ? "bg-gray-800 border-gray-700 text-gray-500 hover:text-gray-300 hover:bg-gray-700"
              : "bg-gray-800 border-gray-700 text-gray-500 hover:text-gray-300 hover:bg-gray-700"
          }`}
        >
          +
        </button>
        <div className="absolute bottom-full left-0 mb-1 hidden group-focus-within:flex group-hover:flex bg-gray-800 border border-gray-700 rounded-lg p-1.5 gap-1 z-10 shadow-xl">
          {REACTIONS.map((emoji) => (
            <button
              key={emoji}
              onClick={() => toggle(emoji)}
              className="text-lg hover:scale-125 transition-transform p-0.5"
            >
              {emoji}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
