<script lang="ts">
	import { boxGen } from '$src/lib/theme/generator/theme';
  import formatText from '$src/lib/utils/formatters/text';
  import Ripple from '$lib/components/Actions/Ripple'
  
  import type { ButtonType, LinkTarget, LinkRel } from '$lib/types/components/common';
	import type { MistSize } from '$src/lib/theme/types/properties';
	import type { MistBorderType } from '$src/lib/theme/types/properties/border';
	import type { MistColors } from '$src/lib/theme/types/properties/color';
	import type { MistShadowTypes } from '$src/lib/theme/types/properties/shadow';
	import type { MistVariant } from '$src/lib/theme/types/properties/variant';


  //====================================
  //======= FUNCTIONALITY PROPS ========
  //====================================
  // What is the button's id? (optional)
  export let id: string = '';
  // What is the button's aria-label? (required)
  export let ariaLabel: string = '';
  // What is the button's type? (optional)
  export let type: ButtonType = 'button';

  // What is the button's href? (optional - if provided, button will be rendered as an anchor tag)
  export let href: string = '';
  // What is the button's target? (optional)
  export let target: LinkTarget = "";
  // What is the button's rel? (optional)
  export let rel: LinkRel = "";
  //====================================
  
  //====================================
  //========= MAIN STYLE PROPS =========
  //====================================
  // What is the color of the button? (optional)
  export let color: MistColors|"custom" = 'surface_alt';
  // What is the variant of the button? (optional)
  export let variant: MistVariant = 'fill'
  // What is the size of the button? (optional)
  export let size: MistSize = 'md';
  // What kind of rounding should the button have? (optional)
  export let rounded: MistBorderType = 'tile';
  // What kind of shadow should the button have? (optional)
  export let shadow: MistShadowTypes = 'bevel';
  //====================================
  
  //====================================
  //======== OTHER STYLE PROPS =========
  //====================================
  // Is the button diabled?
  export let disabled: boolean = false;
  // Is the button a block?
  export let block:boolean = false;
  // Is the button a square or circle?
  export let square: boolean = false;
  // Should text be capitalized?
  export let capitalize: boolean = false;
  // Should text be uppercase?
  export let uppercase: boolean = false;
  
  // Is the button in loading state?
  export let loading: boolean = false;
  // Is the button in active state?
  export let active: boolean = false;
  // Does the button have a ripple effect?
  export let ripple: boolean = true;
  
  // Does the button have an icon?
  export let icon: string = '';
  // What is the icon's position?
  export let iconPosition: 'left' | 'right' = 'left';
  //====================================

  let klass:string = '';
  export { klass as class };

  $: loading;
  $: active;
  $: disabled;
  
  //====================================
  //========= GENERATE STYLES ==========
  //====================================


  let btnStyle = boxGen.box({
    color: color,
    variant: variant,
    size: size,
    type: 'btn',
    border: rounded,
    shadow: shadow,
    fx: { hover: true, active: true },
    style: {
      block: block
    },
    classes: klass
  })

  let btnClass = formatText.trim(` 
    ${btnStyle}
    ${capitalize ? 'capitalize' : uppercase ? 'uppercase' : ''}
    ${square ? 'aspect-square' : ''}
    ${disabled ? 'disabled' : ''}`
  ) 

  let btnProps = {
    id: id,
    ariaLabel: ariaLabel,
    type: type,
    class: btnClass,
    disabled: disabled,
  }
</script>


{#if href}
  <a 
    {href} {target} {rel}
    {...btnProps} use:Ripple={ripple}
    on:click>
    <slot>Button</slot>
  </a>
{:else}
  <button 
    {...btnProps} use:Ripple={ripple}
    on:click>
    <slot>Button</slot>
  </button>
{/if}
