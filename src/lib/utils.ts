export function formatName(value: string) {
  return value.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
}

export function formatId(id: number) { return `#${String(id).padStart(4, "0")}`; }
export function formatHeight(height: number) { return `${(height / 10).toFixed(1)} m`; }
export function formatWeight(weight: number) { return `${(weight / 10).toFixed(1)} kg`; }
export function cleanFlavorText(value: string) { return value.replace(/[\n\f]/g, " ").replace(/\s+/g, " ").trim(); }
export function titleCase(value: string) { return formatName(value); }
export function slugify(value: string) { return value.toLowerCase().replace(/\s+/g, "-"); }
export function getIdFromUrl(url: string) { const bits = url.split("/").filter(Boolean); return Number(bits[bits.length - 1]); }
export function clamp(value: number, min: number, max: number) { return Math.min(Math.max(value, min), max); }

export function cn(...classes: Array<string | undefined | false | null>) { return classes.filter(Boolean).join(" "); }

export function humanizeError(error: unknown) {
  if (error instanceof Error && error.name === "AbortError") return "The request took too long. Check your connection and try again.";
  return "We couldn't reach the data service right now. Please retry in a moment.";
}
