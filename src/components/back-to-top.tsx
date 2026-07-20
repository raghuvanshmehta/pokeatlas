"use client";
import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
export function BackToTop() { const [visible, setVisible] = useState(false); useEffect(() => { const on = () => setVisible(window.scrollY > 500); window.addEventListener("scroll", on, { passive: true }); return () => window.removeEventListener("scroll", on); }, []); if (!visible) return null; return <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top" className="fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-full bg-[#171d32] text-white shadow-soft transition hover:-translate-y-1 dark:bg-white dark:text-[#171d32]"><FiArrowUp /></button>; }
