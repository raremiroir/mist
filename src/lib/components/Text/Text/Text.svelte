<script lang="ts">
   // Can be p or span
   export let type: 'p' | 'span' = "p";

   let klass:string = '';
   export { klass as class };
</script>

<svelte:element 
   this={type}
   class="font-body {klass}">
   <slot/>
</svelte:element>