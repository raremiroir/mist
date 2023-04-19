import type { MistSizeSelector } from "./size";
import mistThemeSizes from "./style";

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