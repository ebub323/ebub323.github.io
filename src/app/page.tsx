const projects = [
  {
    name: "Applyr",
    tag: "Job-search autopilot",
    year: "Nov 2026",
    live: "https://applyr.techboy.dev",
    repo: "https://github.com/ebub323/applyr",
    blurb:
      "Upload a resume, see how it grades on 15 transparent checks, then search live internship and new-grad postings from 31 public ATS boards ranked 0–100 with the reasons shown. Everything runs in the browser; the resume never leaves the device.",
    proof: "56 unit tests · CI deploys on every push",
    stack: ["TypeScript", "Next.js", "Vitest", "GitHub Actions"],
  },
  {
    name: "CreditBridge",
    tag: "Transfer-credit degree planner",
    year: "Nov 2026",
    live: "https://creditbridge.techboy.dev",
    repo: "https://github.com/ebub323/creditbridge",
    blurb:
      "Models the transfer rulebook (grade minimums, credit caps, residency, prerequisite chains) from a swappable JSON rules pack, then shows what transfers, what is capped, what remains, and a term-by-term plan with its theoretical minimum beside it.",
    proof: "334 tests, including a 300-student property test",
    stack: ["TypeScript", "Next.js", "Vitest"],
  },
  {
    name: "ShiftStack",
    tag: "Class and work schedule planner",
    year: "Nov 2026",
    live: "https://shiftstack.techboy.dev",
    repo: "https://github.com/ebub323/shiftstack",
    blurb:
      "Stores every recurring shift as a wall-clock time in an IANA zone, so a 9am class stays at 9am across daylight-saving changes and an overnight shift is 9 hours the night clocks go back. Conflicts, per-employer overtime, free windows and .ics export.",
    proof: "235 tests cover the DST edge cases",
    stack: ["TypeScript", "Next.js", "RFC 5545"],
  },
  {
    name: "Skolmark",
    tag: "Verified student marketplace",
    year: "Oct 2026",
    live: "https://skolmark.com",
    repo: null,
    blurb:
      "One Expo and React Native codebase that ships as the iOS app, the Android app and the website. A 14-table campus-scoped PostgreSQL schema with 29 row-level security policies means a student only ever sees their own school. Piloting at Morgan State.",
    proof: "434 lines of versioned SQL migrations · private repo",
    stack: ["TypeScript", "React Native (Expo)", "Supabase", "PostgreSQL"],
  },
  {
    name: "The Hollow",
    tag: "Unity arena game and editor tooling",
    year: "Oct 2026",
    live: null,
    repo: null,
    blurb:
      "A wave-based arena game: 7,740 lines of C# across 45 scripts with a multi-phase boss, spawn management and a cued audio system. Plus 3,657 lines of custom editor tooling that assembles the arena, zones, lighting and UI procedurally instead of by hand.",
    proof: "42 commits · private repo",
    stack: ["C#", "Unity 6"],
  },
];

const skills: Record<string, string[]> = {
  Languages: ["TypeScript", "JavaScript", "Python", "Java", "C++", "C#", "SQL"],
  "Frameworks": ["React", "React Native (Expo)", "Next.js", "Node.js", "Tailwind CSS", "Flask", "Django", "Unity"],
  "Data and cloud": ["PostgreSQL", "Supabase", "MySQL", "AWS", "Google Cloud", "Docker", "Terraform", "GitHub Actions", "Linux"],
};

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="relative mx-auto w-full max-w-5xl px-6 pb-24 pt-10 sm:px-10">
      <div className="grid-bg pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px]" />

      <nav className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 font-mono text-sm text-muted">
        <a href="#" className="text-paper">
          <span className="text-signal">~</span>/techboy<span className="text-signal">.dev</span>
        </a>
        <div className="flex gap-4 sm:gap-5">
          <a href="#work" className="hover:text-paper">work</a>
          <a href="#about" className="hover:text-paper">about</a>
          <a href="/Ebube_Eze_Resume.pdf" className="hover:text-paper">resume</a>
          <a href="#contact" className="hover:text-paper">contact</a>
        </div>
      </nav>

      <section className="mt-24 sm:mt-32">
        <p className="font-mono text-sm text-signal">Ebube Eze · Baltimore, MD</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
          I build software whose every number comes with its reasons<span className="cursor" />
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Computer science student at Morgan State University, graduating December 2027. Four live
          projects and a game, all public where they can be: TypeScript and React on the web, React
          Native on phones, Postgres underneath, and tests that pin the bugs I actually hit.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 font-mono text-sm">
          <a href="#work" className="rounded-md bg-signal px-4 py-2 text-ink hover:brightness-110">
            See the work
          </a>
          <a href="/Ebube_Eze_Resume.pdf" className="rounded-md border border-line px-4 py-2 text-paper hover:border-muted">
            Resume (PDF)
          </a>
          <a href="https://github.com/ebub323" className="rounded-md border border-line px-4 py-2 text-paper hover:border-muted">
            GitHub
          </a>
        </div>
        <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-line pt-6 font-mono text-sm sm:grid-cols-4">
          {[
            ["4", "live projects"],
            ["625+", "automated tests"],
            ["3", "platforms (web, iOS, Android)"],
            ["Dec 2027", "B.S. Computer Science"],
          ].map(([n, l]) => (
            <div key={l}>
              <dt className="text-2xl text-paper">{n}</dt>
              <dd className="mt-1 text-muted">{l}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="work" className="mt-28 scroll-mt-24">
        <div className="flex items-baseline justify-between">
          <h2 className="font-mono text-sm text-signal">// work</h2>
          <p className="font-mono text-xs text-muted">newest first</p>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {projects.map((p, i) => (
            <article key={p.name} className={`card rounded-xl p-6 ${i === 0 ? "sm:col-span-2" : ""}`}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{p.name}</h3>
                  <p className="mt-1 text-sm text-muted">{p.tag}</p>
                </div>
                <span className="font-mono text-xs text-muted">{p.year}</span>
              </div>
              <p className="mt-4 leading-relaxed text-paper/85">{p.blurb}</p>
              <p className="mt-4 font-mono text-xs text-amber">{p.proof}</p>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full border border-line px-2.5 py-0.5 font-mono text-xs text-muted">
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-5 font-mono text-sm">
                {p.live && (
                  <a href={p.live} className="link-u inline-flex items-center gap-1 text-paper">
                    {p.live.replace("https://", "")} <Arrow />
                  </a>
                )}
                {p.repo && (
                  <a href={p.repo} className="link-u inline-flex items-center gap-1 text-muted hover:text-paper">
                    source <Arrow />
                  </a>
                )}
                {!p.live && !p.repo && <span className="text-muted">private repo · ask me for a walkthrough</span>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="mt-28 grid gap-12 scroll-mt-24 sm:grid-cols-[1.2fr_1fr]">
        <div>
          <h2 className="font-mono text-sm text-signal">// about</h2>
          <div className="mt-6 space-y-4 leading-relaxed text-paper/85">
            <p>
              I transferred to Morgan State from the Community College of Baltimore County and I am
              working through a B.S. in Computer Science (GPA 3.6). Before that I spent a year and a
              half as a Geek Squad repair technician at Best Buy in White Marsh, turning vague
              problem reports into fixed machines and explaining the trade-offs to the person waiting.
              That habit of explaining the fix is what my software does too.
            </p>
            <p>
              I hold CompTIA Security+ (December 2025). On campus I am treasurer of the African
              Students Organization and a member of the BIT Bros Computing Society.
            </p>
            <p>
              I am looking for a <span className="text-paper">software engineering internship for Summer 2027</span>,
              in the Baltimore and Washington area or remote.
            </p>
          </div>
          <ul className="mt-8 space-y-3 border-t border-line pt-6 font-mono text-sm">
            <li className="flex justify-between gap-4">
              <span>Morgan State University, B.S. Computer Science</span>
              <span className="text-muted">2027</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Repair Technician, Geek Squad (Best Buy)</span>
              <span className="text-muted">2024–25</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>CompTIA Security+</span>
              <span className="text-muted">2025</span>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-mono text-sm text-signal">// stack</h2>
          <div className="mt-6 space-y-5">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group}>
                <p className="font-mono text-xs uppercase tracking-wider text-muted">{group}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span key={s} className="rounded-md bg-ink-3 px-2.5 py-1 text-sm text-paper/90">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mt-28 scroll-mt-24 rounded-2xl border border-line bg-ink-2 p-8 sm:p-12">
        <h2 className="font-mono text-sm text-signal">// contact</h2>
        <p className="mt-4 max-w-xl text-2xl font-semibold leading-snug sm:text-3xl">
          Hiring interns for Summer 2027? I answer email the same day.
        </p>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm">
          <a href="mailto:ogennaeugene@gmail.com" className="link-u text-paper">ogennaeugene@gmail.com</a>
          <a href="https://github.com/ebub323" className="link-u text-paper">github.com/ebub323</a>
          <a href="https://www.linkedin.com/in/ebube1995" className="link-u text-paper">linkedin.com/in/ebube1995</a>
          <a href="/Ebube_Eze_Resume.pdf" className="link-u text-paper">resume.pdf</a>
        </div>
      </section>

      <footer className="mt-16 flex flex-wrap justify-between gap-2 font-mono text-xs text-muted">
        <span>© {new Date().getFullYear()} Ebube Eze</span>
        <span>Next.js static export · GitHub Pages · no trackers</span>
      </footer>
    </main>
  );
}
