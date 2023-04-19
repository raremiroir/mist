import type { ThemeConstants } from "../../types/base";
import type { MistColors } from "../properties/color/color";

export const themeConstants: ThemeConstants = {
   colors: {
      shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
      types: {
         base: [
            "primary",
            "secondary",
            "tertiary",
            "success",
            "warning",
            "error",
            "surface"
         ],
         extend: [
            "surface_alt",
            "surface_dark"
         ],
      }
   },
   variants: {
      types: [
         "fill",
         "outline",
         "ghost",
         "soft",
         "minimal",
         "link",
         "unstyled"
      ]
   },
   sizes: ["xs", "sm", "md", "lg", "xl", "2xl"],
   types: ["text", "btn", "card"],
   borders: ["none", "default", "tile", "circle"],
   shadows: ["none", "default", "bevel", "bevel-inner"],
}

export const allColors: MistColors[] = [...themeConstants.colors.types.base, ...themeConstants.colors.types.extend];