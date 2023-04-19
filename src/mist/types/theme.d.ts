import type { MistBorderType } from "../theme/properties/border/border";
import type { MistColor, MistColors, MistShade, MistVariantStates } from "../theme/properties/color/color";
import type { MistShadowType } from "../theme/properties/shadow/shadow";
import type { MistVariant } from "../theme/properties/variant/variant";

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
      shadows: MistShadowType[],
   }
};