export interface NamedAPIResource {
  name: string;
  url: string;
}

export interface APIListResponse<T = NamedAPIResource> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: NamedAPIResource;
}

export interface PokemonTypeSlot {
  slot: number;
  type: NamedAPIResource;
}

export interface PokemonAbilitySlot {
  ability: NamedAPIResource;
  is_hidden: boolean;
  slot: number;
}

export interface PokemonMoveSlot {
  move: NamedAPIResource;
  version_group_details: Array<{ level_learned_at: number; move_learn_method: NamedAPIResource; version_group: NamedAPIResource }>;
}

export interface PokemonSprites {
  front_default: string | null;
  front_shiny: string | null;
  back_default: string | null;
  back_shiny: string | null;
  other?: {
    "official-artwork"?: { front_default: string | null; front_shiny: string | null };
    dream_world?: { front_default: string | null; front_female?: string | null };
    home?: { front_default: string | null; front_shiny: string | null };
  };
}

export interface PokemonCries { latest: string | null; legacy: string | null; }

export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number | null;
  abilities: PokemonAbilitySlot[];
  types: PokemonTypeSlot[];
  stats: PokemonStat[];
  moves: PokemonMoveSlot[];
  sprites: PokemonSprites;
  cries?: PokemonCries;
  species: NamedAPIResource;
}

export interface FlavorTextEntry { flavor_text: string; language: NamedAPIResource; version?: NamedAPIResource; }
export interface GenusEntry { genus: string; language: NamedAPIResource; }
export interface PokemonSpecies {
  id: number;
  name: string;
  flavor_text_entries: FlavorTextEntry[];
  genera: GenusEntry[];
  habitat: NamedAPIResource | null;
  generation: NamedAPIResource;
  evolution_chain: { url: string } | null;
  color: NamedAPIResource | null;
  varieties: Array<{ is_default: boolean; pokemon: NamedAPIResource }>;
}

export interface EvolutionNode { species: NamedAPIResource; evolves_to: EvolutionNode[]; evolution_details: Array<{ min_level: number | null; trigger: NamedAPIResource; item: NamedAPIResource | null }> }
export interface EvolutionChain { id: number; chain: EvolutionNode; }

export interface TypeDetail {
  id: number;
  name: string;
  damage_relations: {
    double_damage_from: NamedAPIResource[];
    double_damage_to: NamedAPIResource[];
    half_damage_from: NamedAPIResource[];
    half_damage_to: NamedAPIResource[];
    no_damage_from: NamedAPIResource[];
    no_damage_to: NamedAPIResource[];
  };
  flavor_text_entries?: FlavorTextEntry[];
  pokemon: Array<{ pokemon: NamedAPIResource; slot: number }>;
  moves?: NamedAPIResource[];
}

export interface AbilityDetail {
  id: number;
  name: string;
  effect_entries: Array<{ effect: string; short_effect: string; language: NamedAPIResource }>;
  flavor_text_entries: FlavorTextEntry[];
  pokemon: Array<{ is_hidden: boolean; pokemon: NamedAPIResource; slot: number }>;
}

export interface MoveDetail {
  id: number;
  name: string;
  accuracy: number | null;
  effect_chance: number | null;
  effect_entries: Array<{ effect: string; short_effect: string; language: NamedAPIResource }>;
  flavor_text_entries: FlavorTextEntry[];
  power: number | null;
  pp: number | null;
  damage_class: NamedAPIResource | null;
  type: NamedAPIResource;
  learned_by_pokemon: NamedAPIResource[];
}

export interface RegionInfo { name: string; generation: string; tagline: string; description: string; starters: string[]; legendaries: string[]; color: string; }
