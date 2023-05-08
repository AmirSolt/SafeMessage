<script lang='ts'>
	import Header from '$lib/components/Basic/Header.svelte'
	import Footer from '$lib/components/Basic/Footer.svelte';
	import { AppShell } from '@skeletonlabs/skeleton';

	import '@skeletonlabs/skeleton/themes/theme-crimson.css'
	import '@skeletonlabs/skeleton/styles/all.css'
	import '../../app.postcss'





	// =============== Supabase Auth ===============
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	export let data;
	$: ({ supabase, session } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});
		return () => data.subscription.unsubscribe();
	});
	// =============== //////////// ===============




</script>




<svelte:head>
	<title>Caspear</title>
	<link rel="icon" href="https://fav.farm/🔥" />
</svelte:head>


<AppShell>

	<svelte:fragment slot="header">
		<header>
			<Header />
		</header>
	</svelte:fragment>

	<slot />

	<svelte:fragment slot="footer">
		<footer>
			<Footer />
		</footer>
		
	</svelte:fragment>
</AppShell>