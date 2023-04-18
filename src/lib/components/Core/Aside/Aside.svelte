<script lang="ts">
   
   export let width: string = 'w-1/4';

   let klass:string = '';
   export { klass as class };

</script>

<aside class="{width} {klass}">
   <slot/>
</aside>