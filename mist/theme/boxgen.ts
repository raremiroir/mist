import mist_config from "../mist.config";
import type { MistBoxGenProps } from "../types/box";


const PREFIX = (mist_config.prefix + '-') || '';

export const boxGen = (props: MistBoxGenProps = {
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

   // Variant
   let compClass = ` ${PREFIX}${props.variant}-${props.color}`;
   compClass += props.fx.hover ? ` ${PREFIX}${props.variant}-${props.color}-hover` : '';
   compClass += props.fx.active ? ` ${PREFIX}${props.variant}-${props.color}-active` : '';

   // Size + type
   compClass += ` ${PREFIX}${props.type}-${props.size}`;
   compClass += ` ${PREFIX}text-${props.size}`;

   // Border
   compClass += props.border === 'none' 
      ? ` ${PREFIX}border-none` 
      : ` ${PREFIX}border-${props.border}-${props.size}`;

   // Shadow
   if (props.shadow === 'none') {
      compClass += ` ${PREFIX}shadow-none`;
   } else if (props.shadow === 'default') {
      compClass += ` ${PREFIX}shadow-${props.size}`;
      compClass += props.fx.hover ? ` ${PREFIX}shadow-${props.size}-hover` : '';
      compClass += props.fx.active ? ` ${PREFIX}shadow-${props.size}-active` : '';
   } else {
      compClass += ` ${PREFIX}shadow-${props.shadow}-${props.size}-${props.color}`;
      compClass += props.fx.hover ? ` ${PREFIX}shadow-${props.shadow}-${props.size}-${props.color}-hover` : '';
      compClass += props.fx.active ? ` ${PREFIX}shadow-${props.shadow}-${props.size}-${props.color}-active` : '';
   }

   // Transition
   compClass += ` ${props.fx.transition?? ' transition-all duration-300 ease-in-out'}`;

   // Width
   compClass += props.style?.block ? ` w-full` : ' w-fit';
   
   return compClass
}

export default boxGen;