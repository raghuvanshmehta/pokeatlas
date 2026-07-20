"use client";

import { useEffect } from "react";
import { useLocalStorage } from "./use-local-storage";

export function useRecentlyViewed(pokemon?: { id: number; name: string }) {
  const [items, setItems, hydrated] = useLocalStorage<Array<{ id: number; name: string }>>("pokeatlas-recent", []);
  const id = pokemon?.id;
  const name = pokemon?.name;

  useEffect(() => {
    if (!id || !name || !hydrated) return;
    setItems((current) => {
      if (current[0]?.id === id && current[0]?.name === name) return current;
      return [{ id, name }, ...current.filter((item) => item.id !== id)].slice(0, 8);
    });
  }, [id, name, hydrated, setItems]);

  return { items, hydrated };
}
