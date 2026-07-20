"use client";
import { useRouter } from "next/navigation";
import { FiShuffle } from "react-icons/fi";
export function RandomPokemonButton({ className = "" }: { className?: string }) { const router = useRouter(); return <button onClick={() => router.push(`/pokemon/${Math.floor(Math.random() * 1025) + 1}`)} className={`inline-flex items-center justify-center gap-2 rounded-xl bg-[#171d32] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#e85d68] dark:bg-white dark:text-[#171d32] ${className}`}><FiShuffle /> Surprise me</button>; }
