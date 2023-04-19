import { MistBorderType } from "../theme/properties/border/border";
import { MistColor, MistColorAdded, MistColors, MistShade } from "../theme/properties/color/color"
import { MistShadowType } from "../theme/properties/shadow/shadow";
import { MistVariant } from "../theme/properties/variant/variant";
import { MistComponentType, MistSize } from "./theme";

declare module "@mist" {
   export const Types: {
      Color: {
         Shade: MistShade;
         BaseColor: MistColor;
         ExtColor: MistColorAdded;
         Color: MistColors;
      }
      Variant: MistVariant;
      Size: MistSize;
      ComponentType: MistComponentType;
      Border: MistBorderType;
      Shadow: MistShadowType;
   }
}