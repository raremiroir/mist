<script lang="ts">
   // import '$lib/theme/mist-theme.postcss';
   import '$src/app.postcss'
   import '$src/lib/theme/generated/mist-theme.css'

   import mistCss from '$src/lib/theme/generator/theme';
   import insertCss from "$lib/utils/postcssParse";
	import { Aside } from '$lib/components';
   insertCss({css: mistCss})

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