<script lang="ts">

	import {page} from '$app/stores'
    const currencies = $page.data.currencies
	let config = $page.data.publicPageConfig


	import ContactPrice from './MessagePrice.svelte'

    export let editorMode = false;

</script>


<section>



	<!-- Message body and sender -->
	{#if editorMode}
		<input class="input" type="text" placeholder="Title" bind:value={config.message.title} />
    {:else}
		<h2>{config.message.title}</h2>
		<label class="label">
			<!-- <span>Sender:</span> -->
			<input class="input" type="text" placeholder="Email" />
			
			<input class="input" type="text" placeholder="Subject" bind:value={config.message.subject} />
			<!-- <span>Body:</span> -->
			<textarea class="textarea " rows="4" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
		</label>
    {/if}





	<!-- Message Submit -->
	{#if editorMode}

		<ContactPrice  />
		
    {:else}
		<button type="button" class="btn variant-filled">
			<span>Submit {config.message.currencySymbol}{config.message.price} ({config.message.currency}) </span>
		</button>
    {/if}



</section>
