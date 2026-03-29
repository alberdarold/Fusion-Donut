import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FORUM_CATEGORIES,
  FORUM_THREADS,
  getThread,
  getThreadReplies,
  formatRelativeTime,
} from "@/lib/community-data";
import ReactionBar from "@/components/ReactionBar";
import ReplyForm from "@/components/ReplyForm";

interface Props {
  params: Promise<{ slug: string; threadId: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { threadId } = await params;
  const thread = getThread(threadId);
  if (!thread) return {};
  return {
    title: `${thread.title} — FusionHub`,
    description: thread.body.slice(0, 160),
  };
}

export async function generateStaticParams() {
  return FORUM_THREADS.map((t) => ({ slug: t.categorySlug, threadId: t.id }));
}

const roleColors: Record<string, string> = {
  Researcher: "text-blue-400 bg-blue-400/10",
  "Former ITER Staff": "text-purple-400 bg-purple-400/10",
  Moderator: "text-green-400 bg-green-400/10",
  Member: "text-gray-400 bg-gray-400/10",
};

export default async function ThreadPage({ params }: Props) {
  const { slug, threadId } = await params;
  const thread = getThread(threadId);
  if (!thread || thread.categorySlug !== slug) notFound();

  const category = FORUM_CATEGORIES.find((c) => c.slug === slug);
  const replies = getThreadReplies(threadId);

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/community" className="hover:text-gray-300 transition-colors">
          Community
        </Link>
        <span>/</span>
        <Link href={`/community/${slug}`} className="hover:text-gray-300 transition-colors">
          {category?.title}
        </Link>
        <span>/</span>
        <span className="text-gray-400 truncate max-w-xs">{thread.title}</span>
      </nav>

      {/* Thread OP */}
      <article className="rounded-xl border border-gray-800 bg-gray-900 p-6 mb-6">
        <div className="flex items-start gap-4">
          <Link href={`/members/${thread.authorUsername}`} className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center text-sm font-bold text-orange-400 hover:ring-2 hover:ring-orange-500/50 transition-all">
              {thread.authorAvatar}
            </div>
          </Link>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 flex-wrap">
              <Link
                href={`/members/${thread.authorUsername}`}
                className="font-semibold text-white hover:text-orange-400 transition-colors"
              >
                {thread.authorName}
              </Link>
              <span className="text-xs text-gray-500">{formatRelativeTime(thread.createdAt)}</span>
            </div>
            <h1 className="mt-3 text-2xl font-bold text-white leading-snug">{thread.title}</h1>
            <div className="mt-4 text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">
              {thread.body}
            </div>
            <div className="mt-6 flex items-center gap-2">
              <ReactionBar reactions={thread.reactions} targetId={`thread-${threadId}`} />
              <span className="ml-auto text-xs text-gray-600">
                {thread.viewCount.toLocaleString()} views
              </span>
            </div>
          </div>
        </div>
      </article>

      {/* Replies */}
      {replies.length > 0 && (
        <div className="mb-6">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">
            {replies.length} {replies.length === 1 ? "Reply" : "Replies"}
          </h2>
          <div className="space-y-4">
            {replies.map((reply) => (
              <article
                key={reply.id}
                id={`reply-${reply.id}`}
                className="flex items-start gap-4 rounded-xl border border-gray-800 bg-gray-900/70 p-5"
              >
                <Link href={`/members/${reply.authorUsername}`} className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-xs font-bold text-orange-400 hover:ring-2 hover:ring-orange-500/50 transition-all">
                    {reply.authorAvatar}
                  </div>
                </Link>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap">
                    <Link
                      href={`/members/${reply.authorUsername}`}
                      className="font-semibold text-white hover:text-orange-400 transition-colors text-sm"
                    >
                      {reply.authorName}
                    </Link>
                    {reply.authorRole && (
                      <span
                        className={`text-xs rounded-full px-2 py-0.5 ${roleColors[reply.authorRole] ?? roleColors["Member"]}`}
                      >
                        {reply.authorRole}
                      </span>
                    )}
                    <span className="text-xs text-gray-600">
                      {formatRelativeTime(reply.createdAt)}
                    </span>
                  </div>
                  <div className="mt-2 text-sm text-gray-300 leading-relaxed whitespace-pre-wrap">
                    {reply.body}
                  </div>
                  <div className="mt-3">
                    <ReactionBar reactions={reply.reactions} targetId={`reply-${reply.id}`} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* Reply form */}
      <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
        <h2 className="text-sm font-semibold text-gray-300 mb-4">Post a reply</h2>
        <ReplyForm threadId={threadId} categorySlug={slug} />
      </div>
    </div>
  );
}
