<script lang="ts">
    import PublicPage from '$lib/components/PublicPage/PublicPage.svelte';
    import { SlideToggle } from '@skeletonlabs/skeleton';

    let editorMode:boolean = false;
</script>


<SlideToggle name="slide" bind:checked={editorMode} /> Editor

<PublicPage editorMode={editorMode} />
