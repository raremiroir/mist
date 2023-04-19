import mist from './mist/tailwind/theme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}'
  ],
  mode: 'jit',
  theme: mist.theme,
  plugins: [],
}

