import { RegionInfo } from "@/types";

export const TYPE_NAMES = ["normal", "fire", "water", "electric", "grass", "ice", "fighting", "poison", "ground", "flying", "psychic", "bug", "rock", "ghost", "dragon", "dark", "steel", "fairy"] as const;
export type TypeName = (typeof TYPE_NAMES)[number];

export const TYPE_COLORS: Record<string, { bg: string; text: string; soft: string; glow: string }> = {
  normal: { bg: "#9099a1", text: "#fff", soft: "#eef0f2", glow: "#b9c0c6" },
  fire: { bg: "#f16d45", text: "#fff", soft: "#fff0eb", glow: "#ffae85" },
  water: { bg: "#4c89e8", text: "#fff", soft: "#edf4ff", glow: "#91baff" },
  electric: { bg: "#eecb35", text: "#28303e", soft: "#fffbe1", glow: "#ffef83" },
  grass: { bg: "#63bd58", text: "#fff", soft: "#edf9eb", glow: "#a5e29d" },
  ice: { bg: "#73cec0", text: "#fff", soft: "#e9fbf8", glow: "#a9f1e6" },
  fighting: { bg: "#cf4265", text: "#fff", soft: "#fff0f3", glow: "#ff98b0" },
  poison: { bg: "#a969cb", text: "#fff", soft: "#f7edfb", glow: "#dfadf3" },
  ground: { bg: "#d4a94d", text: "#fff", soft: "#fff7e7", glow: "#efd494" },
  flying: { bg: "#8d9be8", text: "#fff", soft: "#f0f1ff", glow: "#bfc8ff" },
  psychic: { bg: "#ed5d88", text: "#fff", soft: "#fff0f5", glow: "#ffa8c1" },
  bug: { bg: "#9ab72f", text: "#fff", soft: "#f6fbdc", glow: "#cce875" },
  rock: { bg: "#b89c58", text: "#fff", soft: "#fbf5e7", glow: "#dec98f" },
  ghost: { bg: "#6c6aa7", text: "#fff", soft: "#f0effb", glow: "#a9a6ea" },
  dragon: { bg: "#6b75d9", text: "#fff", soft: "#eef0ff", glow: "#a6b0ff" },
  dark: { bg: "#5d5369", text: "#fff", soft: "#f1eef5", glow: "#9789aa" },
  steel: { bg: "#7e9aa9", text: "#fff", soft: "#edf4f6", glow: "#abc6d2" },
  fairy: { bg: "#e89ab6", text: "#fff", soft: "#fff0f6", glow: "#ffc8db" }
};

export const REGIONS: RegionInfo[] = [
  { name: "Kanto", generation: "Generation I", tagline: "Where every journey begins.", description: "The original region, a warm mix of coastal cities, deep forests and the iconic Indigo Plateau.", starters: ["bulbasaur", "charmander", "squirtle"], legendaries: ["articuno", "zapdos", "moltres", "mewtwo"], color: "#e85d68" },
  { name: "Johto", generation: "Generation II", tagline: "Tradition meets discovery.", description: "A region where ancient ruins, peaceful countryside and modern cities share the same horizon.", starters: ["chikorita", "cyndaquil", "totodile"], legendaries: ["raikou", "entei", "suicune", "lugia", "ho-oh"], color: "#d89545" },
  { name: "Hoenn", generation: "Generation III", tagline: "The world is wide open.", description: "An ocean-rich adventure of volcanic peaks, hidden islands and routes made for exploration.", starters: ["treecko", "torchic", "mudkip"], legendaries: ["regirock", "regice", "registeel", "latias", "latios", "kyogre", "groudon", "rayquaza"], color: "#52a775" },
  { name: "Sinnoh", generation: "Generation IV", tagline: "Legends written in snow.", description: "A rugged northern land shaped by mountains, myths and the deep history of the Pokémon world.", starters: ["turtwig", "chimchar", "piplup"], legendaries: ["uxie", "mesprit", "azelf", "dialga", "palkia", "giratina"], color: "#6e94d4" },
  { name: "Unova", generation: "Generation V", tagline: "A city-sized new beginning.", description: "A diverse region of bridges, skyscrapers, deserts and a fresh cast of Pokémon.", starters: ["snivy", "tepig", "oshawott"], legendaries: ["reshiram", "zekrom", "kyurem"], color: "#697b96" },
  { name: "Kalos", generation: "Generation VI", tagline: "Beauty in every direction.", description: "A stylish region inspired by old-world boulevards, flower fields and a legendary central city.", starters: ["chespin", "fennekin", "froakie"], legendaries: ["xerneas", "yveltal", "zygarde"], color: "#ca6ea0" },
  { name: "Alola", generation: "Generation VII", tagline: "Island life, island legends.", description: "A sunny archipelago where island trials, local forms and community shape every route.", starters: ["rowlet", "litten", "popplio"], legendaries: ["cosmog", "solgaleo", "lunala", "necrozma"], color: "#e5ae53" },
  { name: "Galar", generation: "Generation VIII", tagline: "Big stadium energy.", description: "A grand land of industrial towns, wild open areas and battles that fill stadiums.", starters: ["grookey", "scorbunny", "sobble"], legendaries: ["zacian", "zamazenta", "eternatus"], color: "#6e7bd1" },
  { name: "Paldea", generation: "Generation IX", tagline: "Your story, your path.", description: "An expansive academy region with open skies, ancient mysteries and treasures to find.", starters: ["sprigatito", " fuecoco", "quaxly"].map((x) => x.trim()), legendaries: ["koraidon", "miraidon", "ting-lu", "chien-pao", "wo-chien", "chi-yu"], color: "#d65e4d" }
];

export const FEATURED_POKEMON = [6, 149, 448, 384, 445, 658];
export const POPULAR_POKEMON = [25, 1, 7, 94, 133, 448];
export const LATEST_POKEMON = [1017, 1018, 1019, 1020, 1021, 1022];
export const POKEMON_IDS: Record<string, number> = {
  bulbasaur: 1, charmander: 4, squirtle: 7, chikorita: 152, cyndaquil: 155, totodile: 158,
  treecko: 252, torchic: 255, mudkip: 258, turtwig: 387, chimchar: 390, piplup: 393,
  snivy: 495, tepig: 498, oshawott: 501, chespin: 650, fennekin: 653, froakie: 656,
  rowlet: 722, litten: 725, popplio: 728, grookey: 810, scorbunny: 813, sobble: 816,
  sprigatito: 906, fuecoco: 909, quaxly: 912
};
export const GENERATIONS = ["generation-i", "generation-ii", "generation-iii", "generation-iv", "generation-v", "generation-vi", "generation-vii", "generation-viii", "generation-ix"];

export function pokemonArtwork(id: number | string) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}
export function pokemonSprite(id: number | string) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}
