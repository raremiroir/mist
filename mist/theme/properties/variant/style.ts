import type { MistVariants } from "./variant";


export const themeVariants = {
   // Fill
   fill: {
      default: { bg: 0.9, border: 0 },
      hover: { bg: 0.95, border: 0 },
      active: { bg: 1, border: 0 },
   },
   // Outline
   outline: {
      default: { bg: 0, border: 1 },
      hover: { bg: 0.1, border: 1 },
      active: { bg: 0.2, border: 1 },
   },
   // Ghost
   ghost: {
      default: { bg: 0.1, border: 0 },
      hover: { bg: 0.2, border: 0 },
      active: { bg: 0.3, border: 0 },
   },
   // Soft
   soft: {
      default: { bg: 0.1, border: 0 },
      hover: { bg: 0.2, border: 0 },
      active: { bg: 0.3, border: 0 },
   },
   // Minimal
   minimal: {
      default: { bg: 0, border: 0 },
      hover: { bg: 0.1, border: 0 },
      active: { bg: 0.2, border: 0 },
   },
   // Link
   link: {
      default: { bg: 0, border: 0 },
      hover: { bg: 0, border: 1 },
      active: { bg: 0.1, border: 1 },
   },
   // Unstyled
   unstyled: {
      default: { bg: 0, border: 0 },
      hover: { bg: 0, border: 0 },
      active: { bg: 0, border: 0 },
   },
}

export default themeVariants;