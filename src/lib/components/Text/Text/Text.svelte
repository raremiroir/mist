<script lang="ts">
   // Set span or quote to true to change the element type
   // and to disable p
   export let span:boolean = false;
   export let quote:boolean = false;
   export let author:string = '';   // only for quote
   
   let compType = 
      span ? 'span'
      : quote ? 'blockquote'
      : 'p';

   let klass:string = '';
   export { klass as class };

   let compClass = 'font-body';
   compClass += quote ? ` 
      border-l-4 border-primary-600/40 
      ml-4 my-2 pl-4 text-xl
      text-primary-800
   ` : ''

   const authorClass = "pl-4 mt-2 text-lg font-semibold italic text-primary-700/80";
</script>

<svelte:element 
   this={compType}
   class="{compClass} {klass}">
   
   <slot/>

   {#if quote}
      <div class={authorClass}>
         ~ {author}
      </div>
   {/if}
</svelte:element>