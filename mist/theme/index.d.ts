import type { MistBorderType } from "./properties/border/border";
import type { ColorStyleState, MistColor, MistColors, MistShade, MistVariantStates } from "./properties/color/color";
import type { MistShadowTypes } from "./properties/shadow/shadow";
import type { MistVariant } from "./properties/variant/variant";

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
      sizes: MistSize[],
      types: MistComponentType[],
      borders: MistBorderType[],
      shadows: MistShadowTypes[],
   }
};