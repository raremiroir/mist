import fs from 'fs';
import mist_config from '../mist.config';
import formatColor from '../utils/formatters/color';

const destinationHex = 'mist/generated/mist-colors_hex.ts';
const destinationRgb = 'mist/generated/mist-colors_rgb.ts';

const colors = mist_config.theme.colors;

let colorsRgb:any = {};

Object.keys(colors).forEach((color) => {
   let shadeColor:any = {};
   Object.keys(colors[color]).forEach((shade) => {
      shadeColor[shade] = formatColor.hex.toRgbRawString(colors[color][shade]);
   })
   colorsRgb[color] = shadeColor;
});

// HEX
fs.writeFile(destinationHex, `
   export const mistColorHex = ${JSON.stringify(colors)};
   export default mistColorHex;`, 
   (err) => {
      if (err) throw err;
      console.log('HEX Colors have been written!');
   }
);
// RGB
fs.writeFile(destinationRgb, `
   export const mistColorRgb = ${JSON.stringify(colorsRgb)};
   export default mistColorRgb;`, 
   (err) => {
      if (err) throw err;
      console.log('RGB Colors have been generated!');
   }
);

// const colorShadesObj = colors.map()