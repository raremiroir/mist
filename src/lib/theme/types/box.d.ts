import type { MistComponentType, MistSize } from "./properties";
import type { MistBorderType } from "./properties/border";
import type { MistColors } from "./properties/color";
import type { MistShadowTypes } from "./properties/shadow";
import type { MistSizeSelector } from "./properties/size";
import type { MistVariant } from "./properties/variant";

export type MistBoxGenProps = {
   color: MistColors|'custom';
   variant: MistVariant;
   size: MistSize;
   type: MistComponentType;
   border: MistBorderType;
   shadow: MistShadowTypes;
   fx: {
      hover: boolean;
      active: boolean;
   };
   style?: {
      block?: boolean;
   };
   classes?: string;
}