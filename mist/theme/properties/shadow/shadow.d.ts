import type { MistSize } from "../../index";
import type { MistColors } from "../color/color";

type ShadowNone = "none";
type ShadowType = "default" | "bevel" | "bevel-inner";
export type MistShadowTypes = ShadowType | ShadowNone;

export type MistShadowSelector = {
   color: MistColors|"default"|"custom";
   type: MistShadowTypes;
   size: MistSize;
   hover: boolean;
   active: boolean;
   focus?: boolean;
}

export type MistAllShadows = {
   types: MistShadowTypes[];
   sizes: MistSize[];
}


export type MistThemeShadows = {
   [key in ShadowType]: {
      [key in MistSize]: string;
   }
}
export type MistThemeShadowOpacities = {
   [key in ShadowType]: string;
}