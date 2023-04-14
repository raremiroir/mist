import type { MistSizeProp } from "$src/lib/types/theme";

const generateSize = ( size: MistSizeProp ) => {
   switch (size) {
      case 'none':      return ``;
      case 'xs':        return `text-sm px-2 py-1`;
      case 'sm':        return `text-sm px-3 py-1.5`;
      case 'md':        return `text-base px-4 py-2`;
      case 'lg':        return `text-lg px-5 py-2.5`;
      case 'xl':        return `text-xl px-6 py-3`;
      case '2xl':       return `text-2xl px-7 py-3.5`;
      case 'even-xs':   return `text-sm p-1.5`;
      case 'even-sm':   return `text-sm p-2`;
      case 'even-md':   return `text-base p-4`;
      case 'even-lg':   return `text-lg p-5`;
      case 'even-xl':   return `text-xl p-6`;
      case 'even-2xl':  return `text-2xl p-7`;
      default:          return `text-base px-4 py-2`;
   };
}

export default generateSize;