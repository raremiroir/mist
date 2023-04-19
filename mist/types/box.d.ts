import type { MistComponentType, MistSize } from "../../../../mist/theme";
import type { MistBorderType } from "../../../../mist/theme/properties/border/border";
import type { MistColors } from "../../../../mist/theme/properties/color/color";
import type { MistShadowTypes } from "../../../../mist/theme/properties/shadow/shadow";
import type { MistSizeSelector } from "../../../../mist/theme/properties/size/size";
import type { MistVariant } from "../../../../mist/theme/properties/variant/variant";

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
      transition?: string;
   };
   style?: {
      block?: boolean;
   };
   classes?: string;
}