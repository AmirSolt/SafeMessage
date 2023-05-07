<script lang="ts">
	import PublicPage from '$lib/components/PublicPage/PublicPage.svelte';
	import { SlideToggle } from '@skeletonlabs/skeleton';

	let editorMode: boolean = false;

	export let data;
	$: ({user, bio, messageSettings} = data)


  
</script>



{#if bio && messageSettings}
    <SlideToggle name="slide" bind:checked={editorMode} />
    <h2>Editor</h2>
    <br />
    <PublicPage bind:bio bind:messageSettings {editorMode} />
{:else}
    <h1>loading...</h1>
{/if}
