import type { MistSize, MistThemeProperties } from "../types/properties";

const sizes: MistSize[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];

export const mistThemeProperties: MistThemeProperties = {
   box: {
      colors: ["primary", "secondary", "tertiary", "success", "warning", "error", "surface"],
      colors_shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900 ],
      colorsDerived: ["primary", "secondary", "tertiary", "success", "warning", "error", "surface", "surface_alt", "surface_dark"],
      variants: ["fill", "outline", "ghost", "soft", "minimal", "link"],
      sizes: {
         types: ['text', 'btn', 'card' ],
         sizes: sizes,
      },
      borders: {
         types: ["none", "default", "tile", "circle"],
         sizes: sizes,
      },
      shadows: {
         types: ["none", "default", "bevel", "bevel-inner"],
         sizes: sizes,
      }
   }
}

export default mistThemeProperties;