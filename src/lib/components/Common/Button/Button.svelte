
<script lang="ts">  
  import { gen } from '$mist'
  import Ripple from '$src/lib/components/Actions/Ripple'
  
  import type { Mist } from '$mist/types';
  import type { ButtonType, LinkTarget, LinkRel } from '$lib/types/components/common';


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
  export let color: Mist.Props.Color.All|"custom" = 'surface';
  // What is the variant of the button? (optional)
  export let variant: Mist.Props.Variant.Type     = 'fill'
  // What is the size of the button? (optional)
  export let size: Mist.Props.Size.Type           = 'md';
  // What kind of rounding should the button have? (optional)
  export let border: Mist.Props.Border.Type       = 'tile';
  // What kind of shadow should the button have? (optional)
  export let shadow: Mist.Props.Shadow.Type       = 'bevel';
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

  let boxProperties:Mist.BoxGen.Props = {
    color: color,
    variant: variant,
    size: size,
    type: 'btn',
    border: border,
    shadow: shadow,
    fx: { hover: true, active: true },
    style: {
      block: block
    },
    classes: ''
  }
  let btnStyle = gen.box(boxProperties);

  $: btnClass = ` 
    ${btnStyle}
    ${capitalize ? 'capitalize' : uppercase ? 'uppercase' : ''}
    ${square ? 'aspect-square' : ''}
    ${disabled ? 'disabled' : ''} 
    hover:-translate-y-0.5 active:translate-y-0.5
    ${klass}
    `;


  let btnComp = href? 'a' : 'button';
  let btnProps = href ? {
    type: type,
    disabled: disabled,
    href: href,
    target: target,
    rel: rel,
  } : {
    type: type,
    disabled: disabled,
  }
</script>


<svelte:element 
  {id} 
  this={btnComp}
  aria-label={ariaLabel} 
  {...btnProps}  
  class="{btnClass} overflow-hidden" 
  on:click
>
  <div use:Ripple={ripple} class=" text-inherit">
    <slot>Button</slot>
  </div>
</svelte:element>