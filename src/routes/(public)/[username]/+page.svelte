<script lang="ts">
    import PublicPage from '$lib/components/PublicPage/PublicPage.svelte';
    import Loading from '$lib/components/Basic/Loading.svelte';

    export let data;
    $: ({bio, messageSettings} = data)

</script>



{#if bio && messageSettings}

    <PublicPage editorMode={false} />
    
{:else}

<Loading />

{/if}