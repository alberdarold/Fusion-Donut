import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — FusionDonut",
  description: "FusionDonut is the community platform for fusion energy.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-white mb-6">About FusionDonut</h1>
      <div className="prose prose-invert prose-lg max-w-none text-gray-300">
        <p>
          FusionDonut is the community platform for everyone who believes fusion energy will
          transform civilization. We bring together physicists, engineers, investors, policymakers,
          and curious citizens to share knowledge, track progress, and accelerate the fusion revolution.
        </p>
        <p>
          Our mission: make fusion energy accessible, understandable, and actionable for everyone.
        </p>
        <h2 className="text-2xl font-bold text-white mt-10 mb-4">Why fusion?</h2>
        <p>
          Fusion is the same process that powers the sun. When hydrogen atoms fuse, they release
          enormous amounts of clean energy — with no carbon emissions, no long-lived radioactive
          waste, and virtually unlimited fuel from seawater. After decades of research, commercial
          fusion is now closer than ever.
        </p>
        <h2 className="text-2xl font-bold text-white mt-10 mb-4">What we do</h2>
        <ul className="space-y-2 text-gray-300">
          <li>Curate and publish the best fusion energy news and research</li>
          <li>Host forums for technical and policy discussions</li>
          <li>Produce educational content for all knowledge levels</li>
          <li>Publish a weekly newsletter read by 8,500+ subscribers</li>
        </ul>
      </div>
    </div>
  );
}
