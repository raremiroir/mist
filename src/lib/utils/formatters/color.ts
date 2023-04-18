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
    },
    toHsl: (hex:string) => {
      const rgb = formatColor.hex.toRgb(hex);
      const r = rgb.r / 255, g = rgb.g / 255, b = rgb.b / 255;
      const max = Math.max(r, g, b), min = Math.min(r, g, b);
      let h:any, s:any, l = (max + min) / 2;
    
      if(max == min) {
        h = s = 0; // achromatic
      } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        
        switch(max){
          case r: h = (g - b) / d + (g < b ? 6 : 0); break;
          case g: h = (b - r) / d + 2; break;
          case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
      }
      return {h: h * 360, s: s * 100, l: l * 100};
    },
    toRgbRawString: (hex:string) => {
        return formatColor.rgb.toRawString(formatColor.hex.toRgb(hex));
    },
  },
  hsl: {
    toHex: (h:number, s:number, l:number) => {
      l /= 100;
      const a = s * Math.min(l, 1 - l) / 100;
      const f = (n:number) => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
      };
      return `#${f(0)}${f(8)}${f(4)}`;
    }
  }
};

export default formatColor;