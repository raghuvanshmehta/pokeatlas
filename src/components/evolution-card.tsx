"use client";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { pokemonArtwork } from "@/constants";
import { formatName, getIdFromUrl } from "@/lib/utils";
import { EvolutionNode } from "@/types";
export function EvolutionCard({ chain }: { chain: EvolutionNode[] }) { return <div className="flex flex-wrap items-center justify-center gap-3">{chain.map((node, index) => <div key={node.species.name} className="flex items-center gap-3"><Link href={`/pokemon/${node.species.name}`} className="group rounded-2xl border border-[var(--line)] bg-[var(--surface-solid)] p-3 text-center transition hover:-translate-y-1 hover:border-[#55c7e8]"><div className="relative h-24 w-24"><Image src={pokemonArtwork(getIdFromUrl(node.species.url))} alt={formatName(node.species.name)} fill sizes="96px" className="object-contain" unoptimized /></div><p className="text-sm font-bold capitalize group-hover:text-[#e85d68]">{formatName(node.species.name)}</p></Link>{index < chain.length - 1 && <FiArrowRight className="text-xl text-[var(--muted)]" />}</div>)}</div>; }
