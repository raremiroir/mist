import type { MistComponentType, MistSize } from "./index";

type NoSize = "none";
export type MistSizes = MistSize | NoSize;
export type MistSizeTypes = MistComponentType | NoSize;

export type MistSizeSelector = {
   type: MistSizeTypes,
   size: MistSizes
};

export type MistAllSizes = {
   types: MistSizeTypes[],
   sizes: MistSizes[],
}

export type MistThemeSizes = {
   [key in MistSizeType]: {
      [key in MistSize]: string;
   };
}