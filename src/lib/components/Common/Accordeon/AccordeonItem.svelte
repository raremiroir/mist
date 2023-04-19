<script lang="ts">
   import { slide } from "svelte/transition";

   import { activeAccordeon } from "./accordeon";
   
   import type { Mist } from "$mist/types";
   import { gen } from "$mist";

   export let id: number|string;
   export let title: string;
   export let subtitle: string = '';
   export let icon: string = '';
   export let iconColor: string = 'text-primary-700'

   export let style: { color: Mist.Props.Color.All, variant: Mist.Props.Variant.Type, size: Mist.Props.Size.Type, border: Mist.Props.Border.Type, shadow: Mist.Props.Shadow.Type } = {
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
   const boxProps:Mist.BoxGen.Props = {
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
   }
   const accStyle = gen.box(boxProps);

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