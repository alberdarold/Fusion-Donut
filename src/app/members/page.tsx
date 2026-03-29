import type { Metadata } from "next";
import Link from "next/link";
import { MEMBERS } from "@/lib/community-data";

export const metadata: Metadata = {
  title: "Members — FusionHub",
  description: "Meet the fusion energy researchers, engineers, and enthusiasts in the FusionHub community.",
};

const roleBadge: Record<string, string> = {
  researcher: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  moderator: "bg-green-500/10 text-green-400 border-green-500/20",
  member: "bg-gray-500/10 text-gray-400 border-gray-500/20",
};

const roleLabel: Record<string, string> = {
  researcher: "Researcher",
  moderator: "Moderator",
  member: "Member",
};

export default function MembersPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white">Member Directory</h1>
        <p className="mt-2 text-gray-400">
          Researchers, engineers, policy experts, and enthusiasts from the global fusion community.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {MEMBERS.map((member) => (
          <Link
            key={member.id}
            href={`/members/${member.username}`}
            className="group rounded-xl border border-gray-800 bg-gray-900 p-5 hover:border-gray-700 hover:bg-gray-900/80 transition-all"
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center text-sm font-bold text-orange-400 group-hover:ring-2 group-hover:ring-orange-500/30 transition-all">
                {member.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-white group-hover:text-orange-400 transition-colors truncate">
                  {member.name}
                </h3>
                <p className="text-xs text-gray-500">@{member.username}</p>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-2">
              <span
                className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${roleBadge[member.role]}`}
              >
                {roleLabel[member.role]}
              </span>
              {member.location && (
                <span className="text-xs text-gray-600 truncate">{member.location}</span>
              )}
            </div>

            <p className="mt-3 text-xs text-gray-400 line-clamp-2 leading-relaxed">{member.bio}</p>

            <div className="mt-3 flex flex-wrap gap-1">
              {member.interests.slice(0, 3).map((interest) => (
                <span
                  key={interest}
                  className="rounded-full bg-gray-800 px-2 py-0.5 text-xs text-gray-400"
                >
                  {interest}
                </span>
              ))}
            </div>

            <div className="mt-3 pt-3 border-t border-gray-800 text-xs text-gray-600">
              {member.postCount} posts · joined{" "}
              {new Date(member.joinedAt).toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
              })}
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 text-center text-sm text-gray-600">
        Showing {MEMBERS.length} of 12,400+ members
      </div>
    </div>
  );
}
