import boxGen from "./theme/boxgen";
import type { MistBoxGenProps } from "./types/box";
import formatColor from "./utils/formatters/color";
import formatText from "./utils/formatters/text";

import { mWidths, mFlex, mTransition } from './tailwind/styles'


// Generator for box style
export const gen = {
   box: (props: MistBoxGenProps) => {
      return boxGen({
         color: props.color,
         variant: props.variant,
         size: props.size,
         type: props.type,
         border: props.border,
         shadow: props.shadow,
         fx: {
            hover: props.fx.hover,
            active: props.fx.active,
            transition: props.fx.transition? props.fx.transition : ' transition-all duration-300 ease-in-out',
         },
         style: {
            block: props.style?.block? props.style.block : false
         },
         classes: props.classes? props.classes : ''
      });
   }
}

// Utils (formatters, ...)
export const utils = {
   format: {
      text: formatText,
      color: {
         rgb: {
            to: {
               hex: (r: number, g: number, b:number) => formatColor.rgb.toHex(r, g, b),
               string: {
                  raw: (r: number, g: number, b:number) => formatColor.rgb.toRawString({r, g, b})
               }
            },
            from: {
               hex: (hex: string) => formatColor.hex.toRgb(hex)
            }
         },
         hex: {
            to: {
               rgb: (hex:string) => formatColor.hex.toRgb(hex),
               hsl: (hex:string) => formatColor.hex.toHsl(hex),
               string: {
                  rawrgb: (hex:string) => formatColor.hex.toRgbRawString(hex)
               }
            },
            from: {
               rgb: (r: number, g: number, b:number) => formatColor.rgb.toHex(r, g, b),
               hsl: (h: number, s: number, l:number) => formatColor.hsl.toHex(h, s, l)
            }
         },
         hsl: {
            to: {
               hex: (h: number, s: number, l:number) => formatColor.hsl.toHex(h, s, l)
            },
            from: {
               hex: (hex: string) => formatColor.hex.toHsl(hex)
            }
         }
      }
   }
}

// Tailwind preformatted classes
export const mtw = {
   flex: mFlex,
   transition: mTransition,
   widths: mWidths,
}