import type { MistComponentType, MistSize } from "../theme"
import type { MistBorderType } from "../theme/properties/border/border"
import type { MistColor, MistColorAdded, MistShade } from "../theme/properties/color/color"
import type { MistShadowTypes } from "../theme/properties/shadow/shadow"
import type { MistVariant } from "../theme/properties/variant/variant"

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