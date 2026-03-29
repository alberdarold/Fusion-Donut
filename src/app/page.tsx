import Link from "next/link";

const stats = [
  { label: "Community Members", value: "12,400+" },
  { label: "Active Discussions", value: "3,200+" },
  { label: "Fusion Companies Tracked", value: "85+" },
  { label: "Weekly Newsletter Readers", value: "8,500+" },
];

const features = [
  {
    icon: "📰",
    title: "Fusion News",
    description:
      "Curated news and breakthroughs from ITER, Commonwealth Fusion, TAE Technologies, Helion, and every major player in the fusion race.",
    href: "/news",
  },
  {
    icon: "💬",
    title: "Community Forums",
    description:
      "Discuss plasma physics, investment theses, policy, and career paths with researchers, engineers, and enthusiasts worldwide.",
    href: "/community",
  },
  {
    icon: "📚",
    title: "Learning Hub",
    description:
      "From intro tokamak explainers to deep-dives on confinement physics — resources for every level of knowledge.",
    href: "/learn",
  },
  {
    icon: "📬",
    title: "Weekly Newsletter",
    description:
      "The best fusion energy content, once a week, curated by our editorial team. No noise, all signal.",
    href: "/newsletter",
  },
];

const latestNews = [
  {
    category: "Breakthrough",
    title: "NIF achieves sustained ignition milestone in latest experiment",
    date: "Mar 28, 2026",
    readTime: "4 min read",
  },
  {
    category: "Company",
    title: "Commonwealth Fusion secures $500M Series C to accelerate SPARC timeline",
    date: "Mar 25, 2026",
    readTime: "3 min read",
  },
  {
    category: "Policy",
    title: "EU commits €2B to fast-track commercial fusion by 2040",
    date: "Mar 22, 2026",
    readTime: "5 min read",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-950 pt-20 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-900/20 via-gray-950 to-gray-950" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-orange-400 mb-6">
            The Fusion Energy Community
          </span>
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            The future of energy
            <br />
            <span className="text-orange-400">is fusion.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Connect with researchers, engineers, and advocates driving the fusion revolution.
            Stay ahead of every breakthrough, debate every development, and help shape the
            clean energy future.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/join"
              className="rounded-full bg-orange-500 px-8 py-3.5 text-base font-semibold text-white hover:bg-orange-400 transition-colors shadow-lg shadow-orange-500/20"
            >
              Join the Community
            </Link>
            <Link
              href="/learn"
              className="rounded-full border border-gray-700 bg-gray-900 px-8 py-3.5 text-base font-semibold text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
            >
              Explore Fusion 101
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-800 bg-gray-900/50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="text-sm text-gray-400">{stat.label}</dt>
                <dd className="mt-1 text-3xl font-bold text-orange-400">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Everything fusion, in one place
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Whether you&apos;re a physicist, investor, student, or curious citizen — FusionDonut has you covered.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Link
                key={feature.title}
                href={feature.href}
                className="group rounded-2xl border border-gray-800 bg-gray-900 p-6 hover:border-orange-500/50 hover:bg-gray-900/80 transition-all"
              >
                <span className="text-3xl">{feature.icon}</span>
                <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-orange-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-24 border-t border-gray-800 bg-gray-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-white">Latest in Fusion</h2>
            <Link
              href="/news"
              className="text-sm font-medium text-orange-400 hover:text-orange-300 transition-colors"
            >
              View all news →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {latestNews.map((article) => (
              <article
                key={article.title}
                className="rounded-xl border border-gray-800 bg-gray-900 p-6 hover:border-gray-700 transition-colors cursor-pointer"
              >
                <span className="inline-block rounded-full bg-orange-500/10 px-3 py-0.5 text-xs font-semibold text-orange-400 mb-4">
                  {article.category}
                </span>
                <h3 className="text-base font-semibold text-white leading-snug hover:text-orange-400 transition-colors">
                  {article.title}
                </h3>
                <div className="mt-4 flex items-center gap-3 text-xs text-gray-500">
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-gray-950">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-4xl">📬</span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Stay ahead of the fusion revolution
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Join 8,500+ readers getting the best fusion energy news and analysis every week.
          </p>
          <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="you@example.com"
              className="flex-1 rounded-full border border-gray-700 bg-gray-900 px-5 py-3 text-sm text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-400 transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-3 text-xs text-gray-600">No spam. Unsubscribe anytime.</p>
        </div>
      </section>
    </>
  );
}
