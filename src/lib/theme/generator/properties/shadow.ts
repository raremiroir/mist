import { css } from "@emotion/css";
import mistThemeShadow, { mistThemeShadowOpacities } from "../../style/properties/shadow";
import type { MistShadowSelector } from "../../types/properties/shadow";
import mistThemeColors from "../../style/properties/color";
import formatText from "$src/lib/utils/formatters/text";

const generateShadow = (props:MistShadowSelector = {
   color: 'default',
   type: 'none',
   size: 'md',
   hover: false,
   active: false,
}) => {
   if (props.type === 'none') return;
   const { color, type, size, hover, active } = props;

   var shadowColor = 
        color === 'custom' ? ''
      : color === 'default' ? `rgba(0, 0, 0, ${mistThemeShadowOpacities[type]})`
      : `rgba(${mistThemeColors.shadow[color].default}, ${mistThemeShadowOpacities[type]})`;

   return formatText.trim(`
      box-shadow: ${mistThemeShadow[type][size]} ${shadowColor};
      ${hover ? `&:hover { box-shadow: ${mistThemeShadow[type][size]} ${shadowColor}; }` : ''}
      ${active ? `&:active { box-shadow: ${mistThemeShadow[type][size]} ${shadowColor}; }` : ''}
   `);
}

export default generateShadow;