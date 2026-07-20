import type { Metadata } from "next";
import PokemonDetailClient from "./pokemon-detail-client";
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> { const { id } = await params; return { title: `Pokémon ${id}`, description: `Explore detailed stats, moves, abilities and evolutions for Pokémon ${id}.` }; }
export default async function PokemonPage({ params }: { params: Promise<{ id: string }> }) { const { id } = await params; return <PokemonDetailClient idOrName={id} />; }
