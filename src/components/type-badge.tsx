import { TYPE_COLORS } from "@/constants";
import { formatName } from "@/lib/utils";
export function TypeBadge({ type, large = false }: { type: string; large?: boolean }) { const colors = TYPE_COLORS[type] ?? TYPE_COLORS.normal; return <span className={`${large ? "px-4 py-2 text-xs" : "px-3 py-1 text-[10px]"} inline-flex items-center justify-center rounded-full font-bold uppercase tracking-[.12em]`} style={{ backgroundColor: colors.bg, color: colors.text, boxShadow: large ? `0 8px 16px ${colors.glow}66` : undefined }}>{formatName(type)}</span>; }
