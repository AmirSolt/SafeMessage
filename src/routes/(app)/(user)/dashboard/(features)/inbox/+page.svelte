
<script lang="ts">

    
    import Contact from '$lib/components/Contact/Contact.svelte'
    import InboxTable from '$lib/components/Inbox/InboxTable.svelte'

    export let data;
	$: ({user, contact, messages} = data)

</script>

{#if contact && messages}
    <h2>Inbox</h2>
    <br />
    <Contact bind:contact />

    <InboxTable  bind:messages  />

{:else}
    <h1>loading...</h1>
{/if}

