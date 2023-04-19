import themeColors from "../color/style";
import themeVariants from "./style";
import type { VariantGenSelector } from "./variant";

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
            result = `${themeColors.text[props.color](true, false, false)}
                      ${themeColors.bg[props.color](
                           themeVariants.fill.default.bg,
                           props.hover ? themeVariants.fill.hover.bg : '',
                           props.active ? themeVariants.fill.active.bg : ''
                        )}`;
            break;
         // OUTLINE
         case 'outline':
            result = `${themeColors.text[props.color](props.hover, props.active)}
                      ${themeColors.border[props.color](
                        themeVariants.outline.default.bg,
                        props.hover ? themeVariants.outline.hover.bg : '',
                        props.active ? themeVariants.outline.active.bg : ''
                     )}`;
            break;
         // GHOST
         case 'ghost':
            result = `${themeColors.text[props.color](props.hover, props.active)}
                      ${themeColors.bg[props.color](
                        themeVariants.ghost.default.bg,
                        props.hover ? themeVariants.ghost.hover.bg : '',
                        props.active ? themeVariants.ghost.active.bg : ''
                      )}
                      ${themeColors.border[props.color](
                         themeVariants.ghost.default.bg,
                         props.hover ? themeVariants.ghost.hover.bg : '',
                         props.active ? themeVariants.ghost.active.bg : ''
                      )}`;
            break;
         // SOFT
         case 'soft':
            result = `${themeColors.text[props.color](props.hover, props.active)}
                      ${themeColors.bg[props.color](
                        themeVariants.soft.default.bg,
                        props.hover ? themeVariants.soft.hover.bg : '',
                        props.active ? themeVariants.soft.active.bg : ''
                      )}`;
            break;
         // MINIMAL
         case 'minimal':
            result = `${themeColors.text[props.color](props.hover, props.active)}
                      ${themeColors.bg[props.color](
                        themeVariants.minimal.default.bg,
                        props.hover ? themeVariants.minimal.hover.bg : '',
                        props.active ? themeVariants.minimal.active.bg : ''
                      )}`;
            break;
         // LINK
         case 'link':
            result = `${themeColors.text[props.color](props.hover, props.active)}
                      ${themeColors.border[props.color](
                        themeVariants.link.default.bg,
                        props.hover ? themeVariants.link.hover.bg : '',
                        props.active ? themeVariants.link.active.bg : ''
                     )}`;
            break;
         // DEFAULT
         default:
            result = `${themeColors.text[props.color](true, false, false)}
                      ${themeColors.bg[props.color](
                        themeVariants.fill.default.bg,
                        props.hover ? themeVariants.fill.hover.bg : '',
                        props.active ? themeVariants.fill.active.bg : ''
                      )}`;
            break;
      }
      return result;
   }
}

export default generateVariant;