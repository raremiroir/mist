
import { css } from "@emotion/css";
import mistThemeProperties from "../constants/properties";
import type { MistBoxGenProps } from "../types/box";
import { propGen } from "./properties";
import createShades from "colorshades";

const defaultStyle: MistBoxGenProps = {
   color: 'primary',
   variant: 'fill',
   size: 'md',
   type: 'card',
   border: 'tile',
   shadow: 'bevel',
   fx: {
      hover: false,
      active: false,
   },
   style: {
      block: false,
   },
   classes: ''
}

export const boxGen = {
   // This is the main function that generates the styles for the box
   box: (props:MistBoxGenProps = defaultStyle) => {
      const variantClass = propGen.variant({
         variant: props.variant,
         color: props.color,
         hover: props.fx?.hover ?? false,
         active: props.fx?.active ?? false,
      })
      const sizeClass = propGen.size({
         type: props.type,
         size: props.size,
      })
      const borderClass = propGen.border({
         size: props.size,
         type: props.border,
      })
      const shadowClass = propGen.shadow({
         color: props.color,
         type: props.shadow,
         size: props.size,
         hover: props.fx?.hover ?? false,
         active: props.fx?.active ?? false,
      })
      return css([
         variantClass,
         sizeClass,
         borderClass,
         shadowClass,
      ])
   }
}

export const colorGen = (colors: {
   color:string /* hex color */,
   name:string /* name of color */,
}[]) => {

   const amount = mistThemeProperties.box.colors_shades.length;
   const colorsObj: {[key:string]: {[key:string]:string}} = {};
   
   colors.forEach((color) => {
      var shades = createShades(color.color, amount); 
      let shadesObj: {[key:string]: string} = {};
      shades.colors.forEach((shade:any) => {
         shadesObj[`${shade.index}`] = shade.hex;
      });
      shadesObj['DEFAULT'] = shadesObj['500'];
      colorsObj[color.name] = shadesObj;
   });
   return colorsObj;
}