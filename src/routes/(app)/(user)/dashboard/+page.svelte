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
		return data[0].bio
	} 



	// =============== //////////// ===============


</script>


{#await loadBio() then bio}

<div class="p-4">
	<h1>Profile</h1>
	<p class="mt-4 capitalize">Welcome, {bio?.username}!</p>
</div>

{/await}