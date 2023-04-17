import { css } from "@emotion/css";
import type { MistThemeShadowOpacities, MistThemeShadows } from "../../types/properties/shadow";


export const mistThemeShadow: MistThemeShadows = {
   default: {
      xs:    `0 0 0 1px`,   // 1px
      sm:    `0 1px 2px 0`, // 2px
      md:    `0 1px 3px 0`, // 3px
      lg:    `0 4px 6px -1px`, // 6px
      xl:    `0 10px 15px -3px` , // 15px
      '2xl': `0 20px 25px -5px`, // 25px
   },
   bevel: { 
      xs:    `-2px 2px 0px 2px`, // 2px
      sm:    `-4px 4px 0px 4px`, // 4px
      md:    `-6px 6px 0px 6px`, // 6px
      lg:    `-8px 8px 0px 8px`, // 8px
      xl:    `-12px 12px 0px 12px`, // 12px
      '2xl': `-16px 16px 0px 16px`, // 16px
   },
   'bevel-inner': {
      xs:    `inset 2px -2px 0px 2px`,  // 2px
      sm:    `inset 4px -4px 0px 4px`,  // 4px
      md:    `inset 6px -6px 0px 6px`,  // 6px
      lg:    `inset 8px -8px 0px 8px`,  // 8px
      xl:    `inset 12px -12px 0px 12px`,  // 12px
      '2xl': `inset 16px -16px 0px 16px`,  // 16px
   },
}

export const mistThemeShadowOpacities: MistThemeShadowOpacities = {
   default: `0.05`,
   bevel: `0.5`,
   'bevel-inner': `0.5`,
}

export default mistThemeShadow;