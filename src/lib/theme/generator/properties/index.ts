import generateShadow from "./shadow";
import generateSize from "./size";
import generateBorder from "./border";
import colorVariant from "./variant";

import type { VariantGenSelector } from "../../types/properties/variant";
import type { MistSizeSelector } from "../../types/properties/size";
import type { MistBorderSelector } from "../../types/properties/border";
import type { MistShadowSelector } from "../../types/properties/shadow";

// import mist_config from "$src/lib/mist.config";
// const prefix = (mist_config.prefix || "m") + "-";

/*
* PROPGEN
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

export default propGen;