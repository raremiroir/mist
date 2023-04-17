import type { VariantGenSelector } from "../../types/properties/variant";

import { mistStyle } from "../../style/properties";
import { css } from "@emotion/css";

const colorVariant = {
   generate: (props:VariantGenSelector = {
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
               result = css([
                  mistStyle.variant.fill.default,
                  mistStyle.color.text[props.color].on,
                  mistStyle.color.bg[props.color].default, 
                  props.hover && [
                     mistStyle.variant.fill.hover,
                     mistStyle.color.bg[props.color].hover
                  ],
                  props.active && [
                     mistStyle.variant.fill.active,
                     mistStyle.color.bg[props.color].active,
                  ],
               ]);
            // OUTLINE
            case 'outline':
               result = css([
                  mistStyle.variant.outline.default,
                  mistStyle.color.text[props.color].default,
                  mistStyle.color.border[props.color].default, 
                  props.hover && [
                     mistStyle.variant.outline.hover,
                     mistStyle.color.text[props.color].hover,
                     mistStyle.color.border[props.color].hover,
                  ],
                  props.active && [
                     mistStyle.variant.outline.active,
                     mistStyle.color.text[props.color].active,
                     mistStyle.color.border[props.color].active,
                  ],
               ]);
            // GHOST
            case 'ghost':
               result = css([
                  mistStyle.variant.ghost.default,
                  mistStyle.color.text[props.color].default,
                  mistStyle.color.bg[props.color].default, 
                  mistStyle.color.border[props.color].default, 
                  props.hover && [
                     mistStyle.variant.ghost.hover,
                     mistStyle.color.text[props.color].hover,
                     mistStyle.color.bg[props.color].hover, 
                     mistStyle.color.border[props.color].hover,
                  ],
                  props.active && [
                     mistStyle.variant.ghost.active,
                     mistStyle.color.text[props.color].active,
                     mistStyle.color.bg[props.color].active, 
                     mistStyle.color.border[props.color].active,
                  ],
               ]);
            // SOFT
            case 'soft':
               result = css([
                  mistStyle.variant.soft.default,
                  mistStyle.color.text[props.color].default,
                  mistStyle.color.bg[props.color].default, 
                  props.hover && [
                     mistStyle.variant.soft.hover,
                     mistStyle.color.text[props.color].hover,
                     mistStyle.color.bg[props.color].hover, 
                  ],
                  props.active && [
                     mistStyle.variant.soft.active,
                     mistStyle.color.text[props.color].active,
                     mistStyle.color.bg[props.color].active, 
                  ],
               ]);
            // MINIMAL
            case 'minimal':
               result = css([
                  mistStyle.variant.minimal.default,
                  mistStyle.color.text[props.color].default,
                  props.hover && [
                     mistStyle.variant.minimal.hover,
                     mistStyle.color.text[props.color].hover,
                     mistStyle.color.bg[props.color].hover, 
                  ],
                  props.active && [
                     mistStyle.variant.minimal.active,
                     mistStyle.color.bg[props.color].active,
                     mistStyle.color.text[props.color].active,
                     mistStyle.color.bg[props.color].active, 
                  ],
               ]);
            // LINK
            case 'link':
               result = css([
                  mistStyle.variant.link.default,
                  mistStyle.color.text[props.color].default, 
                  mistStyle.color.border[props.color].default, 
                  props.hover && [
                     mistStyle.variant.link.hover,
                     mistStyle.color.text[props.color].hover, 
                     mistStyle.color.border[props.color].hover,
                  ],
                  props.active && [
                     mistStyle.variant.link.active,
                     mistStyle.color.text[props.color].active, 
                     mistStyle.color.border[props.color].active,
                  ],
               ]);
            // DEFAULT
            default:
               result = css([
                  mistStyle.variant.fill.default,
                  mistStyle.color.text.surface.on,
                  mistStyle.color.bg.surface.default, 
                  props.hover && [
                     mistStyle.variant.fill.hover,
                     mistStyle.color.bg.surface.hover
                  ],
                  props.active && [
                     mistStyle.variant.fill.active,
                     mistStyle.color.bg.surface.active,
                  ],
               ]);
         }
         return result;
      }
   },
}

export default colorVariant;