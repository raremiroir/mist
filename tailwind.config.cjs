const shades = require("colorshades/tailwind");
import mist from './src/lib/theme/tailwind/theme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}'
  ],
  mode: 'jit',
  theme: mist.theme,
  plugins: [],
}

