import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MEMBERS, getMember, getMemberThreads, formatRelativeTime } from "@/lib/community-data";

interface Props {
  params: Promise<{ username: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { username } = await params;
  const member = getMember(username);
  if (!member) return {};
  return {
    title: `${member.name} — FusionHub`,
    description: member.bio,
  };
}

export async function generateStaticParams() {
  return MEMBERS.map((m) => ({ username: m.username }));
}

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

export default async function MemberProfilePage({ params }: Props) {
  const { username } = await params;
  const member = getMember(username);
  if (!member) notFound();

  const threads = getMemberThreads(username);

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/members" className="hover:text-gray-300 transition-colors">
          Members
        </Link>
        <span>/</span>
        <span className="text-gray-400">{member.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile card */}
        <div className="lg:col-span-1">
          <div className="rounded-xl border border-gray-800 bg-gray-900 p-6 sticky top-24">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-orange-500/20 flex items-center justify-center text-2xl font-bold text-orange-400 mx-auto ring-4 ring-orange-500/10">
                {member.avatar}
              </div>
              <h1 className="mt-4 text-xl font-bold text-white">{member.name}</h1>
              <p className="text-sm text-gray-500">@{member.username}</p>
              <div className="mt-2 flex justify-center">
                <span
                  className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${roleBadge[member.role]}`}
                >
                  {roleLabel[member.role]}
                </span>
              </div>
            </div>

            <p className="mt-5 text-sm text-gray-400 leading-relaxed text-center">{member.bio}</p>

            <dl className="mt-5 space-y-3 border-t border-gray-800 pt-5">
              {member.location && (
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-gray-500">📍</span>
                  <span className="text-gray-400">{member.location}</span>
                </div>
              )}
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">📅</span>
                <span className="text-gray-400">
                  Joined{" "}
                  {new Date(member.joinedAt).toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">💬</span>
                <span className="text-gray-400">{member.postCount} posts</span>
              </div>
            </dl>

            {member.interests.length > 0 && (
              <div className="mt-5 border-t border-gray-800 pt-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">
                  Interests
                </p>
                <div className="flex flex-wrap gap-2">
                  {member.interests.map((interest) => (
                    <span
                      key={interest}
                      className="rounded-full bg-gray-800 border border-gray-700 px-3 py-1 text-xs text-gray-300"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Activity */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">
              Recent Threads
            </h2>
            {threads.length === 0 ? (
              <div className="rounded-xl border border-dashed border-gray-700 bg-gray-900/50 p-10 text-center">
                <p className="text-sm text-gray-500">No threads yet.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {threads.map((thread) => (
                  <Link
                    key={thread.id}
                    href={`/community/${thread.categorySlug}/${thread.id}`}
                    className="group block rounded-xl border border-gray-800 bg-gray-900 p-4 hover:border-gray-700 transition-all"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-white group-hover:text-orange-400 transition-colors text-sm leading-snug">
                        {thread.title}
                      </h3>
                      <div className="flex items-center gap-1 flex-shrink-0">
                        {thread.isHot && <span className="text-xs">🔥</span>}
                      </div>
                    </div>
                    <p className="mt-1 text-xs text-gray-400 line-clamp-1">{thread.body.slice(0, 120)}…</p>
                    <div className="mt-2 flex items-center gap-3 text-xs text-gray-600">
                      <span>{formatRelativeTime(thread.createdAt)}</span>
                      <span>·</span>
                      <span>{thread.replyCount} replies</span>
                      <span>·</span>
                      <span>{thread.viewCount.toLocaleString()} views</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Stats summary */}
          <div className="rounded-xl border border-gray-800 bg-gray-900 p-5">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">
              Activity
            </h2>
            <dl className="grid grid-cols-3 gap-4 text-center">
              {[
                { label: "Posts", value: member.postCount },
                { label: "Threads", value: threads.length },
                {
                  label: "Member since",
                  value: new Date(member.joinedAt).toLocaleDateString("en-US", {
                    month: "short",
                    year: "2-digit",
                  }),
                },
              ].map((s) => (
                <div key={s.label}>
                  <dt className="text-xs text-gray-500">{s.label}</dt>
                  <dd className="mt-1 text-lg font-bold text-orange-400">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
