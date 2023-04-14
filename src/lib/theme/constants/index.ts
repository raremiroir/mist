import type { MistColor, MistColorProp, MistColorStyle, MistRoundedProp, MistShade, MistShadowProp, MistSizeProp, MistVariantProp } from "$src/lib/types/theme"


type MistThemeConstants = {
   presetColors: MistColorProp[],
   colors: MistColorProp[],
   shades: MistShade[],
   colorStyles: MistColor,
}

export const mist = {
   baseStyles: {
      base: `transition-all duration-300 ease-out border-solid border-2`,
      hover: ``,
      active: `hover:-translate-y-0.5 active:translate-y-0.5 cursor-pointer`,
   },
   presetColors: [
      "primary", "secondary", "tertiary",
      "success", "warning", "error",
      "surface", "surface_alt", "surface_dark",
   ],
   colors: [
      "primary", "secondary", "tertiary",
      "success", "warning", "error",
      "surface",
   ],
   shades: [
      25, 50, 100, 200, 300, 400,
      500, 600, 700, 800, 900, 950
   ],
   colorStyles: {
      primary: {
         bg: {
            default: 'bg-primary-500 dark:bg-primary-400',
         }
      }
   },
}

export const props: {
   box: {
      colors: MistColorProp[],
      variants: MistVariantProp[],
      sizes: MistSizeProp[],
      rounds: MistRoundedProp[],
      shadows: MistShadowProp[],
   }
} = {
   box: {
      colors: ["primary", "secondary", "tertiary", "success", "warning", "error", "surface", "surface_alt", "surface_dark"],
      variants: ["fill", "outline", "ghost", "soft", "minimal", "link"],
      sizes: ["none", "xs", "sm", "md", "lg", "xl", "2xl", "even-xs", "even-sm", "even-md", "even-lg", "even-xl", "even-2xl"],
      rounds: ["none", "sm", "md", "lg", "circle", "tile-sm", "tile", "tile-lg"],
      shadows: ["none", "sm", "md", "lg", "xl", "bevel"],
   }
}

export const classes = {
   transition: {
      base: `transition-all duration-300 ease-out`,
      fast: `transition-all duration-200 ease-out`,
      slow: `transition-all duration-500 ease-in-out`,
   },
   flex: {
      center: `flex items-center justify-center`,
      start: `flex items-center justify-start`,
      end: `flex items-center justify-end`,
      between: `flex items-center justify-between`,
      around: `flex items-center justify-around`,
      evenly: `flex items-center justify-evenly`,
      col_center: `flex flex-col items-center justify-center`,
      col_start: `flex flex-col items-center justify-start`,
      col_end: `flex flex-col items-center justify-end`,
      
   }

}

export default classes;