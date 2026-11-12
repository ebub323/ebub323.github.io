"use client";

import { useState } from "react";
import { projects } from "@/app/projects";

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export default function Explorer() {
  const [i, setI] = useState(0);
  const [step, setStep] = useState(0);
  const p = projects[i];

  return (
    <div className="mt-6 overflow-hidden rounded-xl border border-line bg-ink-2">
      <div className="flex items-center gap-2 border-b border-line bg-ink-3 px-4 py-2.5 font-mono text-xs text-muted">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-3">~/projects/{p.id} — how it works</span>
      </div>

      <div className="grid md:grid-cols-[220px_1fr]">
        <ul role="tablist" className="flex gap-1 overflow-x-auto border-b border-line p-2 font-mono text-sm md:flex-col md:border-b-0 md:border-r">
          {projects.map((q, n) => (
            <li key={q.id}>
              <button
                role="tab"
                aria-selected={n === i}
                onClick={() => { setI(n); setStep(0); }}
                className={`w-full whitespace-nowrap rounded-md px-3 py-2 text-left transition-colors ${n === i ? "bg-ink-3 text-signal" : "text-muted hover:text-paper"}`}
              >
                <span className="text-signal-dim">{n === i ? "▸" : " "}</span> {q.name}
              </button>
            </li>
          ))}
        </ul>

        <div className="p-6 sm:p-8">
          <p className="font-mono text-xs text-amber">{p.tag}</p>
          <h3 className="mt-1 text-2xl font-semibold">{p.name}</h3>
          <p className="mt-3 max-w-2xl leading-relaxed text-paper/85">{p.summary}</p>

          <p className="mt-8 font-mono text-xs uppercase tracking-wider text-muted">pipeline — click a stage</p>
          <ol className="mt-3 grid gap-2 sm:grid-cols-4">
            {p.flow.map((f, n) => (
              <li key={f.label}>
                <button
                  onClick={() => setStep(n)}
                  className={`w-full rounded-md border px-3 py-2 text-left font-mono text-sm transition-colors ${n === step ? "border-signal text-signal" : "border-line text-muted hover:border-muted"} ${n <= step ? "bg-ink-3" : ""}`}
                >
                  <span className="text-xs opacity-60">0{n + 1}</span> {f.label}
                </button>
              </li>
            ))}
          </ol>
          <p className="mt-4 min-h-[3rem] rounded-md border border-line bg-ink px-4 py-3 font-mono text-sm leading-relaxed text-paper/90">
            <span className="text-signal">$ </span>
            {p.flow[step].detail}
          </p>

          <ul className="mt-6 space-y-1.5 text-sm text-paper/85">
            {p.facts.map((f) => (
              <li key={f}><span className="font-mono text-signal">+ </span>{f}</li>
            ))}
          </ul>

          <p className="mt-6 font-mono text-xs text-amber">{p.proof}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <span key={s} className="rounded-full border border-line px-2.5 py-0.5 font-mono text-xs text-muted">{s}</span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3 font-mono text-sm">
            {p.live && (
              <a href={p.live} className="inline-flex items-center gap-1 rounded-md bg-signal px-4 py-2 text-ink hover:brightness-110">
                launch {p.live.replace("https://", "")} <Arrow />
              </a>
            )}
            {p.repo && (
              <a href={p.repo} className="inline-flex items-center gap-1 rounded-md border border-line px-4 py-2 hover:border-muted">
                source <Arrow />
              </a>
            )}
            {!p.live && !p.repo && <span className="text-muted">private repo · ask for a walkthrough</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
