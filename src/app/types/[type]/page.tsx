import type { Metadata } from "next";
import TypeDetailClient from "./type-detail-client";
export async function generateMetadata({ params }: { params: Promise<{ type: string }> }): Promise<Metadata> { const { type } = await params; return { title: `${type.charAt(0).toUpperCase() + type.slice(1)} Pokémon`, description: `Explore ${type}-type Pokémon, strengths and weaknesses.` }; }
export default async function TypePage({ params }: { params: Promise<{ type: string }> }) { const { type } = await params; return <TypeDetailClient typeName={type} />; }
