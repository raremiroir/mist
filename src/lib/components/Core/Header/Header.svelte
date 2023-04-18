<script lang="ts">
	import mtw from "$src/lib/theme/tailwind/styles";
	import NavItem from "./NavItem.svelte";
	import Navigation from "./Navigation.svelte";
	import type { NavItemType } from "./header";


   export let brand: { name: string, link?: string } = { 
      name: 'Brand', 
      link: '/' 
   };

   export let items: NavItemType[] = [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
   ];


   let headerClass = ``;
   headerClass += mtw.transition.default;
   headerClass += mtw.flex.between;
</script>

<header class="{headerClass} w-full bg-surface-100 py-4">
   <div class="{mtw.widths} mx-auto grid grid-cols-3">
      <div class="">
         <a href="{brand.link ? brand.link : '/'}">{brand.name}</a>
      </div>
      <Navigation>
         {#each items as navItem}
            <NavItem href={navItem.href} name={navItem.name} />
         {/each}
      </Navigation>
      <div>
         <slot name="actions" />
      </div>
   </div>
</header>