<script lang="ts">
   import { slide } from "svelte/transition";

   import { activeAccordeon } from "./accordeon";
   
   import { Types } from '@mist';
	import { boxGen } from "$src/lib/theme/generator";
	import type { MistColors } from "$src/lib/theme/types/properties/color";
	import type { MistVariant } from "$src/lib/theme/types/properties/variant";
	import type { MistSize } from "$src/lib/theme/types/properties";
	import type { MistBorderType } from "$src/lib/theme/types/properties/border";
	import type { MistShadowType } from "$src/lib/theme/types/properties/shadow";

   export let id: number|string;
   export let title: string;
   export let subtitle: string = '';
   export let icon: string = '';
   export let iconColor: string = 'text-primary-700'

   export let style: { color: MistColors, variant: MistVariant, size: MistSize, border: MistBorderType, shadow: MistShadowType } = {
      color: 'surface',
      variant: 'ghost',
      size: 'md',
      border: 'tile',
      shadow: 'bevel',
   }

   let isHovered: boolean = false;
   let isFocused: boolean = false;

   $: isCurrentActive = $activeAccordeon === id;

   const onClickHandler = () => {
      if (isCurrentActive) {
         $activeAccordeon = null;
      } else {
         $activeAccordeon = id;
      }
   }

   // CLASSES
   const accStyle = boxGen({
    color: style.color,
    variant: style.variant,
    size: style.size,
    type: 'card',
    border: style.border,
    shadow: style.shadow,
    fx: { hover: true, active: true },
    style: {
      block: true
    },
    classes: ''
  })

   const accWrapClass = `
      ${accStyle}
      flex flex-col text-start w-full 
      overflow-hidden`;
</script>

<!-- Accordeon Wrapper -->
<div class="{accWrapClass}">

   <!-- Trigger Wrapper -->
   <div class="">

   </div>

   <!-- Content Wrapper -->
   {#if isCurrentActive}
        <div 
            class="px-4 pb-4 mt-4"
            transition:slide
         >
            <slot/>
        </div>
    {/if}
</div>