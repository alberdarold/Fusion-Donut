import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn Fusion Energy — FusionDonut",
  description: "Educational resources on fusion energy for all knowledge levels.",
};

export default function LearnPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-white mb-4">Learning Hub</h1>
      <p className="text-lg text-gray-400 mb-12">
        From first principles to cutting-edge research — educational resources on fusion energy for every level.
      </p>
      <div className="rounded-xl border border-dashed border-gray-700 bg-gray-900/50 p-16 text-center">
        <span className="text-5xl">📚</span>
        <p className="mt-4 text-gray-400">Course content and guides coming soon.</p>
      </div>
    </div>
  );
}
