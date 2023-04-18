<script lang="ts">
	import { mFlex } from "$src/lib/theme/tailwind/styles";


</script>

<nav>
   <ul class="{mFlex.center} gap-2">
      <slot/>
   </ul>
</nav>