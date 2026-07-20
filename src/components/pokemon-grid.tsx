"use client";
import { Pokemon } from "@/types";
import { PokemonCard } from "./pokemon-card";
import { LoadingSkeleton } from "./loading-skeleton";
export function PokemonGrid({ pokemon, loading = false, empty = "No Pokémon found in this view." }: { pokemon: Pokemon[]; loading?: boolean; empty?: string }) { if (loading) return <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"><LoadingSkeleton count={8} /></div>; if (!pokemon.length) return <div className="rounded-3xl border border-dashed border-[var(--line)] py-20 text-center"><div className="text-4xl">🔎</div><p className="mt-4 font-display text-xl font-bold">{empty}</p><p className="mt-2 text-sm text-[var(--muted)]">Try a different filter or search the entire atlas.</p></div>; return <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{pokemon.map((item) => <PokemonCard key={item.id} pokemon={item} />)}</div>; }
