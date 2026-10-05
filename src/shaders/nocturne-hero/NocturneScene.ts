export const NOCTURNE_TITLES: Record<string, string> = {};
export const NOCTURNE_VARIANTS: readonly string[] = [];
export type NocturneVariant = string;

export function buildNocturneDocument(_variant?: string): string {
  throw new Error("Nocturne is not part of the Sylva hero page.");
}
