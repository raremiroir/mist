import boxGen from "./theme/boxgen";
import { MistBoxGenProps } from "./types/box";
import formatColor from "./utils/formatters/color";
import formatText from "./utils/formatters/text";

export const gen = {
   box: (props: MistBoxGenProps = {
      color: 'primary',
      variant: 'fill',
      size: 'xs',
      type: 'btn',
      border: 'tile',
      shadow: 'bevel-inner',
      fx: {
         hover: true,
         active: true,
         transition: ' transition-all duration-300 ease-in-out'
      },
      style: {
         block: false
      },
      classes: ''
   }) => {
      boxGen(props);
   }
}

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