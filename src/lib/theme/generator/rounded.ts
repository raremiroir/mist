import type { MistRoundedProp } from "$src/lib/types/theme";

const generateRounded = ( rounded: MistRoundedProp ) => {
   switch (rounded) {
      case 'none':    return ` rounded-none`;
      case 'sm':      return ` rounded-md`;
      case 'md':      return ` rounded-xl`;
      case 'lg':      return ` rounded-3xl`;
      case 'circle':  return ` rounded-full`;
      case 'tile-sm': return ` rounded-tl-lg rounded-tr-xs rounded-bl-xs rounded-br-lg`;
      case 'tile':    return ` rounded-tl-xl rounded-tr-sm rounded-bl-sm rounded-br-xl`;
      case 'tile-lg': return ` rounded-tl-2xl rounded-tr-md rounded-bl-md rounded-br-2xl`;
      default:        return ` rounded-lg`;
   }
}

export default generateRounded;