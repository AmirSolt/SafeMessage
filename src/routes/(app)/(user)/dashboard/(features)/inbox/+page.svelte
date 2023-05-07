
<script lang="ts">

    
    import Contact from '$lib/components/Contact/Contact.svelte'
    import InboxTable from '$lib/components/Inbox/InboxTable.svelte'
    import Loading from '$lib/components/Basic/Loading.svelte';
    export let data;
	$: ({contact, messages} = data)


</script>

{#if contact && messages}
    <h2>Inbox</h2>
    <br />
    <Contact />

    <InboxTable   />

{:else}
    <Loading />
{/if}

