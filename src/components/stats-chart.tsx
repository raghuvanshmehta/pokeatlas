import { PokemonStat } from "@/types";
import { formatName, clamp } from "@/lib/utils";
const labels: Record<string, string> = { hp: "HP", attack: "Attack", defense: "Defense", "special-attack": "Sp. Attack", "special-defense": "Sp. Defense", speed: "Speed" };
export function StatsChart({ stats }: { stats: PokemonStat[] }) { return <div className="grid gap-4">{stats.map((stat) => <div key={stat.stat.name} className="grid grid-cols-[92px_38px_1fr] items-center gap-3 text-sm"><span className="font-semibold text-[var(--muted)]">{labels[stat.stat.name] ?? formatName(stat.stat.name)}</span><span className="font-mono text-right font-bold">{stat.base_stat}</span><div className="stat-bar"><span style={{ width: `${clamp(stat.base_stat, 0, 160) / 160 * 100}%` }} /></div></div>)}</div>; }
