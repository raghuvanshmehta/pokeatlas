"use client";

import { useCallback, useEffect, useState } from "react";
import { apiFetch, getPokemon, getPokemonList } from "@/lib/api";
import { APIListResponse, Pokemon } from "@/types";
import { humanizeError } from "@/lib/utils";

export function usePokemon(idOrName: string | number | undefined) {
  const [data, setData] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(Boolean(idOrName));
  const [error, setError] = useState<string | null>(null);
  const load = useCallback(async (force = false) => {
    if (!idOrName) return;
    setLoading(true); setError(null);
    try { setData(await getPokemon(idOrName, { force })); } catch (err) { setError(humanizeError(err)); } finally { setLoading(false); }
  }, [idOrName]);
  useEffect(() => { void load(); }, [load]);
  return { data, loading, error, retry: () => load(true) };
}

export function usePokemonList(limit = 24, offset = 0) {
  const [data, setData] = useState<APIListResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const load = useCallback(async () => { setLoading(true); setError(null); try { setData(await getPokemonList(limit, offset)); } catch (err) { setError(humanizeError(err)); } finally { setLoading(false); } }, [limit, offset]);
  useEffect(() => { void load(); }, [load]);
  return { data, loading, error, retry: load };
}

export function useResourceList(resource: "ability" | "move" | "type", limit = 100) {
  const [data, setData] = useState<APIListResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => { let active = true; setLoading(true); apiFetch<APIListResponse>(`${resource}?limit=${limit}`).then((result) => { if (active) setData(result); }).catch((err) => { if (active) setError(humanizeError(err)); }).finally(() => { if (active) setLoading(false); }); return () => { active = false; }; }, [resource, limit]);
  return { data, loading, error };
}
