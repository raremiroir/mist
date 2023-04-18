<script lang="ts">
   // import '$lib/theme/mist-theme.postcss';
   import '$src/app.postcss'
   import '$src/lib/theme/generated/mist-theme.css'

   import mistCss from '$src/lib/theme/generator/theme';
   import insertCss from "$lib/utils/postcssParse";
   insertCss({css: mistCss})
</script>

<div>
   <slot/>
</div>