/* 
*  Values from these objects can be used in the components to generate the CSS.
*  They are also used to generate the box object for all the components in the generator/theme.ts file
*/ 
import type { MistVariants } from "./variant/variant";
import type { MistThemeColors } from "./color/color";
import type { MistThemeSizes } from "./size/size";
import type { MistThemeBorder } from "./border/border";
import type { MistThemeShadows } from "./shadow/shadow";

import mistThemeVariants from "./variant/style";
import mistThemeColors from "./color/style";
import mistThemeSizes from "./size/style";
import mistThemeBorder from "./border/style";
import mistThemeShadow from "./shadow/style";

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