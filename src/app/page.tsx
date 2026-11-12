import Explorer from "@/components/Explorer";
import { projects } from "./projects";

const stack: Record<string, string[]> = {
  lang: ["TypeScript", "JavaScript", "Python", "Java", "C++", "C#", "SQL"],
  frameworks: ["React", "React Native", "Next.js", "Node.js", "Tailwind", "Flask", "Django", "Unity"],
  infra: ["PostgreSQL", "Supabase", "MySQL", "AWS", "Google Cloud", "Docker", "Terraform", "GitHub Actions", "Linux"],
};

export default function Home() {
  return (
    <main className="relative mx-auto w-full max-w-5xl px-6 pb-24 pt-10 sm:px-10">
      <div className="grid-bg pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px]" />

      <nav className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 font-mono text-sm text-muted">
        <a href="#" className="text-paper">
          <span className="text-signal">~</span>/techboy<span className="text-signal">.dev</span>
        </a>
        <div className="flex gap-4 sm:gap-5">
          <a href="#projects" className="hover:text-paper">projects</a>
          <a href="#stack" className="hover:text-paper">stack</a>
          <a href="#contact" className="hover:text-paper">contact</a>
        </div>
      </nav>

      <section className="mt-20 sm:mt-28">
        <div className="max-w-2xl rounded-xl border border-line bg-ink-2/80 p-5 font-mono text-sm leading-relaxed shadow-2xl shadow-black/40">
          <p><span className="text-signal">$</span> whoami</p>
          <p className="text-paper/90">ebube eze — software engineer</p>
          <p className="mt-2"><span className="text-signal">$</span> ls projects/</p>
          <p className="text-paper/90">{projects.map((p) => p.id).join("  ")}</p>
          <p className="mt-2"><span className="text-signal">$</span> cat README<span className="cursor" /></p>
        </div>
        <h1 className="mt-10 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
          Software whose every number comes with its reasons.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Web, mobile and game projects, built end to end. Pick one below to see how it works,
          stage by stage.
        </p>
        <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-line pt-6 font-mono text-sm sm:grid-cols-4">
          {[
            ["5", "projects"],
            ["625+", "automated tests"],
            ["3", "platforms (web, iOS, Android)"],
            ["40+", "technologies"],
          ].map(([n, l]) => (
            <div key={l}>
              <dt className="text-2xl text-paper">{n}</dt>
              <dd className="mt-1 text-muted">{l}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="projects" className="mt-24 scroll-mt-24">
        <h2 className="font-mono text-sm text-signal">// projects</h2>
        <Explorer />
      </section>

      <section id="stack" className="mt-24 scroll-mt-24">
        <h2 className="font-mono text-sm text-signal">// stack</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {Object.entries(stack).map(([group, items]) => (
            <div key={group} className="card rounded-xl p-5">
              <p className="font-mono text-xs uppercase tracking-wider text-muted">{group}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {items.map((s) => (
                  <span key={s} className="rounded-md bg-ink-3 px-2.5 py-1 text-sm text-paper/90">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mt-24 scroll-mt-24 rounded-2xl border border-line bg-ink-2 p-8 sm:p-12">
        <h2 className="font-mono text-sm text-signal">// contact</h2>
        <p className="mt-4 max-w-xl text-2xl font-semibold leading-snug sm:text-3xl">
          Want a walkthrough of something private, or to build something together?
        </p>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm">
          <a href="mailto:ogennaeugene@gmail.com" className="link-u text-paper">ogennaeugene@gmail.com</a>
          <a href="https://github.com/ebub323" className="link-u text-paper">github.com/ebub323</a>
          <a href="https://www.linkedin.com/in/ebube1995" className="link-u text-paper">linkedin.com/in/ebube1995</a>
        </div>
      </section>

      <footer className="mt-16 flex flex-wrap justify-between gap-2 font-mono text-xs text-muted">
        <span>© {new Date().getFullYear()} Ebube Eze</span>
        <span>Next.js static export · GitHub Pages · no trackers</span>
      </footer>
    </main>
  );
}
