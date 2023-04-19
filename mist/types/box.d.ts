import type { MistComponentType, MistSize } from "./theme";
import type { MistBorderType } from "../theme/properties/border/border";
import type { MistColors } from "../theme/properties/color/color";
import type { MistShadowType } from "../theme/properties/shadow/shadow";
import type { MistSizeSelector } from "../theme/properties/size/size";
import type { MistVariant } from "../theme/properties/variant/variant";

export type MistBoxGenProps = {
   color: MistColors|'custom';
   variant: MistVariant;
   size: MistSize;
   type: MistComponentType;
   border: MistBorderType;
   shadow: MistShadowType;
   fx: {
      hover: boolean;
      active: boolean;
      transition?: string;
   };
   style?: {
      block?: boolean;
   };
   classes?: string;
}