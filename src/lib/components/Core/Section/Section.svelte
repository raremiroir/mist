<script lang='ts'>
	import { mtw } from "$mist";
	import { Title } from "$lib/components";
	import type { SectionTitleBorder } from "./section";

   // IMPORT TYPES

   // IMPORT COMPONENTS

   // EXPORT PROPS
   export let title:string = ''
   export let subtitle:string = ''
   export let fullWidth:boolean = false

   export let border: SectionTitleBorder = 'left'

   let klass:string = ''
   export { klass as class };

   // CLASSES
   // inner wrapper
   const widthClass = fullWidth ? 'w-full' : `${mtw.widths} mx-auto`
   // title
   const titleBorderClass = 
      border === 'none' ? 'border-none'
      : border === 'left' ? 'border-l-8 pl-4 border-primary-600/40' 
      : border === 'bottom' ? 'border-b-8 border-primary-600/40'
      : border === 'box' ? 'border-8 border-primary-600/40'
      : 'border-none'
</script>

<section class='bg-surface-100 {klass} pt-8 pb-12'>
   <div class="{widthClass} {mtw.flex.col} gap-4">
      {#if title}
         <div class="{mtw.flex.col} gap-0 {titleBorderClass}">
            <Title h2 size="lg">
               {title}
            </Title>
            {#if subtitle}
               <Title h5 fake size="xs" weight="font-semibold" class="italic opacity-80 pb-1">
                  {subtitle}
               </Title>
            {/if}
         </div>
      {/if}
      <slot/>
   </div>
</section>