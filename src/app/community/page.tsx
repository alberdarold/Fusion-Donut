import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community — FusionHub",
  description: "Join discussions with fusion energy researchers and enthusiasts.",
};

export default function CommunityPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-white mb-4">Community</h1>
      <p className="text-lg text-gray-400 mb-12">
        Discussions, debates, and knowledge-sharing from the global fusion energy community.
      </p>
      <div className="rounded-xl border border-dashed border-gray-700 bg-gray-900/50 p-16 text-center">
        <span className="text-5xl">💬</span>
        <p className="mt-4 text-gray-400">Forums and discussions coming soon.</p>
      </div>
    </div>
  );
}
