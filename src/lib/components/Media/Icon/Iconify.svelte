<script lang='ts'>
   // IMPORT COMPONENTS
   import Icon from '@iconify/svelte';

   export let icon:string;
   
   export let size:string = 'w-6'
   export let color:string = 'text-primary fill-primary'

   let klass:string = ''
   export { klass as class };
</script>

<div class="">
   <Icon {icon} class='{color} {size} h-auto {klass}' />
</div>