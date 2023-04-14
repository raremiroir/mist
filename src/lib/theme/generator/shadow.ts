import type { MistColorProp, MistShadowProp } from "$src/lib/types/theme";
import theme from "../mist-theme";

const generateShadow = (
   shadow: MistShadowProp,
   color: MistColorProp|'custom',
   hover: boolean = false,
   active: boolean = false,
   focus: boolean = false,
) => {
   if (color === 'custom') {
      return;
   } else {
      switch (shadow) {
         case 'none': return ` shadow-none`; 
         case 'sm': 
            return ` shadow-md
                     ${ hover ? 'hover:shadow-lg hover:shadow-current/30' : ''}
                     ${ active ? 'active:shadow-current/40' : '' }`; 
         case 'md': 
            return ` shadow-lg
                     ${ hover ? 'hover:shadow-xl hover:shadow-current/30' : ''}
                     ${ active ? 'active:shadow-current/40' : '' }`;
         case 'lg': 
            return ` shadow-xl
                     ${ hover ? 'hover:shadow-2xl hover:shadow-current/30' : ''}
                     ${ active ? 'active:shadow-current/40' : '' }`;
         case 'xl': 
            return ` shadow-2xl
                     ${ hover ? 'hover:shadow-3xl hover:shadow-current/30' : ''}
                     ${ active ? 'active:shadow-current/40' : '' }`;
         case 'bevel':
            return ` shadow-md-noblur ${theme.colors.shadow[color].default}
                     ${ hover ? `hover:shadow-lg-noblur ${theme.colors.shadow[color].hover}` : ''}
                     ${ active ? `${theme.colors.shadow[color].active}` : '' }`;
         default:
            return ` shadow-md
                     ${ hover ? 'hover:shadow-lg hover:shadow-current/30' : ''}
                     ${ active ? 'active:shadow-current/40' : '' }`; 
      }
   }
}

export default generateShadow;