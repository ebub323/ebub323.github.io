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
    <div className="mt-8 overflow-hidden rounded-xl border border-hairline bg-canvas">
      <div className="grid md:grid-cols-[230px_1fr]">
        <ul role="tablist" className="flex gap-1 overflow-x-auto border-b border-hairline bg-soft p-2 text-sm md:flex-col md:border-b-0 md:border-r">
          {projects.map((q, n) => (
            <li key={q.id}>
              <button
                role="tab"
                aria-selected={n === i}
                onClick={() => { setI(n); setStep(0); }}
                className={`w-full whitespace-nowrap rounded-md px-3 py-2 text-left font-medium transition-colors ${n === i ? "bg-canvas text-ink shadow-[0_0_0_1px_var(--color-hairline)]" : "text-body hover:bg-soft-2 hover:text-ink"}`}
              >
                {q.name}
              </button>
            </li>
          ))}
        </ul>

        <div className="p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-wider text-mute">{p.tag}</p>
          <h3 className="mt-2 text-3xl font-semibold tracking-[-0.04em]">{p.name}</h3>
          <p className="mt-3 max-w-2xl leading-7 text-body">{p.summary}</p>

          <p className="mt-8 font-mono text-xs uppercase tracking-wider text-mute">Pipeline · click a stage</p>
          <ol className="mt-3 grid gap-2 sm:grid-cols-4">
            {p.flow.map((f, n) => (
              <li key={f.label}>
                <button
                  onClick={() => setStep(n)}
                  className={`w-full rounded-lg border px-3 py-2 text-left text-sm font-medium transition-colors ${n === step ? "border-ink bg-ink text-white" : "border-hairline text-body hover:border-hairline-strong"} ${n < step ? "bg-soft-2" : ""}`}
                >
                  <span className="mr-1.5 font-mono text-xs opacity-60">0{n + 1}</span>{f.label}
                </button>
              </li>
            ))}
          </ol>
          <p className="mt-4 min-h-[3rem] rounded-lg border border-hairline bg-soft px-4 py-3 text-sm leading-6 text-body">
            {p.flow[step].detail}
          </p>

          <ul className="mt-6 space-y-2 text-sm text-body">
            {p.facts.map((f) => (
              <li key={f} className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink" />{f}</li>
            ))}
          </ul>

          <p className="mt-6 font-mono text-xs text-mute">{p.proof}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <span key={s} className="rounded-full border border-hairline px-2.5 py-0.5 font-mono text-xs text-body">{s}</span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium">
            {p.live && (
              <a href={p.live} className="inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2 text-white hover:bg-[#333]">
                Launch {p.live.replace("https://", "")} <Arrow />
              </a>
            )}
            {p.repo && (
              <a href={p.repo} className="inline-flex items-center gap-1.5 rounded-full border border-hairline-strong px-5 py-2 hover:border-ink">
                Source <Arrow />
              </a>
            )}
            {!p.live && !p.repo && <span className="text-mute">Private repo · ask for a walkthrough</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
