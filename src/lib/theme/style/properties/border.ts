import { css } from "@emotion/css";
import type { MistThemeBorder } from "../../types/properties/border";


export const mistThemeBorder: MistThemeBorder = {
   none:      css`border-radius: 0;`,
   circle:    css`border-radius: 9999px;`,
   default: {
      xs:        css`border-radius: 0.25rem;`,
      sm:        css`border-radius: 0.375rem;`,
      md:        css`border-radius: 0.5rem;`,
      lg:        css`border-radius: 0.75rem;`,
      xl:        css`border-radius: 1rem;`,
      '2xl':     css`border-radius: 1.5rem;`,
   },
   tile: {
      xs: css`border-radius: 0.25rem 0 0 0.25rem;`,
      sm: css`border-radius: 0.375rem 0.25rem 0.25rem 0.375rem;`,
      md: css`border-radius: 0.5rem 0.375rem 0.375rem 0.5rem;`,
      lg: css`border-radius: 0.75rem 0.5rem 0.5rem 0.75rem;`,
      xl: css`border-radius: 1rem 0.75rem 0.75rem 1rem;`,
      '2xl': css`border-radius: 1.5rem 1rem 1rem 1.5rem;`,
   }
}

export default mistThemeBorder;