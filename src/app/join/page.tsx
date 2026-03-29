import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Join FusionHub — Free Community for Fusion Energy",
  description: "Create your free FusionHub account and join the fusion energy community.",
};

export default function JoinPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <span className="text-3xl text-orange-400">⚛</span>
            <span className="text-2xl font-bold text-white">FusionHub</span>
          </Link>
          <h1 className="text-3xl font-bold text-white">Create your account</h1>
          <p className="mt-2 text-gray-400">Join the fusion energy community. Free forever.</p>
        </div>
        <div className="rounded-2xl border border-gray-800 bg-gray-900 p-8">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">Full name</label>
              <input
                type="text"
                placeholder="Jane Smith"
                className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">Email</label>
              <input
                type="email"
                placeholder="jane@example.com"
                className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-orange-500 py-3 text-sm font-semibold text-white hover:bg-orange-400 transition-colors mt-2"
            >
              Create account
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link href="/login" className="text-orange-400 hover:text-orange-300">
              Sign in
            </Link>
          </p>
        </div>
        <p className="mt-4 text-center text-xs text-gray-600">
          By joining you agree to our{" "}
          <Link href="/terms" className="underline hover:text-gray-400">Terms</Link>{" "}
          and{" "}
          <Link href="/privacy" className="underline hover:text-gray-400">Privacy Policy</Link>.
        </p>
      </div>
    </div>
  );
}
