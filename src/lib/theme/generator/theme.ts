
import { css } from "@emotion/css";
import mistThemeProperties from "../constants/properties";
import { mistStyle } from "../style/properties";
import type { MistBoxGenProps } from "../types/box";
import type { MistVariant } from "../types/properties/variant";
import type { MistColors } from "../types/properties/color";
import colorVariant from "./properties/variant";
import generateSize from "./properties/size";
import { propGen } from "./properties";

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
   },

   components: {
      // ========= Generate Button Styles ==========
      button: (btnProps:MistBoxGenProps = defaultStyle) => {
         mistThemeProperties.box.variants.forEach((variant:MistVariant) => {
            if (variant === btnProps.variant) {
               mistThemeProperties.box.colors.forEach((color:MistColors) => {
                  if (color === btnProps.color) {
                     return css([
                        mistStyle.variant[variant].default,
                        mistStyle.color.bg[color].default,
                     ])
                  }
               });
            }
         });
      },
      // ===========================================

      // ========= Generate Card Styles ==========
      card: () => {},
      // ===========================================

      // ========= Generate Group Styles ==========
      group: () => {},
      // ===========================================

      // ========= Generate Input Styles ==========
      input: () => {},
      // ===========================================

      // ========= Generate Select Styles ==========
      select: () => {},
      // ===========================================

      // ========= Generate Textarea Styles ==========
      textarea: () => {},
      // ===========================================

      // ========= Generate Checkbox Styles ==========
      checkbox: () => {},
      // ===========================================

      // ========= Generate Radio Styles ==========
      radio: () => {},
      // ===========================================

      // ========= Generate Switch Styles ==========
      switch: () => {},
      // ===========================================

      // ========= Generate Table Styles ==========
      table: () => {},
      // ===========================================

      // ========= Generate Modal Styles ==========
      modal: () => {},
      // ===========================================

      // ========= Generate Alert Styles ==========
      alert: () => {},
      // ===========================================
   }

}