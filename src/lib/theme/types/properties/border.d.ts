import type { MistSize } from "./index";

type BorderNone = "none";
type BorderCircle = "circle";

type MistBorderSize = MistSize;

export type MistBorderType = BorderNone | BorderCircle | 'default' | 'tile';

export type MistThemeBorder = {
   [key in MistBorderType]: {
      [key in MistBorderSize]: string;
   }|string;
}

export type MistBorderSelector = {
   type: MistBorderType,
   size: MistBorderSize
}