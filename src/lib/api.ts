import { APIListResponse, AbilityDetail, EvolutionChain, MoveDetail, Pokemon, PokemonSpecies, TypeDetail } from "@/types";

export const API_BASE = "https://pokeapi.co/api/v2";
const CACHE_PREFIX = "pokeatlas-cache-v1:";
const CACHE_TTL = 1000 * 60 * 60 * 12;

function readCache<T>(key: string): T | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CACHE_PREFIX + key);
    if (!raw) return null;
    const item = JSON.parse(raw) as { time: number; value: T };
    if (Date.now() - item.time > CACHE_TTL) { window.localStorage.removeItem(CACHE_PREFIX + key); return null; }
    return item.value;
  } catch { return null; }
}
function writeCache<T>(key: string, value: T) {
  if (typeof window === "undefined") return;
  try { window.localStorage.setItem(CACHE_PREFIX + key, JSON.stringify({ time: Date.now(), value })); } catch { /* Storage is optional. */ }
}

export async function apiFetch<T>(path: string, options: { force?: boolean; signal?: AbortSignal } = {}): Promise<T> {
  const key = path.replace(/^https:\/\/pokeapi\.co\/api\/v2\/?/, "");
  if (!options.force) {
    const cached = readCache<T>(key);
    if (cached) return cached;
  }
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 12000);
  if (options.signal) options.signal.addEventListener("abort", () => controller.abort(), { once: true });
  try {
    const response = await fetch(path.startsWith("http") ? path : `${API_BASE}/${path.replace(/^\//, "")}`, { signal: controller.signal, next: { revalidate: 43200 } } as RequestInit);
    if (!response.ok) throw new Error(`Data service returned ${response.status}`);
    const value = await response.json() as T;
    writeCache(key, value);
    return value;
  } finally { window.clearTimeout(timeout); }
}

export function getPokemon(idOrName: string | number, options?: { force?: boolean; signal?: AbortSignal }) { return apiFetch<Pokemon>(`pokemon/${idOrName}`, options); }
export function getSpecies(idOrName: string | number) { return apiFetch<PokemonSpecies>(`pokemon-species/${idOrName}`); }
export function getEvolutionChain(url: string) { return apiFetch<EvolutionChain>(url); }
export function getType(name: string) { return apiFetch<TypeDetail>(`type/${name}`); }
export function getAbility(name: string) { return apiFetch<AbilityDetail>(`ability/${name}`); }
export function getMove(name: string) { return apiFetch<MoveDetail>(`move/${name}`); }
export function getPokemonList(limit = 151, offset = 0) { return apiFetch<APIListResponse>(`pokemon?limit=${limit}&offset=${offset}`); }
export function getNamedList(resource: "ability" | "move" | "type", limit = 100, offset = 0) { return apiFetch<APIListResponse>(`${resource}?limit=${limit}&offset=${offset}`); }

export async function getManyPokemon(names: Array<string | number>) {
  const results = await Promise.allSettled(names.map((name) => getPokemon(name)));
  return results.flatMap((result) => result.status === "fulfilled" ? [result.value] : []);
}
