import mistVariables   from "./variables";
import mist_config     from "../mist.config";

import generateVariant from "./properties/variant/gen";
import generateSize    from "./properties/size/gen";
import generateBorder  from "./properties/border/gen";
import generateShadow  from "./properties/shadow/gen";
import formatColor     from "../utils/formatters/color";

const PREFIX = mist_config.prefix ? mist_config.prefix + "-" : "";

let mistCss = ``;

const { variants, colors, types, sizes, borders, shadows } = mistVariables.base.const;

// Root styles
mistCss += `:root { 
   ::selection {
      background-color: rgba(${formatColor.hex.toRgbRawString(mist_config.theme.colors.primary[500])}, 0.4);
   }
 }`;

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
      mistCss += type === "btn"
         ? ` .${PREFIX}${type}-${size} { ${generateSize({ type, size })} cursor: pointer; user-select: none; }`
         : ` .${PREFIX}${type}-${size} { ${generateSize({ type, size })} }`;
   });

   // Generate borders
   borders.forEach((border) => {
      if (border === "none") {
         mistCss += ` .${PREFIX}border-none { border: none; }`;
      } else {
         mistCss += ` .${PREFIX}border-${border}-${size} { ${generateBorder({ type: border, size })}; }`;
      }
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