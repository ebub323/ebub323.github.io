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
    live: "http://hollowgames.techboy.dev",
    repo: "https://github.com/ebub323/hollow-games",
    summary:
      "A third-person horror archery game built in Unity, then ported to the browser with three.js. Pick one of 8 regions, fight through a four-chapter story, and take on other tributes in a peer-to-peer multiplayer arena.",
    flow: [
      { label: "unity", detail: "Original build: 45 C# scripts, 7,740 lines, waves, a multi-phase boss and procedural editor tooling." },
      { label: "convert", detail: "FBX characters, animations and props converted to compressed glTF; scenery meshes merged into a few draw calls." },
      { label: "story", detail: "Four chapters from Hollow Lane to the Capital's colosseum. Rivals who yield can be spared and fight beside you." },
      { label: "multiplayer", detail: "WebRTC rooms by 4-letter code. Region against region, first to 15 kills." },
    ],
    facts: ["Plays in the browser, no install", "8 regions with perks, 4 tribute looks", "Held-trigger burst fire, boss fights and an in-game audio mixer"],
    proof: "Live build · Unity project has 42 commits, private repo",
    stack: ["three.js", "WebRTC (PeerJS)", "C#", "Unity 6"],
  },
];
