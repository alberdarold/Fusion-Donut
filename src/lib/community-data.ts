export interface ForumCategory {
  slug: string;
  title: string;
  description: string;
  icon: string;
  threadCount: number;
  postCount: number;
  color: string;
}

export interface ForumThread {
  id: string;
  categorySlug: string;
  title: string;
  body: string;
  authorName: string;
  authorAvatar: string;
  authorUsername: string;
  createdAt: string;
  replyCount: number;
  viewCount: number;
  isPinned?: boolean;
  isHot?: boolean;
  lastReplyAt: string;
  lastReplyAuthor: string;
  reactions: Record<string, number>;
}

export interface ThreadReply {
  id: string;
  threadId: string;
  body: string;
  authorName: string;
  authorAvatar: string;
  authorUsername: string;
  authorRole: string;
  createdAt: string;
  reactions: Record<string, number>;
  parentReplyId?: string;
}

export const FORUM_CATEGORIES: ForumCategory[] = [
  {
    slug: "science",
    title: "Science & Research",
    description: "Plasma physics, confinement approaches, breakthroughs, and peer-reviewed papers.",
    icon: "🔬",
    threadCount: 312,
    postCount: 4821,
    color: "blue",
  },
  {
    slug: "industry",
    title: "Industry & Companies",
    description: "Track ITER, CFS, Helion, TAE, General Fusion, and every private fusion venture.",
    icon: "🏭",
    threadCount: 218,
    postCount: 3104,
    color: "orange",
  },
  {
    slug: "policy",
    title: "Policy & Investment",
    description: "Government programs, funding rounds, regulation, and the path to commercialization.",
    icon: "🏛️",
    threadCount: 143,
    postCount: 1987,
    color: "green",
  },
  {
    slug: "careers",
    title: "Careers & Education",
    description: "Job postings, graduate programs, internships, and career advice from fusion pros.",
    icon: "🎓",
    threadCount: 97,
    postCount: 1342,
    color: "purple",
  },
  {
    slug: "beginners",
    title: "Fusion 101",
    description: "New to fusion? Ask anything here. No question is too basic.",
    icon: "⚛️",
    threadCount: 204,
    postCount: 3560,
    color: "yellow",
  },
  {
    slug: "offtopic",
    title: "Off-Topic",
    description: "Energy, climate, space, and everything adjacent to the fusion dream.",
    icon: "💬",
    threadCount: 88,
    postCount: 921,
    color: "gray",
  },
];

export const FORUM_THREADS: ForumThread[] = [
  {
    id: "t1",
    categorySlug: "science",
    title: "NIF's latest Q>1 results — what does it actually mean for commercial fusion?",
    body: `NIF announced sustained ignition this week with Q≈1.5, which is obviously a huge milestone. But I keep seeing very different takes on what it means commercially. The skeptics point out that NIF uses laser drivers that are hopelessly inefficient (~1% wall-plug), meaning the actual wall-plug efficiency is still terrible. The optimists say this proves ignition physics is solved and it's now an engineering problem.

I'd love to hear from people with actual laser fusion backgrounds. Is the ignition physics result truly separable from the driver technology question? And do concepts like shock ignition or fast ignition change the laser efficiency picture enough to make ICF commercial?`,
    authorName: "Dr. Sarah Chen",
    authorAvatar: "SC",
    authorUsername: "sarahchen",
    createdAt: "2026-03-28T09:15:00Z",
    replyCount: 34,
    viewCount: 1820,
    isPinned: false,
    isHot: true,
    lastReplyAt: "2026-03-30T07:42:00Z",
    lastReplyAuthor: "marcuswebb",
    reactions: { "🔥": 48, "🧠": 31, "👍": 22 },
  },
  {
    id: "t2",
    categorySlug: "science",
    title: "Comparing plasma-facing material options: tungsten vs. liquid metal walls",
    body: `The plasma-facing component (PFC) challenge is one of the toughest engineering problems in fusion. Tungsten is the current ITER choice due to its high melting point and low tritium retention, but liquid metal walls (lithium or tin) offer some interesting advantages including self-healing surfaces and potentially better power handling.

What's the current consensus on the long-term viability of each approach for a commercial reactor? I've been reading papers from both camps and the tradeoffs aren't obvious.`,
    authorName: "Priya Nair",
    authorAvatar: "PN",
    authorUsername: "priyanair",
    createdAt: "2026-03-25T14:30:00Z",
    replyCount: 21,
    viewCount: 943,
    isPinned: false,
    isHot: false,
    lastReplyAt: "2026-03-29T11:20:00Z",
    lastReplyAuthor: "jlhansen",
    reactions: { "👍": 19, "🧠": 14 },
  },
  {
    id: "t3",
    categorySlug: "science",
    title: "[AMA] I spent 6 years at ITER. Ask me anything.",
    body: `Just wrapped up my time at the ITER Organization after 6 years working on diagnostics and real-time control systems. Happy to answer questions about the technical side, what it's actually like working there day to day, or the current project status (which is more complex than press releases suggest).

I'll be answering questions through the weekend. Fire away.`,
    authorName: "Tom Reinholt",
    authorAvatar: "TR",
    authorUsername: "tomreinholt",
    createdAt: "2026-03-22T08:00:00Z",
    replyCount: 89,
    viewCount: 5420,
    isPinned: true,
    isHot: true,
    lastReplyAt: "2026-03-30T06:00:00Z",
    lastReplyAuthor: "sarahchen",
    reactions: { "🔥": 112, "❤️": 87, "👍": 64 },
  },
  {
    id: "t4",
    categorySlug: "industry",
    title: "Commonwealth Fusion's SPARC timeline — realistic or optimistic?",
    body: `CFS just announced updated SPARC milestones with first plasma targeted for 2027 and ARC (the demo plant) in the early 2030s. Given the history of fusion timelines slipping, I'm curious what the community thinks about the credibility of this schedule.

Their HTS magnet results were genuinely impressive (20T coil demonstrated), but going from a working coil to a full tokamak with integrated systems is a huge step. What risks concern you most?`,
    authorName: "Marcus Webb",
    authorAvatar: "MW",
    authorUsername: "marcuswebb",
    createdAt: "2026-03-27T16:45:00Z",
    replyCount: 56,
    viewCount: 3210,
    isPinned: false,
    isHot: true,
    lastReplyAt: "2026-03-30T08:10:00Z",
    lastReplyAuthor: "priyanair",
    reactions: { "🔥": 67, "🤔": 43, "👍": 29 },
  },
  {
    id: "t5",
    categorySlug: "industry",
    title: "Helion's fixed-price power purchase agreement with Microsoft — breakdown",
    body: `Helion signed what appears to be the first fusion power purchase agreement ever with Microsoft. The terms (100MW by 2028, with penalty clauses) are remarkable for how concrete they are. I've been trying to understand whether this was mostly a PR/investment-signaling move or if there's genuine technical confidence behind it.

Breakdown of what I've found so far in the body — would love pushback or additional context from anyone who knows Helion's FRC approach well.`,
    authorName: "Yuki Tanaka",
    authorAvatar: "YT",
    authorUsername: "yukitanaka",
    createdAt: "2026-03-20T12:00:00Z",
    replyCount: 43,
    viewCount: 2890,
    isPinned: false,
    isHot: false,
    lastReplyAt: "2026-03-28T19:00:00Z",
    lastReplyAuthor: "marcuswebb",
    reactions: { "🧠": 38, "👍": 27 },
  },
  {
    id: "t6",
    categorySlug: "policy",
    title: "EU's €2B fusion program — how does it compare to US DOE fusion spending?",
    body: `The EU just committed €2B to accelerate commercial fusion by 2040 through a new program. I've been trying to compare this to US DOE fusion-related spending and it's genuinely hard to make apples-to-apples comparisons because of how money is categorized differently.

Does anyone have a clear breakdown of current US fusion funding across: ITER contribution, NIF, basic research (FES), and private company matches/grants?`,
    authorName: "Amara Osei",
    authorAvatar: "AO",
    authorUsername: "amaraosei",
    createdAt: "2026-03-23T10:30:00Z",
    replyCount: 28,
    viewCount: 1450,
    isPinned: false,
    isHot: false,
    lastReplyAt: "2026-03-29T15:30:00Z",
    lastReplyAuthor: "tomreinholt",
    reactions: { "👍": 22, "🧠": 18 },
  },
  {
    id: "t7",
    categorySlug: "beginners",
    title: "Seriously — why is fusion always '30 years away'? Is that changing?",
    body: `I keep hearing this joke but I've never gotten a satisfying explanation for why it's been stuck. I understand it's hard but if we've been working on it since the 1950s surely progress has been made? Is the '30 years' thing still accurate, and what's different now vs. before?`,
    authorName: "Jordan Kim",
    authorAvatar: "JK",
    authorUsername: "jordankim",
    createdAt: "2026-03-26T20:00:00Z",
    replyCount: 47,
    viewCount: 3890,
    isPinned: false,
    isHot: true,
    lastReplyAt: "2026-03-30T09:00:00Z",
    lastReplyAuthor: "sarahchen",
    reactions: { "❤️": 55, "👍": 42, "😂": 18 },
  },
  {
    id: "t8",
    categorySlug: "careers",
    title: "PhD programs with strong fusion focus in 2026 — compiled list",
    body: `I put together a list of PhD programs with strong fusion research groups for anyone applying this cycle. Grouped by confinement approach. Note: some are joint programs with national labs.

**Tokamak / MCF focused:**
- MIT PSFC (obviously)
- Princeton Plasma Physics Lab (PPPL) — Princeton or Columbia
- University of Wisconsin — Madison
...

Adding more in comments as I find them. Please add your own recommendations or corrections.`,
    authorName: "Lena Fischer",
    authorAvatar: "LF",
    authorUsername: "lenafischer",
    createdAt: "2026-03-18T09:00:00Z",
    replyCount: 62,
    viewCount: 4200,
    isPinned: true,
    isHot: false,
    lastReplyAt: "2026-03-30T07:00:00Z",
    lastReplyAuthor: "jordankim",
    reactions: { "❤️": 88, "👍": 71 },
  },
];

export const THREAD_REPLIES: ThreadReply[] = [
  {
    id: "r1",
    threadId: "t1",
    body: "Great question. The ignition physics vs. driver efficiency distinction is real and important. The NIF result genuinely does confirm that the implosion physics works at the level required — the hot spot forms, alpha heating dominates, and burn propagates. That's not nothing.\n\nBut you're right that the wall-plug Q is something like 1/150 even with this result. The path to commercial ICF requires either fundamentally different drivers (diode-pumped solid state lasers at higher repetition, or heavy ion beams) or a different ignition scheme like shock ignition which could theoretically work with lower laser energies.\n\nI worked on shock ignition simulations for a few years — the physics is promising but the tolerances on driver symmetry are brutal. Not impossible, but it adds another layer of engineering challenge.",
    authorName: "Dr. Sarah Chen",
    authorAvatar: "SC",
    authorUsername: "sarahchen",
    authorRole: "Researcher",
    createdAt: "2026-03-28T10:30:00Z",
    reactions: { "👍": 31, "🧠": 19 },
  },
  {
    id: "r2",
    threadId: "t1",
    body: "Worth adding that the fast ignition concept (Tabak et al.) was supposed to solve this but ran into serious issues with hot electron transport and preheating. The results from OMEGA and GEKKO haven't been as clean as hoped. LFEX in Japan is the most recent big push.\n\nMy take: ICF commercial power is a longer shot than MCF, not because the physics is wrong, but because the engineering path is less clear. The laser companies need to improve efficiency by 2+ orders of magnitude. That's doable in principle, but nobody's shown a credible roadmap.",
    authorName: "Tom Reinholt",
    authorAvatar: "TR",
    authorUsername: "tomreinholt",
    authorRole: "Former ITER Staff",
    createdAt: "2026-03-28T11:45:00Z",
    reactions: { "👍": 24, "🧠": 17 },
  },
  {
    id: "r3",
    threadId: "t1",
    body: "One thing I haven't seen discussed: the target fabrication challenge. NIF targets are incredibly expensive to make (reportedly $10,000+/target) and need to be produced at millions per day to make economic sense for a power plant. That's a manufacturing challenge on par with the physics challenge. Anyone have updates on the target fab roadmap?",
    authorName: "Marcus Webb",
    authorAvatar: "MW",
    authorUsername: "marcuswebb",
    authorRole: "Member",
    createdAt: "2026-03-28T14:00:00Z",
    reactions: { "🧠": 22, "👍": 15 },
  },
  {
    id: "r4",
    threadId: "t7",
    body: "The 'always 30 years away' joke is actually more nuanced than it sounds. In the 1970s and 80s, scientists *were* genuinely estimating 30 years for a specific set of technical reasons, and those estimates were reasonable given what was known. The problem is that each subsequent generation reset the clock based on new obstacles discovered.\n\nWhat's different now: 1) We've actually achieved Q>1 at NIF 2) HTS magnet technology (Commonwealth Fusion's 20T demonstration) genuinely changes the economics of compact tokamaks 3) Private capital is now funding at a scale governments never did. These aren't hype — they're real milestones that weren't true 10 years ago.",
    authorName: "Dr. Sarah Chen",
    authorAvatar: "SC",
    authorUsername: "sarahchen",
    authorRole: "Researcher",
    createdAt: "2026-03-27T08:00:00Z",
    reactions: { "❤️": 42, "👍": 38, "🧠": 21 },
  },
  {
    id: "r5",
    threadId: "t7",
    body: "To add a bit of historical context: the original '30 years' estimate in the 50s-60s was actually much more optimistic — people thought 10-15 years. The timeline stretched as people discovered how turbulent and chaotic plasmas actually are. MHD instabilities, anomalous transport, disruptions — each one pushed the timeline back.\n\nThe real reason it *hasn't* been cracked is that plasma physics is genuinely one of the hardest problems in physics. You're trying to confine a 100 million degree gas using only magnetic fields. The tolerances are insane.",
    authorName: "Tom Reinholt",
    authorAvatar: "TR",
    authorUsername: "tomreinholt",
    authorRole: "Former ITER Staff",
    createdAt: "2026-03-27T09:15:00Z",
    reactions: { "👍": 29, "🧠": 22 },
  },
];

export const MEMBERS = [
  {
    id: "u1",
    name: "Dr. Sarah Chen",
    username: "sarahchen",
    avatar: "SC",
    role: "researcher",
    bio: "Plasma physicist at MIT. Working on high-temperature superconducting magnets for compact tokamaks.",
    joinedAt: "2024-01-15",
    location: "Cambridge, MA",
    interests: ["Tokamaks", "Superconductors", "Plasma Physics"],
    postCount: 247,
  },
  {
    id: "u2",
    name: "Marcus Webb",
    username: "marcuswebb",
    avatar: "MW",
    role: "member",
    bio: "Energy analyst and fusion investor. Tracking the commercialization race.",
    joinedAt: "2024-03-20",
    location: "London, UK",
    interests: ["Investment", "Policy", "Commercialization"],
    postCount: 89,
  },
  {
    id: "u3",
    name: "Tom Reinholt",
    username: "tomreinholt",
    avatar: "TR",
    role: "moderator",
    bio: "Former ITER diagnostics & control engineer. 6 years at Cadarache. Now consulting.",
    joinedAt: "2023-11-05",
    location: "Cadarache, France",
    interests: ["ITER", "Diagnostics", "Control Systems"],
    postCount: 412,
  },
  {
    id: "u4",
    name: "Priya Nair",
    username: "priyanair",
    avatar: "PN",
    role: "researcher",
    bio: "Materials scientist studying plasma-facing components. PhD candidate at Oxford.",
    joinedAt: "2024-05-10",
    location: "Oxford, UK",
    interests: ["Materials Science", "PFCs", "Tungsten"],
    postCount: 134,
  },
  {
    id: "u5",
    name: "Yuki Tanaka",
    username: "yukitanaka",
    avatar: "YT",
    role: "member",
    bio: "Energy journalist covering fusion startups. Writer at Energy Post and Canary Media.",
    joinedAt: "2024-07-22",
    location: "Tokyo, Japan",
    interests: ["Journalism", "Startups", "ICF"],
    postCount: 76,
  },
  {
    id: "u6",
    name: "Amara Osei",
    username: "amaraosei",
    avatar: "AO",
    role: "member",
    bio: "Science policy researcher. Focus on fusion energy governance and international cooperation.",
    joinedAt: "2024-09-01",
    location: "Washington, DC",
    interests: ["Policy", "Governance", "IAEA"],
    postCount: 58,
  },
  {
    id: "u7",
    name: "Jordan Kim",
    username: "jordankim",
    avatar: "JK",
    role: "member",
    bio: "Undergrad physics student at Berkeley. Just starting to dive into fusion.",
    joinedAt: "2025-01-12",
    location: "Berkeley, CA",
    interests: ["Learning", "Nuclear Physics", "Climate"],
    postCount: 23,
  },
  {
    id: "u8",
    name: "Lena Fischer",
    username: "lenafischer",
    avatar: "LF",
    role: "researcher",
    bio: "Fusion researcher at IPP Garching. Specializing in plasma heating and current drive.",
    joinedAt: "2023-08-14",
    location: "Munich, Germany",
    interests: ["ECRH", "NBI", "ASDEX Upgrade"],
    postCount: 189,
  },
];

export function getCategoryThreads(slug: string): ForumThread[] {
  return FORUM_THREADS.filter((t) => t.categorySlug === slug);
}

export function getThread(id: string): ForumThread | undefined {
  return FORUM_THREADS.find((t) => t.id === id);
}

export function getThreadReplies(threadId: string): ThreadReply[] {
  return THREAD_REPLIES.filter((r) => r.threadId === threadId);
}

export function getMember(username: string) {
  return MEMBERS.find((m) => m.username === username);
}

export function getMemberThreads(username: string): ForumThread[] {
  return FORUM_THREADS.filter((t) => t.authorUsername === username);
}

export function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date("2026-03-30T12:00:00Z");
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  if (diffMins < 60) return `${diffMins}m ago`;
  const diffHours = Math.floor(diffMins / 60);
  if (diffHours < 24) return `${diffHours}h ago`;
  const diffDays = Math.floor(diffHours / 24);
  if (diffDays < 30) return `${diffDays}d ago`;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export const REACTIONS = ["👍", "❤️", "🔥", "🧠", "🤔", "😂"];
