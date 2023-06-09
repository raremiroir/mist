import type { MistComponentType, MistSize } from "../../../types/theme";

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
   [key in MistComponentType]: {
      [key in MistSize]: string;
   };
}