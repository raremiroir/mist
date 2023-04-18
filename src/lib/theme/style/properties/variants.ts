import { css } from "@emotion/css";
import type { MistVariants } from "../../types/properties/variant";


export const themeVariants = {
   // Fill
   fill: (hover: boolean = false, active: boolean = false) => {
      let css = ' background-opacity: 0.9; border-opacity: 0;'
      css += hover ? ' &:hover { background-opacity: 0.95; }' : '';
      css += active ? ' &:active { background-opacity: 1; }' : '';
      return css;
   },
   // Outline
   outline: (hover: boolean = false, active: boolean = false) => {
      let css = ' background-opacity: 0; border-opacity: 1;'
      css += hover ? ' &:hover { background-opacity: 0.1; }' : '';
      css += active ? ' &:active { background-opacity: 0.2; }' : '';
      return css;
   },
   // Ghost
   ghost: (hover: boolean = false, active: boolean = false) => {
      let css = ' background-opacity: 0.1; border-opacity: 0;'
      css += hover ? ' &:hover { background-opacity: 0.2; }' : '';
      css += active ? ' &:active { background-opacity: 0.3; }' : '';
      return css;
   },
   // Soft
   soft: (hover: boolean = false, active: boolean = false) => {
      let css = ' background-opacity: 0.1; border-opacity: 0;'
      css += hover ? ' &:hover { background-opacity: 0.2; }' : '';
      css += active ? ' &:active { background-opacity: 0.3; }' : '';
      return css;
   },
   // Minimal
   minimal: (hover: boolean = false, active: boolean = false) => {
      let css = ' background-opacity: 0; border-opacity: 0;'
      css += hover ? ' &:hover { background-opacity: 0.1; }' : '';
      css += active ? ' &:active { background-opacity: 0.2; }' : '';
      return css;
   },
   // Link
   link: (hover: boolean = false, active: boolean = false) => {
      let css = ' background-opacity: 0; border-opacity: 0;'
      css += hover ? ' &:hover { background-opacity: 0; border-bottom-opacity: 1; }' : '';
      css += active ? ' &:active { background-opacity: 0.1; }' : '';
      return css;
   },
   // Unstyled
   unstyled: (hover: boolean = false, active: boolean = false) => {
      let css = '';
      return css;
   },
}

export default themeVariants;