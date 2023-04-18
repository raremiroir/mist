import themeColors from "../../style/properties/color";
import themeVariants from "../../style/properties/variants";
import type { VariantGenSelector } from "../../types/properties/variant";

export const generateVariant = (props: VariantGenSelector = {
   variant: 'fill',
   color: 'primary',
   hover: false,
   active: false,
}) => {
   // If color is custom, return empty string
   if ( props.color === 'custom') {
      return;
   // If color is not custom, return variant styles
   } else {
      let result = '';

      switch (props.variant) {

         // FILL
         case 'fill':
            result = `${themeVariants.fill(props.hover, props.active)} 
                      ${themeColors.text[props.color](true, false, false)}
                      ${themeColors.bg[props.color](props.hover, props.active)}`;
            break;
         // OUTLINE
         case 'outline':
            result = `${themeVariants.outline(props.hover, props.active)}
                      ${themeColors.text[props.color](props.hover, props.active)}
                      ${themeColors.border[props.color](props.hover, props.active)}`;
            break;
         // GHOST
         case 'ghost':
            result = `${themeVariants.ghost(props.hover, props.active)}
                      ${themeColors.text[props.color](props.hover, props.active)}
                      ${themeColors.bg[props.color](props.hover, props.active)}
                      ${themeColors.border[props.color](props.hover, props.active)}`;
            break;
         // SOFT
         case 'soft':
            result = `${themeVariants.soft(props.hover, props.active)}
                      ${themeColors.text[props.color](props.hover, props.active)}
                      ${themeColors.bg[props.color](props.hover, props.active)}`;
            break;
         // MINIMAL
         case 'minimal':
            result = `${themeVariants.minimal(props.hover, props.active)}
                      ${themeColors.bg[props.color](props.hover, props.active)}
                      ${themeColors.text[props.color](props.hover, props.active)}`;
            break;
         // LINK
         case 'link':
            result = `${themeVariants.link(props.hover, props.active)}
                      ${themeColors.text[props.color](props.hover, props.active)}
                      ${themeColors.border[props.color](props.hover, props.active)}`;
            break;
         // DEFAULT
         default:
            result = `${themeVariants.fill(props.hover, props.active)}
                      ${themeColors.text[props.color](true, false, false)}
                      ${themeColors.bg[props.color](props.hover, props.active)}`;
            break;
      }
      return result;
   }
}

export default generateVariant;