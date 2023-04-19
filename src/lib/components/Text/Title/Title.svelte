<script lang="ts">
	import type { Mist } from "$mist/types";
	import title from "./title";
	import type { TitleType } from "./title";

   // Can be any heading
   export let h1: boolean = false;
   export let h2: boolean = false;
   export let h3: boolean = false;
   export let h4: boolean = false;
   export let h5: boolean = false;
   export let h6: boolean = false;
   // Make it a span
   export let fake: boolean = false;
   // Pick a size (sm, md, lg, xl, 2xl)
   export let size:Mist.Props.Size.Type = '2xl'
   // Override color
   export let color: string = '';
   // Override weight
   export let weight: string = '';

   let type: TitleType = 
        h1? 'h1' : h2? 'h2' : h3? 'h3' 
      : h4? 'h4' : h5? 'h5' : h6? 'h6' 
      : 'h1';
   let compType = fake? 'span' : type;


   let klass:string = '';
   export { klass as class };

   let sizeClass: string = "text-4xl";
   let weightClass: string = "font-bold";

   $: sizeClass = title.class.size({type, size});
   $: colorClass = color ? color : title.class.color(type);
   $: weightClass = weight ? weight : title.class.weight(type);
</script>

<svelte:element 
   this={compType}
   class="p-0 leading-[1.1em] font-title {sizeClass} {colorClass} {weightClass} {klass}">
   <slot>Title</slot>
</svelte:element>