import { css } from "@emotion/css";
import type { MistSizeSelector } from "../../types/properties/size";
import mistThemeSizes from "../../style/properties/size";

const generateSize = ( props: MistSizeSelector = {
   type: 'btn',
   size: 'md'
} ) => {
   if (props.size === 'none' || props.type === 'none') return css`padding: 0;`;
   if (props.type === 'text') return mistThemeSizes.text[props.size];
   
   return css([
      mistThemeSizes[props.type][props.size],
      mistThemeSizes.text[props.size]
   ]);
} 

export default generateSize;