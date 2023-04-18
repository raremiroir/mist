import mist_config from "../../../mist.config";

import type { MistColor, MistColorPalette } from "../../types/properties/color";
import formatColor from "../../../utils/formatters/color";
import { allColors, themeConstants } from "../../variables/base";

export const mistColorsObj:MistColorPalette = mist_config.theme.colors;

const makeColorStyle = {
   bg: () => {
      let bgObj:any = {};
      themeConstants.colors.types.base.forEach((color) => {
         bgObj[color] = (hover:boolean = false, active:boolean = false) => {
            let css = ` background-color: ${mistColorsObj[color][500]};`
            css += hover ? ` &:hover { background-color: ${mistColorsObj[color][600]}; }` : '';
            css += active ? ` &:active { background-color: ${mistColorsObj[color][700]}; }` : '';
            return css;
         }
      })
      return bgObj;  
   },
   text: () => {
      let textObj:any = {};
      themeConstants.colors.types.base.forEach((color) => {
         textObj[color] = (on:boolean = false, hover:boolean = false, active:boolean = false) => {
            let css = on ? ` color: ${mist_config.theme.font.color_on[color]};` : ` color: ${mistColorsObj[color][500]};`
            css += hover && !on ? ` &:hover { color: ${mistColorsObj[color][600]}; }` : '';
            css += active && !on ? ` &:active { color: ${mistColorsObj[color][700]}; }` : '';
            return css;
         }
      })
      return textObj;
   },
   border: () => {
      let borderObj:any = {};
      themeConstants.colors.types.base.forEach((color) => {
         borderObj[color] = (hover:boolean = false, active:boolean = false) => {
            let css = ` border-color: ${mistColorsObj[color][500]};`
            css += hover ? ` &:hover { border-color: ${mistColorsObj[color][600]}; }` : '';
            css += active ? ` &:active { border-color: ${mistColorsObj[color][700]}; }` : '';
            return css;
         }
      })
      return borderObj;
   },
   shadow: () => {
      let shadowObj:any = {};
      themeConstants.colors.types.base.forEach((color) => {
         shadowObj[color] = {
            default: formatColor.rgb.toRawString(formatColor.hex.toRgb(mistColorsObj[color][700])),
            hover:   formatColor.rgb.toRawString(formatColor.hex.toRgb(mistColorsObj[color][800])),
            active:  formatColor.rgb.toRawString(formatColor.hex.toRgb(mistColorsObj[color][900])),
         }
      })
      return shadowObj;
   },
}


export const themeColors = {
   bg: makeColorStyle.bg(),
   text: makeColorStyle.text(),
   border: makeColorStyle.border(),
   shadow: makeColorStyle.shadow(),
}

export default themeColors;