// All possible shades of a color
export type MistShade = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
// The value of a shade is a string
export type MistShades = { [key in MistShade]: string; };

// All default color styles
export type MistColor = "primary" | "secondary" | "tertiary" | "success" | "warning" | "error" | "surface";
// All additional color styles
export type MistColorAdded = "surface_alt" | "surface_dark";
// Combine the default and additional color styles
export type MistColors = MistColor | MistColorAdded;


// Every color style needs all shades
export type MistColorPalette = { [key in MistColors]: MistShades; };

// Default color styles for the theme (bg, text, border, shadow)
export type ColorStyleType = "bg" | "text" | "border" | "shadow";

// States in which the color can be used (default, hover, active, focus, disabled)
// 'on' is used for text color on a background color
export type ColorStyleState = "default" | "hover" | "active" | "focus" | "disabled" | "on";

// There should be a default color for each color style type
export type MistVariantStates = {
   [key in ColorStyleState]?: string;
}

// Every color style should need a color for each state
type ThemeColors = { [key in MistColors]: MistVariantStates }

// The final color object for the theme - added colors are optional
export type MistThemeColors = {
   [key in ColorStyleType]: ThemeColors;
}