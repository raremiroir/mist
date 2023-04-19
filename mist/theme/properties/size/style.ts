import type { MistThemeSizes } from "./size";


export const mistThemeSizes: MistThemeSizes = {
   text: {
      xs:    ` font-size: 0.5rem;`,
      sm:    ` font-size: 0.875rem;`,
      md:    ` font-size: 1rem;`,
      lg:    ` font-size: 1.125rem;`,
      xl:    ` font-size: 1.25rem;`,
      '2xl': ` font-size: 1.5rem;`,
   },
   btn: {
      xs:    ` padding: 0.25rem 0.5rem 0.4rem;`,
      sm:    ` padding: 0.375rem 0.75rem 0.5rem;`,
      md:    ` padding: 0.5rem 1rem 0.8rem;`,
      lg:    ` padding: 0.625rem 1.25rem;`,
      xl:    ` padding: 0.75rem 1.5rem;`,
      '2xl': ` padding: 0.875rem 1.75rem;`,
   },
   card: {
      xs:    ` padding: 0.25rem;`,
      sm:    ` padding: 0.5rem;`,
      md:    ` padding: 1rem;`,
      lg:    ` padding: 1.25rem;`,
      xl:    ` padding: 1.5rem;`,
      '2xl': ` padding: 1.75rem;`,
   },
}

export default mistThemeSizes;