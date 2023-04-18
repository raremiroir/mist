import { mistVariables } from "../variables";
import { generateVariant } from "./properties/variant";
import mist_config from "../../mist.config";
import generateSize from "./properties/size";
import generateBorder from "./properties/border";
import generateShadow from "./properties/shadow";

const PREFIX = mist_config.prefix ? mist_config.prefix + "-" : "";

let mistCss = ` .${PREFIX}bg { background-color: green; color: gold; }`;

const { variants, colors, types, sizes, borders, shadows } = mistVariables.base.const;

// Generate variants
variants.types.forEach((variant) => {
   colors.types.base.forEach((color) => {
      mistCss += ` .${PREFIX}${variant}-${color} { ${generateVariant({ variant, color, hover: false, active: false })}; }`;
      mistCss += ` .${PREFIX}${variant}-${color}-hover { ${generateVariant({ variant, color, hover: true, active: false })}; }`;
      mistCss += ` .${PREFIX}${variant}-${color}-active { ${generateVariant({ variant, color, hover: false, active: true })}; }`;
   });
});

sizes.forEach((size) => {
   // Generate types sizes
   types.forEach((type) => {
      mistCss += ` .${PREFIX}${type}-${size} { ${generateSize({ type, size })}; }`;
   });

   // Generate borders
   borders.forEach((border) => {
      mistCss += ` .${PREFIX}border-${border}-${size} { ${generateBorder({ type: border, size })}; }`;
   });

   // Generate shadows
   shadows.forEach((shadow) => {
      if (shadow === "none") {
         mistCss += ` .${PREFIX}shadow-none { box-shadow: none; }`;
      } else {
         let shadowName = shadow === "default" ? "" : `-${shadow}`;
         colors.types.base.forEach((color) => {
            let colorName = shadow === "default" ? "" : `-${color}`;
            mistCss += ` .${PREFIX}shadow${shadowName}-${size}${colorName} { ${generateShadow({ color, type: shadow, size, hover: false, active: false })} }`;
            mistCss += ` .${PREFIX}shadow${shadowName}-${size}${colorName}-hover { ${generateShadow({ color, type: shadow, size, hover: true, active: false })} }`;
            mistCss += ` .${PREFIX}shadow${shadowName}-${size}${colorName}-active { ${generateShadow({ color, type: shadow, size, hover: false, active: true })} }`;
         });
      }
   });
});

export default mistCss;