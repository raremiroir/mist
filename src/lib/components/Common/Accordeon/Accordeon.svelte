<script lang='ts'>
   import { activeAccordeon } from "./accordeon";

   // Active accordeon store
   // $: {
   //    console.log("=======================");
   //    console.log("Accordeon:");
   //    console.log();
   //    console.log("active: ", $activeAccordeon);
   //    console.log("=======================");
   // }

   let klass:string = ''
   export { klass as class };
</script>

<div class=' {klass}'>
   <slot/>
</div>