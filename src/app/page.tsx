import Explorer from "@/components/Explorer";
import { projects, more } from "./projects";

const stack: Record<string, string[]> = {
  Languages: ["TypeScript", "JavaScript", "Python", "Java", "C++", "C#", "Swift", "SQL"],
  Frameworks: ["React", "React Native", "Next.js", "Node.js", "Electron", "Hono", "Tailwind", "Flask", "Django", "Unity", "three.js"],
  Infrastructure: ["PostgreSQL", "Supabase", "MySQL", "AWS", "Google Cloud", "Cloudflare Workers", "Docker", "Terraform", "GitHub Actions", "Tailscale", "Linux"],
};

const stats = [
  [String(projects.length + more.length), "projects built"],
  ["740+", "automated tests"],
  ["4", "platforms: web, iOS, Android, Mac"],
  ["45+", "technologies"],
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-30 border-b border-hairline bg-canvas/85 backdrop-blur">
        <nav className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-6 sm:px-10">
          <a href="#" className="text-[15px] font-semibold tracking-tight text-ink">
            techboy<span className="text-mute">.dev</span>
          </a>
          <div className="flex items-center gap-6 text-sm text-body">
            <a href="#projects" className="hover:text-ink">Projects</a>
            <a href="#stack" className="hover:text-ink">Stack</a>
            <a href="#contact" className="rounded-full bg-ink px-4 py-1.5 font-medium text-white hover:bg-[#333]">Contact</a>
          </div>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-5xl px-6 pb-24 sm:px-10">
        <section className="relative pt-24 sm:pt-32">
          <div className="mesh pointer-events-none absolute inset-x-0 -top-10 -z-10 h-[460px] opacity-80" aria-hidden />
          <p className="inline-flex items-center gap-2 rounded-full border border-hairline bg-canvas/80 px-3 py-1 font-mono text-xs text-body">
            <span className="h-1.5 w-1.5 rounded-full bg-link" /> Ebube Eze · Software engineer
          </p>
          <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-7xl">
            Software whose every number comes with its reasons.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-7 text-body">
            Web, mobile, desktop, game and infrastructure projects, built end to end. Pick one below to see how it works,
            stage by stage.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-medium">
            <a href="#projects" className="rounded-full bg-ink px-5 py-2.5 text-white hover:bg-[#333]">See the projects</a>
            <a href="https://github.com/ebub323" className="rounded-full border border-hairline-strong bg-canvas px-5 py-2.5 text-ink hover:border-ink">GitHub</a>
          </div>
          <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-hairline bg-hairline sm:grid-cols-4">
            {stats.map(([n, l]) => (
              <div key={l} className="bg-canvas p-5">
                <dt className="text-3xl font-semibold tracking-tight">{n}</dt>
                <dd className="mt-1 text-sm text-mute">{l}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="projects" className="mt-28 scroll-mt-24">
          <p className="font-mono text-xs uppercase tracking-wider text-mute">Projects · {projects.length}</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">What I&rsquo;ve built</h2>
          <Explorer />

          <p className="mt-14 font-mono text-xs uppercase tracking-wider text-mute">Also built</p>
          <ul className="mt-4 grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline sm:grid-cols-2">
            {more.map((m) => (
              <li key={m.name} className="bg-canvas p-5">
                <p className="font-medium">
                  {m.href ? <a href={m.href} className="link-u">{m.name}</a> : m.name}
                </p>
                <p className="mt-1 text-sm leading-6 text-body">{m.what}</p>
                <p className="mt-2 font-mono text-xs text-mute">{m.stack}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="stack" className="mt-28 scroll-mt-24">
          <p className="font-mono text-xs uppercase tracking-wider text-mute">Stack</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">What I build with</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {Object.entries(stack).map(([group, items]) => (
              <div key={group} className="card rounded-xl p-6">
                <p className="text-sm font-medium">{group}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span key={s} className="rounded-md bg-soft-2 px-2.5 py-1 text-[13px] text-body">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="relative mt-28 scroll-mt-24 overflow-hidden rounded-2xl border border-hairline bg-soft p-8 sm:p-14">
          <div className="mesh pointer-events-none absolute -right-24 -top-24 h-72 w-96 opacity-60" aria-hidden />
          <p className="relative font-mono text-xs uppercase tracking-wider text-mute">Contact</p>
          <p className="relative mt-3 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
            Want a walkthrough of something private, or to build something together?
          </p>
          <div className="relative mt-8 flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm">
            <a href="mailto:ogennaeugene@gmail.com" className="link-u">ogennaeugene@gmail.com</a>
            <a href="https://github.com/ebub323" className="link-u">github.com/ebub323</a>
            <a href="https://www.linkedin.com/in/ebube1995" className="link-u">linkedin.com/in/ebube1995</a>
          </div>
        </section>

        <footer className="mt-16 flex flex-wrap justify-between gap-2 border-t border-hairline pt-6 font-mono text-xs text-mute">
          <span>© {new Date().getFullYear()} Ebube Eze</span>
          <span>Next.js static export · GitHub Pages · no trackers</span>
        </footer>
      </main>
    </>
  );
}
