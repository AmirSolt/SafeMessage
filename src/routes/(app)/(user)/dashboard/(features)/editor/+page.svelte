<script lang="ts">
	import PublicPage from '$lib/components/PublicPage/PublicPage.svelte';
	import { SlideToggle } from '@skeletonlabs/skeleton';
    import Loading from '$lib/components/Basic/Loading.svelte';

	let editorMode: boolean = false;

	export let data;
	$: ({bio, messageSettings} = data)


  
</script>




{#if bio && messageSettings}
    <SlideToggle name="slide" bind:checked={editorMode} />
    <h2>Editor</h2>
    <br />

    <!-- preview -->
    <a href="/{bio.username}" type="button" class="btn variant-filled" target="_blank" rel="noopener">
        <span>(icon)</span>
        <span>Preview</span>
    </a>

    <br />
    <PublicPage {editorMode} />
    
{:else}

<Loading />

{/if}
