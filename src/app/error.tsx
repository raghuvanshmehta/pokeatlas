"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);
  return <main className="container-shell flex min-h-[70vh] items-center justify-center py-16"><div className="card-surface max-w-lg rounded-[2rem] p-8 text-center"><div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-2xl bg-[#fff0eb] text-3xl">⚡</div><h1 className="font-display text-3xl font-bold">A wild error appeared</h1><p className="mt-3 prose-copy">Something interrupted this expedition. Try again, or head back to the map.</p><div className="mt-7 flex flex-wrap justify-center gap-3"><button onClick={reset} className="rounded-xl bg-[#171d32] px-5 py-3 text-sm font-bold text-white dark:bg-white dark:text-[#171d32]">Try again</button><Link href="/" className="rounded-xl border border-[var(--line)] px-5 py-3 text-sm font-bold">Go home</Link></div></div></main>;
}
