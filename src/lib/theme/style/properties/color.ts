import mist_config from "$src/lib/mist.config";
import { css } from "@emotion/css";

import gen from "../../generator/properties";
import type { MistThemeColors } from "../../types/properties/color";
import formatColor from "$src/lib/utils/formatters/color";

const colorArr = Object.keys(mist_config.theme.colors).map((key) => {
   return {color: mist_config.theme.colors[key], name: key};
})
/* @ts-ignore */
export const mistColorsObj:ThemeColorsObject = gen.color.obj(colorArr);

export const mistThemeColors:MistThemeColors = {
   bg: {
      primary: {
         default: css({ backgroundColor: `${mistColorsObj.primary[500]}` }),
         hover:   css`&:hover { background-color: ${mistColorsObj.primary[600]} }`,
         active:   css`&:active { background-color: ${mistColorsObj.primary[700]} !important }`,
      },
      secondary: {
         default: css({ backgroundColor: `${mistColorsObj.secondary[500]}` }),
         hover:   css`&:hover { background-color: ${mistColorsObj.secondary[600]} }`,
         active:   css`&:active { background-color: ${mistColorsObj.secondary[700]} !important }`,
      },
      tertiary: {
         default: css({ backgroundColor: `${mistColorsObj.tertiary[500]}` }),
         hover:   css`&:hover { background-color: ${mistColorsObj.tertiary[600]} }`,
         active:   css`&:active { background-color: ${mistColorsObj.tertiary[700]} !important }`,
      },
      error: {
         default: css({ backgroundColor: `${mistColorsObj.error[500]}` }),
         hover:   css`&:hover { background-color: ${mistColorsObj.error[600]} }`,
         active:   css`&:active { background-color: ${mistColorsObj.error[700]} !important }`,
      },
      success: {
         default: css({ backgroundColor: `${mistColorsObj.success[500]}` }),
         hover:   css`&:hover { background-color: ${mistColorsObj.success[600]} }`,
         active:   css`&:active { background-color: ${mistColorsObj.success[700]} !important }`,
      },
      warning: {
         default: css({ backgroundColor: `${mistColorsObj.warning[500]}` }),
         hover:   css`&:hover { background-color: ${mistColorsObj.warning[600]} }`,
         active:   css`&:active { background-color: ${mistColorsObj.warning[700]} !important }`,
      },
      surface: {
         default: css({ backgroundColor: `${mistColorsObj.surface[500]}` }),
         hover:   css`&:hover { background-color: ${mistColorsObj.surface[600]} }`,
         active:   css`&:active { background-color: ${mistColorsObj.surface[700]} !important }`,
      },
      surface_alt: {},
      surface_dark: {},
   },
   text: {
      primary:    {
         default: css`color: ${mistColorsObj.primary[500]}`,
         hover:   css`&:hover { color: ${mistColorsObj.primary[600]} }`,
         active:  css`&:active { color: ${mistColorsObj.primary[700]} !important }`,
         on:      css`color: ${mist_config.theme.font.color_on.primary}`,
      },
      secondary:  {
         default: css`color: ${mistColorsObj.secondary[500]}`,
         hover:   css`&:hover { color: ${mistColorsObj.secondary[600]} }`,
         active:  css`&:active { color: ${mistColorsObj.secondary[700]} !important }`,
         on:      css`color: ${mist_config.theme.font.color_on.secondary}`,
      },
      tertiary:   {
         default: css`color: ${mistColorsObj.tertiary[500]}`,
         hover:   css`&:hover { color: ${mistColorsObj.tertiary[600]} }`,
         active:  css`&:active { color: ${mistColorsObj.tertiary[700]} !important }`,
         on:      css`color: ${mist_config.theme.font.color_on.tertiary}`,
      },
      error:      {
         default: css`color: ${mistColorsObj.error[500]}`,
         hover:   css`&:hover { color: ${mistColorsObj.error[600]} }`,
         active:  css`&:active { color: ${mistColorsObj.error[700]} !important }`,
         on:      css`color: ${mist_config.theme.font.color_on.error}`,
      },
      success:    {
         default: css`color: ${mistColorsObj.success[500]}`,
         hover:   css`&:hover { color: ${mistColorsObj.success[600]} }`,
         active:  css`&:active { color: ${mistColorsObj.success[700]} !important }`,
         on:      css`color: ${mist_config.theme.font.color_on.success}`,
      },
      warning:    {
         default: css`color: ${mistColorsObj.warning[500]}`,
         hover:   css`&:hover { color: ${mistColorsObj.warning[600]} }`,
         active:  css`&:active { color: ${mistColorsObj.warning[700]} !important }`,
         on:      css`color: ${mist_config.theme.font.color_on.warning}`,
      },
      surface:    {
         default: css`color: ${mistColorsObj.surface[500]}`,
         hover:   css`&:hover { color: ${mistColorsObj.surface[600]} }`,
         active:  css`&:active { color: ${mistColorsObj.surface[700]} !important }`,
         on:      css`color: ${mist_config.theme.font.color_on.surface}`,
      },
      surface_alt: {},
      surface_dark: {},
   },
   border: {
      primary: {
         default: css`border-color: ${mistColorsObj.primary[500]}`,
         hover:   css` &:hover { border-color: ${mistColorsObj.primary[600]} }`,
         active:  css` &:active { border-color: ${mistColorsObj.primary[700]} !important }`,
      },
      secondary: {
         default: css`border-color: ${mistColorsObj.secondary[500]}`,
         hover:   css` &:hover { border-color: ${mistColorsObj.secondary[600]} }`,
         active:  css` &:active { border-color: ${mistColorsObj.secondary[700]} !important }`,
      },
      tertiary: {
         default: css`border-color: ${mistColorsObj.tertiary[500]}`,
         hover:   css` &:hover { border-color: ${mistColorsObj.tertiary[600]} }`,
         active:  css` &:active { border-color: ${mistColorsObj.tertiary[700]} !important }`,
      },
      error: {
         default: css`border-color: ${mistColorsObj.error[500]}`,
         hover:   css` &:hover { border-color: ${mistColorsObj.error[600]} }`,
         active:  css` &:active { border-color: ${mistColorsObj.error[700]} !important }`,
      },
      success: {
         default: css`border-color: ${mistColorsObj.success[500]}`,
         hover:   css` &:hover { border-color: ${mistColorsObj.success[600]} }`,
         active:  css` &:active { border-color: ${mistColorsObj.success[700]} !important }`,
      },
      warning: {
         default: css`border-color: ${mistColorsObj.warning[500]}`,
         hover:   css` &:hover { border-color: ${mistColorsObj.warning[600]} }`,
         active:  css` &:active { border-color: ${mistColorsObj.warning[700]} !important }`,
      },
      surface: {
         default: css`border-color: ${mistColorsObj.surface[500]}`,
         hover:   css` &:hover { border-color: ${mistColorsObj.surface[600]} }`,
         active:  css` &:active { border-color: ${mistColorsObj.surface[700]} !important }`,
      },
      surface_alt: {},
      surface_dark: {},
   },
   shadow: {
      primary: {
         default: formatColor.rgb.toRawString(formatColor.hex.toRgb(mistColorsObj.primary[700])),
         hover:   formatColor.rgb.toRawString(formatColor.hex.toRgb(mistColorsObj.primary[800])),
         active:  formatColor.rgb.toRawString(formatColor.hex.toRgb(mistColorsObj.primary[900])),
      },
      secondary: {
         default: formatColor.rgb.toRawString(formatColor.hex.toRgb(mistColorsObj.secondary[700])),
         hover:   formatColor.rgb.toRawString(formatColor.hex.toRgb(mistColorsObj.secondary[800])),
         active:  formatColor.rgb.toRawString(formatColor.hex.toRgb(mistColorsObj.secondary[900])),
      },
      tertiary: {
         default: formatColor.rgb.toRawString(formatColor.hex.toRgb(mistColorsObj.tertiary[700])),
         hover:   formatColor.rgb.toRawString(formatColor.hex.toRgb(mistColorsObj.tertiary[800])),
         active:  formatColor.rgb.toRawString(formatColor.hex.toRgb(mistColorsObj.tertiary[900])),
      },
      error: {
         default: formatColor.rgb.toRawString(formatColor.hex.toRgb(mistColorsObj.error[700])),
         hover:   formatColor.rgb.toRawString(formatColor.hex.toRgb(mistColorsObj.error[800])),
         active:  formatColor.rgb.toRawString(formatColor.hex.toRgb(mistColorsObj.error[900])),
      },
      success: {
         default: formatColor.rgb.toRawString(formatColor.hex.toRgb(mistColorsObj.success[700])),
         hover:   formatColor.rgb.toRawString(formatColor.hex.toRgb(mistColorsObj.success[800])),
         active:  formatColor.rgb.toRawString(formatColor.hex.toRgb(mistColorsObj.success[900])),
      },
      warning: {
         default: formatColor.rgb.toRawString(formatColor.hex.toRgb(mistColorsObj.warning[700])),
         hover:   formatColor.rgb.toRawString(formatColor.hex.toRgb(mistColorsObj.warning[800])),
         active:  formatColor.rgb.toRawString(formatColor.hex.toRgb(mistColorsObj.warning[900])),
      },
      surface: {
         default: formatColor.rgb.toRawString(formatColor.hex.toRgb(mistColorsObj.surface[700])),
         hover:   formatColor.rgb.toRawString(formatColor.hex.toRgb(mistColorsObj.surface[800])),
         active:  formatColor.rgb.toRawString(formatColor.hex.toRgb(mistColorsObj.surface[900])),
      },
      surface_alt: {},
      surface_dark: {},
   },
}

export default mistThemeColors;