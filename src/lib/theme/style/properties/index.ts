/* These files are used to generate the theme object for the CSS in JS library (Emotion) to use.
*  Values from these objects can be used in the components to generate the CSS.
*  They are also used to generate the box object for all the components in the generator/theme.ts file
*/ 
import type { MistVariants } from "../../types/properties/variant";
import type { MistThemeColors } from "../../types/properties/color";
import type { MistThemeSizes } from "../../types/properties/size";
import type { MistThemeBorder } from "../../types/properties/border";
import type { MistThemeShadows } from "../../types/properties/shadow";

import mistThemeVariants from "./variants";
import mistThemeColors from "./color";
import mistThemeSizes from "./size";
import mistThemeBorder from "./border";
import mistThemeShadow from "./shadow";
import type { MistTransitions } from "../../types/transition";

// import mist_config from "$src/lib/mist.config";

// const prefix = (mist_config.prefix || "m") + "-";
// const colorTypes = ['bg', 'text', 'border', 'ring', 'ringOffset', 'placeholder', 'from', 'to', 'via', 'gradient', 'shadow'];
// const contentTypes = ['btn', 'card', 'group']

export const mistStyle: {
   variant: any; //MistVariants;
   color: any; //MistThemeColors;
   size: MistThemeSizes;
   border: MistThemeBorder;
   shadow: MistThemeShadows;
} = {
   // Variants
   variant: mistThemeVariants,
   // Colors
   color: mistThemeColors,
   // Sizes
   size: mistThemeSizes,
   // Borders
   border: mistThemeBorder,
   // Shadow
   shadow: mistThemeShadow
}

export const mistTransition: MistTransitions = {
   duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '450ms',
   },
   timing: {
      linear: 'linear',
      cubic: {
         'ease': 'cubic-bezier(0.4, 0, 0.2, 1)',
         'ease-in': 'cubic-bezier(0.5, 0, 0.95, 0.95)',
         'ease-out': 'cubic-bezier(0.05, 0.15, 0.45, 1)',
         'ease-in-out': 'cubic-bezier(0.5, 0.05, 0.5, 0.95)',
      },
      quad: {
         'ease': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
         'ease-in': 'cubic-bezier(.55,.17,.83,.83)',
         'ease-out': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
         'ease-in-out': 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      },
      circ: {
         'ease': 'cubic-bezier(0.075, 0.82, 0.165, 1)',
         'ease-in': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
         'ease-out': 'cubic-bezier(0.075, 0.82, 0.165, 1)',
         'ease-in-out': 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
      },
      sine: {
         'ease': 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
         'ease-in': 'cubic-bezier(0.47, 0, 0.745, 0.715)',
         'ease-out': 'cubic-bezier(0.39, 0.575, 0.565, 1)',
         'ease-in-out': 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
      },
      expo: {
         'ease': 'cubic-bezier(0.19, 1, 0.22, 1)',
         'ease-in': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
         'ease-out': 'cubic-bezier(0.19, 1, 0.22, 1)',
         'ease-in-out': 'cubic-bezier(1, 0, 0, 1)',
      },
      bounce: {
         'ease': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
         'ease-in': 'cubic-bezier(0.71, -0.46, 0.88, 0.6)',
         'ease-out': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
         'ease-in-out': 'cubic-bezier(0.86, 0, 0.07, 1)',
      },
      back: {
         'ease': 'cubic-bezier(0.36, 0, 0.66, -0.56)',
         'ease-in': 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
         'ease-out': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
         'ease-in-out': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
   },
   delay: {
      fast: '50ms',
      normal: '100ms',
      slow: '150ms',
   },

}