import mist_config from '../../../mist.config'

import formatColor from '../../../utils/formatters/color'
import { themeConstants } from '../../variables/base'

import mistColorsHex from '../../../generated/mist-colors_hex';
import mistColorsRgb from '../../../generated/mist-colors_rgb';

const makeColorStyle = {
   bg: () => {
      let bgObj:any = {};
      themeConstants.colors.types.base.forEach((color) => {
         bgObj[color] = (opacity:string = '0.9', hover:string = '', active:string = '') => {
            let css = ` background-color: rgba(${mistColorsRgb[color][500]}, ${opacity});`
            css += !!hover || !!active ? ` &:hover  { background-color: rgba(${mistColorsRgb[color][600]}, ${hover}); }` : '';
            css += !!active ? ` &:active { background-color: rgba(${mistColorsRgb[color][700]}, ${active}); }` : '';
            return css;
         }
      })
      return bgObj;  
   },
   text: () => {
      let textObj:any = {};
      themeConstants.colors.types.base.forEach((color) => {
         textObj[color] = (on:boolean = false, hover:boolean = false, active:boolean = false) => {
            let css = on ? ` color: ${mist_config.theme.font.color_on[color]};` : ` color: rgba(${mistColorsRgb[color][500]}, 1);`
            css += (hover && !on) || (active && !on) ? ` &:hover { color: rgba(${mistColorsRgb[color][600]}, 1); }` : '';
            css += active && !on ? ` &:active { color: rgba(${mistColorsRgb[color][700]}, 1); }` : '';
            return css;
         }
      })
      return textObj;
   },
   border: () => {
      let borderObj:any = {};
      themeConstants.colors.types.base.forEach((color) => {
         borderObj[color] = (opacity:string = '0.9', hover:string = '', active:string = '') => {
            let css = ` border-color: rgba(${mistColorsRgb[color][500]}, ${opacity});`
            css += !!hover || !!active ? ` &:hover  { border-color: rgba(${mistColorsRgb[color][600]}, ${hover}); }` : '';
            css += !!active ? ` &:active { border-color: rgba(${mistColorsRgb[color][700]}, ${active}); }` : '';
            return css;
         }
      })
      return borderObj;
   },
   shadow: () => {
      let shadowObj:any = {};
      themeConstants.colors.types.base.forEach((color) => {
         shadowObj[color] = {
            default: formatColor.rgb.toRawString(formatColor.hex.toRgb(mistColorsHex[color][700])),
            hover:   formatColor.rgb.toRawString(formatColor.hex.toRgb(mistColorsHex[color][800])),
            active:  formatColor.rgb.toRawString(formatColor.hex.toRgb(mistColorsHex[color][900])),
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