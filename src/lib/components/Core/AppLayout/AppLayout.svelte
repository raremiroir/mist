<script lang="ts">
   // import '$lib/theme/mist-theme.postcss';
   import '$src/app.postcss'
   import '$mist/generated/mist-theme.css'

	import { Aside } from '$lib/components';

   export let aside: boolean = false;
</script>

<div>
   <slot name="header"/>

   <div class="flex flex-row w-full">
      {#if aside}
         <Aside>
            Bloop Aside
         </Aside>
      {/if}
      
      <main class="w-full">
         <slot/>
      </main>
   </div>

   <slot name="footer"/>
</div>