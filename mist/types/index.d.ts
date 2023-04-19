import type { MistBoxGenProps } from "./box";
import type { MistComponentType, MistSize } from "./theme";
import type { MistColor, MistColorAdded, MistColors, MistShade } from "../theme/properties/color/color"
import type { MistVariant } from "../theme/properties/variant/variant";
import type { MistBorderType } from "../theme/properties/border/border";
import type { MistShadowType } from "../theme/properties/shadow/shadow";

export namespace Mist {
   export namespace BoxGen {
      export type Props = MistBoxGenProps
   }
   export namespace Props {
      export namespace Color {
         export type Shade = MistShade;
         export type Base = MistColor;
         export type Ext = MistColorAdded;
         export type All = MistColors;
      }
      export namespace Variant {
         export type Type = MistVariant;
      }
      export namespace Size {
         export type Type = MistSize;
      }
      export namespace ComponentType {
         export type Type = MistComponentType;
      }
      export namespace Border {
         export type Type = MistBorderType;
      }
      export namespace Shadow {
         export type Type = MistShadowType;
      }
   }
}