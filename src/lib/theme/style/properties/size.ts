import { css } from "@emotion/css";
import type { MistThemeSizes } from "../../types/properties/size";


export const mistThemeSizes: MistThemeSizes = {
   text: {
      xs:    css`font-size: 0.75rem;`,
      sm:    css`font-size: 0.875rem;`,
      md:    css`font-size: 1rem;`,
      lg:    css`font-size: 1.125rem;`,
      xl:    css`font-size: 1.25rem;`,
      '2xl': css`font-size: 1.5rem;`,
   },
   btn: {
      xs:    css`padding: 0.25rem 0.5rem;`,
      sm:    css`padding: 0.375rem 0.75rem;`,
      md:    css`padding: 0.5rem 1rem;`,
      lg:    css`padding: 0.625rem 1.25rem;`,
      xl:    css`padding: 0.75rem 1.5rem;`,
      '2xl': css`padding: 0.875rem 1.75rem;`,
   },
   card: {
      xs:    css`padding: 0.25rem;`,
      sm:    css`padding: 0.5rem;`,
      md:    css`padding: 1rem;`,
      lg:    css`padding: 1.25rem;`,
      xl:    css`padding: 1.5rem;`,
      '2xl': css`padding: 1.75rem;`,
   },
}

export default mistThemeSizes;