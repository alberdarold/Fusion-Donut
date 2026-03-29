import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FORUM_CATEGORIES,
  getCategoryThreads,
  formatRelativeTime,
} from "@/lib/community-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = FORUM_CATEGORIES.find((c) => c.slug === slug);
  if (!cat) return {};
  return {
    title: `${cat.title} — FusionHub Community`,
    description: cat.description,
  };
}

export async function generateStaticParams() {
  return FORUM_CATEGORIES.map((c) => ({ slug: c.slug }));
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = FORUM_CATEGORIES.find((c) => c.slug === slug);
  if (!category) notFound();

  const threads = getCategoryThreads(slug);

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/community" className="hover:text-gray-300 transition-colors">
          Community
        </Link>
        <span>/</span>
        <span className="text-gray-300">{category.title}</span>
      </nav>

      {/* Category header */}
      <div className="flex items-start gap-4 mb-8">
        <span className="text-4xl">{category.icon}</span>
        <div>
          <h1 className="text-3xl font-bold text-white">{category.title}</h1>
          <p className="mt-1 text-gray-400">{category.description}</p>
          <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
            <span>{category.threadCount.toLocaleString()} threads</span>
            <span>·</span>
            <span>{category.postCount.toLocaleString()} posts</span>
          </div>
        </div>
      </div>

      {/* Thread list */}
      <div className="space-y-2">
        {threads.length === 0 && (
          <div className="rounded-xl border border-dashed border-gray-700 bg-gray-900/50 p-16 text-center">
            <p className="text-gray-400">No threads yet. Be the first to post!</p>
          </div>
        )}
        {threads.map((thread) => (
          <Link
            key={thread.id}
            href={`/community/${slug}/${thread.id}`}
            className="group flex items-start gap-4 rounded-xl border border-gray-800 bg-gray-900 p-5 hover:border-gray-700 transition-all"
          >
            {/* Avatar */}
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-sm font-bold text-orange-400">
              {thread.authorAvatar}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2 flex-wrap">
                  {thread.isPinned && (
                    <span className="inline-flex items-center rounded-full bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 text-xs font-medium text-blue-400">
                      📌 Pinned
                    </span>
                  )}
                  {thread.isHot && (
                    <span className="inline-flex items-center rounded-full bg-orange-500/10 border border-orange-500/20 px-2 py-0.5 text-xs font-medium text-orange-400">
                      🔥 Hot
                    </span>
                  )}
                  <h3 className="font-semibold text-white group-hover:text-orange-400 transition-colors leading-snug">
                    {thread.title}
                  </h3>
                </div>
              </div>

              <p className="mt-1 text-sm text-gray-400 line-clamp-2 leading-relaxed">
                {thread.body.slice(0, 160)}…
              </p>

              <div className="mt-3 flex items-center gap-4 text-xs text-gray-500">
                <span>
                  by <span className="text-gray-400">{thread.authorName}</span>
                </span>
                <span>·</span>
                <span>{formatRelativeTime(thread.createdAt)}</span>
                <span>·</span>
                <span>{thread.replyCount} replies</span>
                <span>·</span>
                <span>{thread.viewCount.toLocaleString()} views</span>
                <div className="ml-auto flex items-center gap-1">
                  {Object.entries(thread.reactions).map(([emoji, count]) => (
                    <span key={emoji} className="flex items-center gap-0.5">
                      {emoji}
                      <span className="text-gray-500">{count}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {threads.length > 0 && (
        <p className="mt-6 text-center text-sm text-gray-600">
          Showing {threads.length} of {category.threadCount.toLocaleString()} threads
        </p>
      )}
    </div>
  );
}
