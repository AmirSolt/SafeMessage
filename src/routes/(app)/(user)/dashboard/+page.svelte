<script lang="ts">
	export let data;
    $: user = data.session?.user

	
	// =============== Supabase ===============
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	$: ({ supabase, session } = data);


	async function loadBio(){
		const { data, error } = await supabase
			.from('bio')
			.select()
			.eq('id', user?.id)
		
		console.log("///////")
		console.log(data, error)
		if (error) throw error
		return data[0]
	} 



	// =============== //////////// ===============


</script>


{#await loadBio()}
	<h2>...loading</h2>
{:then bio}
	<h1>Profile</h1>
	<p class="mt-4 capitalize">Welcome, {bio.username}!</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}