import { css } from "@emotion/css";
import type { MistSizeSelector } from "../../types/properties/size";
import mistThemeSizes from "../../style/properties/size";

const generateSize = ( props: MistSizeSelector = {
   type: 'btn',
   size: 'md'
} ) => {
   let sizeClass = ''
   if (props.size === 'none' || props.type === 'none') {
      sizeClass = ` padding: 0;`;
   } else if (props.type === 'text') {
      sizeClass = mistThemeSizes.text[props.size];
   } else {
      sizeClass = ` ${mistThemeSizes[props.type][props.size]} ${mistThemeSizes.text[props.size]}`;
   }
   
   return sizeClass;
} 

export default generateSize;