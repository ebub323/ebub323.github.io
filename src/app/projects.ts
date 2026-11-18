export type Project = {
  id: string;
  name: string;
  tag: string;
  live: string | null;
  repo: string | null;
  summary: string;
  flow: { label: string; detail: string }[];
  facts: string[];
  proof: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    id: "applyr",
    name: "Applyr",
    tag: "Job-search autopilot",
    live: "https://applyr.techboy.dev",
    repo: "https://github.com/ebub323/applyr",
    summary:
      "Grades a resume on 15 transparent checks, then searches live internship and new-grad postings and ranks them 0–100, showing the reasons for every score.",
    flow: [
      { label: "upload", detail: "Resume is parsed in the browser. It never leaves the device." },
      { label: "grade", detail: "15 explicit checks, each with a pass/fail reason you can read." },
      { label: "search", detail: "Pulls live postings from 31 public ATS boards." },
      { label: "rank", detail: "Every posting scored 0–100 with the factors listed." },
    ],
    facts: ["Runs entirely client-side", "31 public ATS job boards", "Scores always come with reasons"],
    proof: "56 unit tests · CI deploys on every push",
    stack: ["TypeScript", "Next.js", "Vitest", "GitHub Actions"],
  },
  {
    id: "playtest-room",
    name: "Playtest Room",
    tag: "Live playtest telemetry for Unity WebGL games",
    live: "https://playtest-room.app.space",
    repo: "https://github.com/ebub323/playtest-room",
    summary:
      "Testers play a Unity build in the browser while sessions, FPS, deaths, errors and in-game bug reports stream into the developer's dashboard as they happen. Crashes group themselves by stack trace, and an AI pass groups free-text feedback on demand.",
    flow: [
      { label: "report", detail: "A drop-in C# reporter batches FPS, errors, scene changes and F8 bug reports (with a screenshot) every 2 seconds." },
      { label: "ingest", detail: "One Durable Object per room checks the key, rate-limits room and session, and serialises writes." },
      { label: "group", detail: "Crashes fingerprinted by message and top 3 frames; free-text reports grouped by a small Claude model when the owner asks." },
      { label: "digest", detail: "Live WebSocket dashboard while it runs; ending the playtest emails a summary." },
    ],
    facts: ["Publishable ingest key, treated like a Sentry DSN: append-only, rate-limited, rotatable", "Owner-billed AI and email reachable only through owner-checked server actions", "Demo game: The Hollow Games"],
    proof: "Unit tests for crash fingerprinting plus a two-user Playwright spec",
    stack: ["TypeScript", "React", "Hono", "Cloudflare Workers", "Durable Objects", "C#"],
  },
  {
    id: "mission-10k",
    name: "Mission 10K",
    tag: "Desktop app run by a crew of AI agents",
    live: null,
    repo: null,
    summary:
      "A Mac app that helps one person earn money from local businesses. Agents find businesses that need a service, check each real website to prove the problem, write a short email in your voice from only the facts they counted, and track the money against a goal.",
    flow: [
      { label: "scout", detail: "Scout finds real local businesses in a niche and area by searching the web." },
      { label: "inspect", detail: "Inspector opens each site in a time-limited worker thread and counts what is wrong. Plain code, no model." },
      { label: "write", detail: "Writer drafts the email and two follow-ups using only Inspector's verified facts." },
      { label: "send", detail: "Mailroom sends approved drafts from Gmail, fetches replies, and Strategist works out today's orders." },
    ],
    facts: ["13 agents, each with one job and a visible hand-off", "Any agent can run on Claude, OpenAI, Gemini or a local Ollama model", "Data stays in a folder on your own computer"],
    proof: "Packaged .dmg builds for Apple Silicon and Intel · private repo",
    stack: ["Node.js", "Electron", "LangChain", "Claude", "Gmail (IMAP/SMTP)"],
  },
  {
    id: "creditbridge",
    name: "CreditBridge",
    tag: "Transfer-credit degree planner",
    live: "https://creditbridge.techboy.dev",
    repo: "https://github.com/ebub323/creditbridge",
    summary:
      "Models a school's transfer rulebook and shows what transfers, what is capped, what remains, and a term-by-term plan next to its theoretical minimum.",
    flow: [
      { label: "rules pack", detail: "The rulebook is a swappable JSON file, not hard-coded logic." },
      { label: "evaluate", detail: "Grade minimums, credit caps, residency and prerequisite chains." },
      { label: "classify", detail: "Each course lands in transfers, capped or remaining." },
      { label: "plan", detail: "Term-by-term schedule beside the theoretical minimum." },
    ],
    facts: ["Rules are data, so new schools are a new JSON file", "Prerequisite chains resolved as a graph", "Shows the minimum possible, not just a plan"],
    proof: "334 tests, including a 300-student property test",
    stack: ["TypeScript", "Next.js", "Vitest"],
  },
  {
    id: "housequest",
    name: "HouseQuest",
    tag: "Simulator-first smart-home hub",
    live: null,
    repo: null,
    summary:
      "A playful home device hub you can explore with no hardware: control a sample apartment, run scenes, ask an AI companion for a mood, approve its plan, and see exactly what changed and why. A local connector reaches a real network and a Sony TV.",
    flow: [
      { label: "act", detail: "Every tap, scene, automation, AI plan and undo becomes one Action." },
      { label: "validate", detail: "All Actions pass the same validateCommand against each device's declared capabilities." },
      { label: "apply", detail: "A pure, deterministic engine: time and ids live in state, so scenarios replay identically." },
      { label: "explain", detail: "The activity log answers “Why did this happen?” for every change." },
    ],
    facts: ["Simulator and real home share one HomeConnector interface", "AI companion proposes; nothing runs until you approve", "Five guided story scenarios, from Rainy Reading Day to Who Joined the Wi-Fi?"],
    proof: "99 tests across the engine, planner and connector · private repo",
    stack: ["TypeScript", "React", "Zod", "Node.js", "Vitest"],
  },
  {
    id: "shiftstack",
    name: "ShiftStack",
    tag: "Class and work schedule planner",
    live: "https://shiftstack.techboy.dev",
    repo: "https://github.com/ebub323/shiftstack",
    summary:
      "Stores every recurring shift as a wall-clock time in an IANA zone, so a 9am class stays at 9am across daylight-saving changes.",
    flow: [
      { label: "store", detail: "Wall-clock time plus an IANA zone, never a fixed UTC offset." },
      { label: "expand", detail: "Each date resolved to a real instant, DST included." },
      { label: "analyse", detail: "Conflicts, per-employer overtime and free windows." },
      { label: "export", detail: ".ics calendar file following RFC 5545." },
    ],
    facts: ["An overnight shift is 9 hours the night clocks go back", "Overtime tracked per employer", "Exports to any calendar app"],
    proof: "235 tests cover the DST edge cases",
    stack: ["TypeScript", "Next.js", "RFC 5545"],
  },
  {
    id: "skolmark",
    name: "Skolmark",
    tag: "Verified student marketplace",
    live: "https://skolmark.com",
    repo: null,
    summary:
      "One Expo and React Native codebase that ships as the iOS app, the Android app and the website, on a campus-scoped Postgres schema.",
    flow: [
      { label: "client", detail: "Single Expo / React Native codebase for iOS, Android and web." },
      { label: "auth", detail: "Students are verified and tied to one campus." },
      { label: "database", detail: "14-table Supabase PostgreSQL schema, scoped by campus." },
      { label: "rls", detail: "29 row-level security policies: a student only sees their own school." },
    ],
    facts: ["Security enforced in the database, not the client", "Versioned SQL migrations", "Three platforms from one codebase"],
    proof: "434 lines of versioned SQL migrations · private repo",
    stack: ["TypeScript", "React Native (Expo)", "Supabase", "PostgreSQL"],
  },
  {
    id: "the-hollow",
    name: "The Hollow Games",
    tag: "Third-person horror game, Unity and web",
    live: "https://hollowgames.techboy.dev",
    repo: "https://github.com/ebub323/hollow-games",
    summary:
      "A third-person horror archery game built in Unity, then ported to the browser with three.js. Pick one of 8 regions, fight through a four-chapter story, and take on other tributes in a peer-to-peer multiplayer arena.",
    flow: [
      { label: "unity", detail: "Original build: 45 C# scripts, 7,740 lines, waves, a multi-phase boss and procedural editor tooling." },
      { label: "convert", detail: "FBX characters, animations and props converted to compressed glTF; scenery meshes merged into a few draw calls." },
      { label: "story", detail: "Four chapters from Hollow Lane to the Capital's colosseum. Rivals who yield can be spared and fight beside you." },
      { label: "multiplayer", detail: "WebRTC rooms by 4-letter code. Region against region, first to 15 kills." },
    ],
    facts: ["Plays in the browser, no install", "8 regions with perks, 4 tribute looks", "Held-trigger burst fire, boss fights and an in-game audio mixer", "Unity WebGL arena build also live at hollow.techboy.dev", "Team project with Okiki Popoola"],
    proof: "Live build · Unity project has 42 commits, private repo",
    stack: ["three.js", "WebRTC (PeerJS)", "C#", "Unity 6"],
  },
  {
    id: "flip-radar",
    name: "Flip Radar",
    tag: "Daily AI scout for limited sneaker drops",
    live: "https://flipradar.techboy.dev",
    repo: "https://github.com/ebub323/flip-radar",
    summary:
      "An AI agent searches release calendars and resale markets every morning for limited collabs, then the site ranks each drop by what you would actually keep after seller fees, tax and shipping.",
    flow: [
      { label: "scout", detail: "A scheduled Claude agent reads release calendars, drop roundups and StockX/GOAT signals." },
      { label: "estimate", detail: "Each drop gets a realistic post-release resale estimate, a confidence level and its sources." },
      { label: "publish", detail: "The agent rewrites one JSON file and pushes it; GitHub Pages redeploys." },
      { label: "rank", detail: "The page computes net profit and ROI, then rates each drop Cop, Maybe or Skip." },
    ],
    facts: ["Every estimate shows what it is based on and links its sources", "Fee, tax and shipping assumptions adjustable on the page", "Static site, no backend"],
    proof: "Updated daily by an unattended agent run",
    stack: ["JavaScript", "Claude agents", "GitHub Pages"],
  },
  {
    id: "friendnet",
    name: "FriendNet",
    tag: "Zero-trust home lab · in progress",
    live: null,
    repo: null,
    summary:
      "Shared services for a small group of friends (password manager, file drive, media server) on a home server with zero open inbound ports and MFA on every login. Part 1 of a four-part home-lab series.",
    flow: [
      { label: "edge", detail: "Cloudflare terminates TLS and filters traffic; an outbound tunnel means no port forwards." },
      { label: "route", detail: "Traefik on an internal network, each hostname listed explicitly so no other project is captured." },
      { label: "auth", detail: "Authentik SSO with passkeys or TOTP in front of every app." },
      { label: "media", detail: "Jellyfin only over Tailscale, with an ACL limiting friends to one port." },
    ],
    facts: ["Default-deny firewall, nothing listening on the internet", "Vaultwarden keeps its own login and 2FA", "Next: observability, GitOps and hybrid-cloud failover"],
    proof: "Docker Compose stack and Authentik blueprints written · deployment in progress",
    stack: ["Docker", "Traefik", "Authentik", "Cloudflare Tunnel", "Tailscale", "Linux"],
  },
];

export const more: { name: string; what: string; stack: string; href?: string }[] = [
  { name: "ReminderBar", what: "macOS menu-bar app that merges Canvas assignments, Apple Reminders and calendar events into one list.", stack: "Swift · SwiftUI · EventKit · Python" },
  { name: "IJGB: Finding Mama Tolu", what: "Game design for a third-person mystery set in a Lagos market. Team project with Okiki Popoola.", stack: "Game design · Unity" },
  { name: "Virtual Pet", what: "Desktop pet game with a GUI.", stack: "Python", href: "https://github.com/ebub323/virtual-pet" },
  { name: "Password Manager", what: "Password manager prototype with a desktop GUI.", stack: "Python · Tkinter" },
];
