import type { Metadata } from "next";
import Link from "next/link";
import { FORUM_CATEGORIES, FORUM_THREADS, formatRelativeTime } from "@/lib/community-data";
import NewThreadButton from "@/components/NewThreadButton";

export const metadata: Metadata = {
  title: "Community Forums — FusionHub",
  description: "Join discussions with fusion energy researchers and enthusiasts.",
};

const colorMap: Record<string, string> = {
  blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  orange: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  green: "bg-green-500/10 text-green-400 border-green-500/20",
  purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  yellow: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  gray: "bg-gray-500/10 text-gray-400 border-gray-500/20",
};

const hotThreads = FORUM_THREADS.filter((t) => t.isHot).slice(0, 4);

export default function CommunityPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="flex items-start justify-between mb-10">
        <div>
          <h1 className="text-4xl font-bold text-white">Community Forums</h1>
          <p className="mt-2 text-gray-400">
            Discussions, debates, and knowledge-sharing from the global fusion energy community.
          </p>
        </div>
        <NewThreadButton />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Forum categories */}
        <div className="lg:col-span-2 space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">
            Forum Categories
          </h2>
          {FORUM_CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/community/${cat.slug}`}
              className="group flex items-start gap-4 rounded-xl border border-gray-800 bg-gray-900 p-5 hover:border-gray-700 hover:bg-gray-900/80 transition-all"
            >
              <div
                className={`flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg border text-2xl ${colorMap[cat.color]}`}
              >
                {cat.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-semibold text-white group-hover:text-orange-400 transition-colors">
                    {cat.title}
                  </h3>
                  <span className="text-xs text-gray-600 flex-shrink-0">
                    {cat.threadCount.toLocaleString()} threads
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-400 leading-relaxed line-clamp-2">
                  {cat.description}
                </p>
                <div className="mt-2 flex items-center gap-4 text-xs text-gray-600">
                  <span>{cat.postCount.toLocaleString()} posts</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Hot threads */}
          <div className="rounded-xl border border-gray-800 bg-gray-900 p-5">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">
              🔥 Trending
            </h2>
            <div className="space-y-4">
              {hotThreads.map((thread) => (
                <Link
                  key={thread.id}
                  href={`/community/${thread.categorySlug}/${thread.id}`}
                  className="block group"
                >
                  <p className="text-sm text-gray-300 group-hover:text-white transition-colors leading-snug line-clamp-2">
                    {thread.title}
                  </p>
                  <div className="mt-1 flex items-center gap-3 text-xs text-gray-600">
                    <span>{thread.replyCount} replies</span>
                    <span>·</span>
                    <span>{formatRelativeTime(thread.lastReplyAt)}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Community stats */}
          <div className="rounded-xl border border-gray-800 bg-gray-900 p-5">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">
              Community
            </h2>
            <dl className="space-y-3">
              {[
                { label: "Members", value: "12,400+" },
                { label: "Threads", value: "1,062" },
                { label: "Posts", value: "15,735" },
                { label: "Online now", value: "142" },
              ].map((s) => (
                <div key={s.label} className="flex items-center justify-between">
                  <dt className="text-sm text-gray-400">{s.label}</dt>
                  <dd className="text-sm font-semibold text-orange-400">{s.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-4 pt-4 border-t border-gray-800">
              <Link
                href="/members"
                className="text-sm text-orange-400 hover:text-orange-300 transition-colors"
              >
                View member directory →
              </Link>
            </div>
          </div>

          {/* Join CTA */}
          <div className="rounded-xl border border-orange-500/20 bg-orange-500/5 p-5">
            <h3 className="font-semibold text-white">Join the discussion</h3>
            <p className="mt-1 text-sm text-gray-400">
              Create an account to post, reply, and connect with fusion researchers worldwide.
            </p>
            <Link
              href="/join"
              className="mt-4 inline-block rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-400 transition-colors"
            >
              Join free
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
