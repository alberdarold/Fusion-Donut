import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fusion News — FusionDonut",
  description: "The latest news and breakthroughs in fusion energy.",
};

export default function NewsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-white mb-4">Fusion News</h1>
      <p className="text-lg text-gray-400 mb-12">
        Curated coverage of breakthroughs, company milestones, and policy developments in fusion energy.
      </p>
      <div className="rounded-xl border border-dashed border-gray-700 bg-gray-900/50 p-16 text-center">
        <span className="text-5xl">📰</span>
        <p className="mt-4 text-gray-400">News feed coming soon. Articles and editorial content will live here.</p>
      </div>
    </div>
  );
}
