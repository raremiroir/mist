<script lang="ts">
	import { AppLayout } from '$lib/components';
	import { Header } from '$lib/components';
</script>

<AppLayout>
	<Header slot="header" />
	<slot />
</AppLayout>
