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

// import mist_config from "$src/lib/mist.config";

// const prefix = (mist_config.prefix || "m") + "-";
// const colorTypes = ['bg', 'text', 'border', 'ring', 'ringOffset', 'placeholder', 'from', 'to', 'via', 'gradient', 'shadow'];
// const contentTypes = ['btn', 'card', 'group']

export const mistStyle: {
   variant: MistVariants;
   color: MistThemeColors;
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