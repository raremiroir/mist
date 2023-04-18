import { css } from "@emotion/css";
import type { MistThemeBorder } from "../../types/properties/border";


export const mistThemeBorder: MistThemeBorder = {
   none:     ` border-radius: 0;`,
   circle:   ` border-radius: 9999px;`,
   default: {
      xs:    ` border-radius: 0.25rem;`,
      sm:    ` border-radius: 0.375rem;`,
      md:    ` border-radius: 0.5rem;`,
      lg:    ` border-radius: 0.75rem;`,
      xl:    ` border-radius: 1rem;`,
      '2xl': ` border-radius: 1.5rem;`,
   },
   tile: {
      xs:    ` border-radius: 0.25rem 0 0.25rem 0;`,
      sm:    ` border-radius: 0.375rem 0.15rem 0.375rem 0.15rem;`,
      md:    ` border-radius: 0.5rem 0.175rem 0.5rem 0.175rem;`,
      lg:    ` border-radius: 0.75rem 0.25rem 0.75rem 0.25rem;`,
      xl:    ` border-radius: 1rem 0.25rem 1rem 0.25rem;`,
      '2xl': ` border-radius: 1.5rem 0.375rem 1.5rem 0.375rem;`,
   }
}

export default mistThemeBorder;