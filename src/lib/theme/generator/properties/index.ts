import generateShadow from "./shadow";
import generateSize from "./size";
import generateBorder from "./border";
import colorVariant from "./variant";

import type { VariantGenSelector } from "../../types/properties/variant";
import type { MistSizeSelector } from "../../types/properties/size";
import type { MistBorderSelector } from "../../types/properties/border";
import type { MistShadowSelector } from "../../types/properties/shadow";

import { mistThemeProperties } from "../../constants/properties";
/*@ts-ignore*/
import createShades from "colorshades";
import { css } from '@emotion/css';
import mist_config from "../../../mist.config";

const prefix = (mist_config.prefix || "m") + "-";

/*
* INSERT CUSTOM PROPERTIES HERE (IF ANY)
* FROM MIST_CONFIG FILE
*/

export const propGen = {
   // ========= Generate Variant Styles =========
   variant: (props: VariantGenSelector = {
      variant: 'fill',
      color: 'primary',
      hover: false,
      active: false,
   }) => {
      return colorVariant.generate({ variant: props.variant, color: props.color, hover: props.hover, active: props.active });
   },
   // ===========================================
   // ========== Generate Size Styles ===========
   size: ( props: MistSizeSelector = {
      type: 'btn',
      size: 'md'
   }) => { 
      return generateSize({type: props.type, size: props.size })
   },
   // ===========================================
   // ========= Generate Border Styles ==========
   border: ( props: MistBorderSelector  = {
      type: "tile",
      size: "md",
   }) => {
      return generateBorder({type: props.type, size: props.size });
   },
   // ===========================================
   // ========= Generate Shadow Styles ==========
   shadow: ( props: MistShadowSelector = {
      color: 'default',
      type: 'bevel',
      size: 'md',
      hover: false,
      active: false,
   }) => {
      return generateShadow({ color: props.color, type: props.type, size: props.size, hover: props.hover, active: props.active });
   },
   // ===========================================
}

const gen = {
   box: {
      // allClasses: () => {
      //    let classes:any = {};
      //    props.box.colors.forEach((color) => {
      //       props.box.variants.forEach((variant) => {
      //          classes[`${prefix}${color}-${variant}`] = boxGen.variant(variant, color, false, false, false);
      //          classes[`${prefix}${color}-${variant}-hover`] = boxGen.variant(variant, color, true, false, true);
      //          classes[`${prefix}${color}-${variant}-active`] = boxGen.variant(variant, color, true, true, true);
      //       });
      //    });
      //    props.box.sizes.forEach((size) => {
      //       classes[`${prefix}size-${size}`] = boxGen.size(size);
      //    });
      //    props.box.rounds.forEach((rounded) => {
      //       classes[`${prefix}rounded-${rounded}`] = boxGen.rounded(rounded);
      //    });
      //    props.box.shadows.forEach((shadow) => {
      //       props.box.colors.forEach((color) => {
      //          classes[`${prefix}${color}-shadow-${shadow}`] = boxGen.shadow(shadow, color, false, false, false);
      //          classes[`${prefix}${color}-shadow-${shadow}-hover`] = boxGen.shadow(shadow, color, true, false, true);
      //          classes[`${prefix}${color}-shadow-${shadow}-active`] = boxGen.shadow(shadow, color, true, true, true);
      //       });
      //    });
      //    return classes;
      // },
      // ============== FULL BOX GEN ===============
      // full: (props: MistBoxGenProps = {
      //    color: 'primary',
      //    variant: 'fill',
      //    size: 'md',
      //    rounded: 'md',
      //    shadow: 'md',
      //    fx: {
      //       hover: false,
      //       active: false,
      //       focus: false,
      //    },
      //    style: {
      //       block: false,
      //    },
      //    klass: ''
      // }) => {
      //    // Define base class
      //    let base_class = `
      //       ${ mist.baseStyles.base }
      //       ${ props.fx.hover  ? mist.baseStyles.hover  : '' }
      //       ${ props.fx.active ? mist.baseStyles.active : '' } `;

      //    // Define colors and variants
      //    base_class += boxGen.variant(props.variant, props.color, props.fx.hover, props.fx.active, props.fx.focus);
      //    // Define size
      //    base_class += boxGen.size(props.size);
      //    // Define rounded
      //    base_class += boxGen.rounded(props.rounded);
      //    // Define shadow
      //    base_class += boxGen.shadow(props.shadow, props.color, props.fx.hover, props.fx.active, props.fx.focus);
         
      //    // Define other styles
      //    base_class += props.style?.block ? ` block` : ` inline-block`;

      //    // Add custom classes to override
      //    base_class += ` ${props.klass}`;

         
      //    // trim all white to just one space 
      //    base_class = format.text.trim(base_class);

      //    return base_class;
      // }
      // ===========================================
   },

   color: {
      obj: (colors: {
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
      },
   },
}

export default gen;