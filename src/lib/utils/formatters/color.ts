const formatColor = {
  rgb: {
    toHex: (r:number, g:number, b:number) => {
      return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
    },
    toRawString: (rgb: {r:number, g:number, b:number}) => {
      const {r, g, b} = rgb;
      return `${r}, ${g}, ${b}`;
    }
  },
  hex: {
    toRgb: (hex:string) => {
      // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
      var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
      });
    
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : { r: 0, g: 0, b: 0 };
    }
  }
};

export default formatColor;