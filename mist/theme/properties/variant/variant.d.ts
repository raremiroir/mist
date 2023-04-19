import type { MistColors, MistVariantStates } from "../color/color";

export type MistVariant = "fill" | "outline" | "ghost" | "soft" | "minimal" | "link" | "unstyled";
export type MistVariants = { [key in MistVariant]: MistVariantStates; }

export type VariantGenSelector = {
   variant: MistVariant;
   color: MistColors|'custom';
   hover: boolean;
   active: boolean;
}