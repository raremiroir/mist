import { css } from "@emotion/css";
import type { MistVariants } from "../../types/properties/variant";


export const mistThemeVariants: MistVariants = {
   // Fill
   fill: {
      default: css`background-opacity: 0.9; border-opacity: 0;`,
      hover: css`&:hover { background-opacity: 0.95; }`,
      active: css`&:hover { background-opacity: 1; }`,
   },
   // Outline
   outline: {
      default: css`background-opacity: 0; border-opacity: 1;`,
      hover: css`&:hover { background-opacity: 0.1; }`,
      active: css`&:active { background-opacity: 0.2; }`,
   },
   // Ghost
   ghost: {
      default: css`background-opacity: 0.1; border-opacity: 0;`,
      hover: css`&:hover { background-opacity: 0.2; border-opacity: 1; }`,
      active: css`&:active { background-opacity: 0.3; }`,
   },
   // Soft
   soft: {
      default: css`background-opacity: 0.1; border-opacity: 0;`,
      hover: css`&:hover { background-opacity: 0.2; }`,
      active: css`&:active { background-opacity: 0.3; }`,
   },
   // Minimal
   minimal: {
      default: css`background-opacity: 0; border-opacity: 0;`,
      hover: css`&:hover { background-opacity: 0.1; }`,
      active: css`&:active { background-opacity: 0.2; }`,
   },
   // Link
   link: {
      default: css`background-opacity: 0; border-opacity: 0;`,
      hover: css`&:hover { background-opacity: 0; border-bottom-opacity: 1; }`,
      active: css`&:active { background-opacity: 0.1; }`,
   },

   // Unstyled
   unstyled: {
      default: css``,
      hover: css``,
      active: css``,
   },
}

export default mistThemeVariants;