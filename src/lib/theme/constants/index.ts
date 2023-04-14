import type { MistColor, MistColorProp, MistColorStyle, MistShade } from "$src/lib/types/theme"


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

export const tailwind = {
   config: {
      theme: {
         // Breakpoints
         screens: {
            
         }
      }
   }
}

export const classes = {
   transition: {
      base: `transition-all duration-300 ease-out`,
      fast: `transition-all duration-200 ease-out`,
      slow: `transition-all duration-500 ease-in-out`,
   }

}

export default classes;