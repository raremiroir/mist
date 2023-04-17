import type { MistAllBorders, MistBorderType } from "./border";
import type { ColorStyleState, MistColor, MistColors, MistShade, MistVariantStates } from "./color";
import type { MistAllShadows } from "./shadow";
import type { MistAllSizes, MistSizeSelector } from "./size";
import type { MistVariant } from "./variant";

export type MistSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
export type MistComponentType = "btn" | "card" | "text";

export type MistFontProperties = {
   family: { 
      base: string; 
      heading: string; 
      code?: string; 
   },
   color: { 
      base: MistVariantStates|string; 
      dark?: MistVariantStates|string; 
      on: { [key in MistColors]?: string } 
   }
}

export type MistThemeProperties = {
   box: {
      colors: MistColor[],
      colors_shades: MistShade[],
      colorsDerived: MistColors[],
      variants: MistVariant[],
      sizes: MistAllSizes,
      borders: MistAllBorders,
      shadows: MistAllShadows,
   }
};