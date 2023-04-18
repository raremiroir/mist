import type { MistComponentType, MistSize } from "./properties"
import type { MistBorderType } from "./properties/border"
import type { MistColor, MistColorAdded, MistShade } from "./properties/color"
import type { MistShadowTypes } from "./properties/shadow"
import type { MistVariant } from "./properties/variant"

export type ThemeConstants = {
   colors: {
      shades: MistShade[]
      types: {
         base: MistColor[]
         extend: MistColorAdded[]
      }
   },
   variants: {
      types: MistVariant[],
   },
   sizes: MistSize[],
   types: MistComponentType[],
   borders: MistBorderType[],
   shadows: MistShadowTypes[],
}