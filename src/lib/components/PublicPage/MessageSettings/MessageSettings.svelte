<script lang="ts">

	import {page} from '$app/stores'
    const currencies = $page.data.currencies

	import ContactPrice from './MessageSettingsPrice.svelte'

	export let messageSettings:any ;
    export let editorMode = false;
	export let updateMessageSettings:any;


</script>


<section>



	<!-- Message body and sender -->
	{#if editorMode}
		<input class="input" type="text" placeholder="Title" bind:value={messageSettings.title} on:blur={()=>updateMessageSettings({title: messageSettings.title})} />
    {:else}
		<h2>{messageSettings.title}</h2>
		<label class="label">
			<!-- <span>Sender:</span> -->
			<input class="input" type="text" placeholder="Email" />
			
			<input class="input" type="text" placeholder="Subject" bind:value={messageSettings.subject} />
			<!-- <span>Body:</span> -->
			<textarea class="textarea " rows="4" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
		</label>
    {/if}



	<!-- Message Submit -->
	{#if editorMode}

		<ContactPrice messageSettings={messageSettings} bind:updateMessageSettings />
		
    {:else}
		<button type="button" class="btn variant-filled">
			<span>Submit {currencies[messageSettings.currency]}{messageSettings.price} ({messageSettings.currency}) </span>
		</button>
    {/if}



</section>
