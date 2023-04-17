import mistThemeBorder from "../../style/properties/border";
import type { MistBorderSelector, MistBorderType } from "../../types/properties/border";

const generateBorder = ( props: MistBorderSelector = {
   type: 'tile',
   size: 'md',
} ) => {
   const { type, size } = props;

   if (type === 'none') return mistThemeBorder.none;
   if (type === 'circle') return mistThemeBorder.circle;

   /*@ts-ignore*/
   return mistThemeBorder[type][size];
}

export default generateBorder;