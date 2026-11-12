"use client";

import { useEffect, useState } from "react";

const lines = [
  "booting techboy.dev",
  "mounting projects ........ 5",
  "verifying tests .......... ok",
  "ready",
];

export default function Loader() {
  const [shown, setShown] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("tb-booted") || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setGone(true);
      return;
    }
    const timers = lines.map((_, i) => setTimeout(() => setShown(i + 1), 180 + i * 260));
    timers.push(setTimeout(() => setLeaving(true), 180 + lines.length * 260 + 250));
    timers.push(
      setTimeout(() => {
        sessionStorage.setItem("tb-booted", "1");
        setGone(true);
      }, 180 + lines.length * 260 + 750),
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-50 flex items-center justify-center bg-ink transition-opacity duration-500 ${leaving ? "opacity-0" : "opacity-100"}`}
    >
      <div className="font-mono text-sm text-muted w-72">
        {lines.slice(0, shown).map((l, i) => (
          <div key={l} className={i === lines.length - 1 ? "text-signal" : ""}>
            <span className="text-signal-dim">$ </span>
            {l}
          </div>
        ))}
        <div className="cursor h-5" />
        <div className="mt-4 h-px w-full bg-line overflow-hidden">
          <div
            className="h-px bg-signal transition-all duration-300 ease-out"
            style={{ width: `${(shown / lines.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
