import type { MistColorProp, MistVariantProp } from "$src/lib/types/theme";
import format from "$src/lib/utils/formatters";
import theme from "../mist-theme";

const generateVariant = (
   variant: MistVariantProp,
   color: MistColorProp|'custom',
   hover: boolean = false,
   active: boolean = false,
   focus: boolean = false,
) => {
   // If color is custom, return empty string
   if ( color === 'custom') {
      return;
   // If color is not custom, return variant styles
   } else {
      let result = ''; 
      switch (variant) {
         // FILL
         case 'fill':
            result = ` ${theme.colors.bg[color].default} ${theme.properties.font.color.on[color]} !border-none
                     ${hover ? theme.colors.bg[color].hover : ''}
                     ${active ? theme.colors.bg[color].active : ''}`;
         // OUTLINE
         case 'outline':
            result = ` ${theme.colors.border[color].default} ${theme.colors.text[color].default} bg-transparent
                     ${hover ? `${theme.colors.bg[color].hover_alt} ${theme.colors.text[color].hover} ${theme.colors.border[color].hover}` : ''}
                     ${active ? `${theme.colors.bg[color].active_alt} ${theme.colors.text[color].active} ${theme.colors.border[color].active}` : ''}`;
         // GHOST
         case 'ghost':
            result = ` ${theme.colors.bg[color].default_alt} ${theme.colors.border[color].default} ${theme.colors.text[color].default}
                     ${hover ? `${theme.colors.bg[color].hover_alt} ${theme.colors.border[color].hover} ${theme.colors.text[color].hover}` : ''}
                     ${active ? `${theme.colors.bg[color].active_alt} ${theme.colors.border[color].active} ${theme.colors.text[color].active}` : ''}`;
         // SOFT
         case 'soft':
            result = ` ${theme.colors.bg[color].default_alt} ${theme.colors.text[color].default} !border-none
                     ${hover ? `${theme.colors.bg[color].hover_alt} ${theme.colors.text[color].hover}` : ''}
                     ${active ? `${theme.colors.bg[color].active_alt} ${theme.colors.text[color].active}` : ''}`;
         // MINIMAL
         case 'minimal':
            result = ` bg-transparent border-transparent
                     ${hover ? `${theme.colors.bg[color].hover_alt} ${theme.colors.text[color].hover}` : ''}
                     ${active ? `${theme.colors.bg[color].active_alt} ${theme.colors.text[color].active}` : ''}`;
         // LINK
         case 'link':
            result = ` bg-transparent border-transparent
                     ${hover ? `${theme.colors.bg[color].hover_alt} ${theme.colors.text[color].hover}` : ''}
                     ${active ? `${theme.colors.bg[color].active_alt} ${theme.colors.text[color].active}` : ''}`;
         // DEFAULT
         default:
            result = `bg-surface-200 text-black border-transparent
                  ${hover ? `hover:bg-surface-300` : ''}
                  ${active ? `active:bg-surface-400` : ''}`;
      }
      return format.text.trim(result);
   }
}

export default generateVariant;