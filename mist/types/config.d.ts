import type { MistColor, MistShade } from "$src/lib/theme/types/properties/color"

type MistThemeConfigRequired = {
   font: {
      family: {
         body: string,
         title: string,
         code: string,
      },
      color_on: {
         primary: string,
         secondary: string,
         tertiary: string,
         success: string,
         warning: string,
         error: string,
         surface: string,
      },
   },
   screens: {
      xs: string,
      sm: string,
      md: string,
      lg: string,
      xl: string,
      '2xl': string,
      '3xl': string,
   },
   colors: {
      [key in MistColor]: {
         [key in MistShade|"DEFAULT"]: string;
      }
      // primary: string,
      // secondary: string,
      // tertiary: string,
      // success: string,
      // warning: string,
      // error: string,
      // surface: string,
   },
}

export type MistConfigRequired = {
   prefix: string,
   theme: MistThemeConfigRequired,
}