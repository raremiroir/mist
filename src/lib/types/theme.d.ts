
export type MistShade = 25 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;
export type MistShades = { [key in MistShade]: string; };

export type MistColorProp = "primary" | "secondary" | "tertiary" | "success" | "warning" | "error" | "surface" | "surface_alt" | "surface_dark";
export type MistColorPalette = { [key in MistColorProp]: MistShades; };

export type MistSizeProp = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "even-xs" | "even-sm" | "even-md" | "even-lg" | "even-xl" | "even-2xl";
export type MistRoundedProp = "none" | "sm" | "md" | "lg" | "circle" | "tile-sm" | "tile" | "tile-lg";
export type MistShadowProp = "none" | "sm" | "md" | "lg" | "xl" | "bevel";

export type MistThemeVariant = {
   baseStyles: string;
   hoverStyles: string;
   activeStyles: string;
};
export type MistVariantProp = "fill" | "outline" | "ghost" | "soft" | "minimal" | "link";
export type MistThemeVariants = { [key in MistVariantProp]: MistThemeVariant; }

export type MistThemeFontProps = {
   family: { base: string; heading: string; code?: string; },
   color: { base: string; dark: string; on: {[key in MistColorProp]?: string } }
}
export type MistThemeBorderProps = { base: string; rounded: string; }

export type MistThemeColorStates = {
   default: string; default_alt?: string;
   hover: string;   hover_alt?: string;
   active: string;  active_alt?: string;
   focus?: string;  focus_alt?: string;
};
type MistThemeStyleColorItem = { [key in MistColorProp]: MistThemeColorStates };
interface MistThemeStyleItem extends MistThemeStyleColorItem { none: string; };

export type MistColorStyle = {
   bg: MistThemeColorStates;
   border: MistThemeColorStates;
   text: MistThemeColorStates;
   shadow: MistThemeColorStates;
}
export type MistColor = { [key in MistColorProp]: MistColorStyle; };

export type MistThemeProperties = {
   properties: {
      font: MistThemeFontProps;
      border: MistThemeBorderProps;
   },
   colors: {
      bg: MistThemeStyleItem;
      border: MistThemeStyleItem;
      text: MistThemeStyleItem;
      shadow: MistThemeStyleItem;
   };
};

export type MistBoxGenProps = {
   color: MistColorProp;
   variant: MistVariantProp;
   size: MistSizeProp;
   rounded: MistRoundedProp;
   shadow: MistShadowProp;
   fx: {
      hover: boolean;
      active: boolean;
      focus: boolean;
   },
   style?: {
      block?: boolean;
   },
   klass?: string;
};

export const MistPresetColorProps: MistColorProp[] = [
   "primary",
   "secondary",
   "tertiary",
   "success",
   "warning",
   "error",
   "surface",
   "surface_alt",
   "surface_dark",
]
export const isColorProp = (prop: string): prop is MistColorProp => {
   return MistPresetColorProps.includes(prop);
}