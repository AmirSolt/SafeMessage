<script lang="ts">
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton'
	import { Flame, Home } from 'lucide-svelte'
	
	import { page } from '$app/stores'
	$: user = $page.data.session?.user
</script>





<AppBar>
	<svelte:fragment slot="lead">
		<a class="flex gap-1" href="/">
			<Flame /> Caspear
		</a>
	</svelte:fragment>

	<svelte:fragment slot="trail">
		<a href="/pricing">Pricing</a>
		{#if user}
			<a href="/dashboard"><Home /></a>
		{:else}
			<a href="/auth">Sign in</a>
		{/if}

		<LightSwitch />
	</svelte:fragment>
</AppBar>