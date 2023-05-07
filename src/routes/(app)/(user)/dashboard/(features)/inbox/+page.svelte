
<script lang="ts">

    
    import Contact from '$lib/components/Contact/Contact.svelte'
    import InboxTable from '$lib/components/Inbox/InboxTable.svelte'
    import Loading from '$lib/components/basic/Loading.svelte';
    export let data;
	$: ({user, contact, messages, supabase} = data)



    async function updateUserFeature(tableName: string, value:any) {
        const { data, error } = await supabase.from(tableName).update(value).eq('id', user.id);
        if (error) throw error;
        return data;
    }
    async function updateMessageDB(message_id: number, value:any) {
        const { data, error } = await supabase.from('message').update(value).eq('id', message_id);
        if (error) throw error;
        return data;
    }


    async function updateContact(toUpdate){
        updateUserFeature('contact', toUpdate)
    }
    async function updateMessage(message_id, toUpdate){
        updateMessageDB(message_id, toUpdate)
    }

</script>

{#if contact && messages}
    <h2>Inbox</h2>
    <br />
    <Contact bind:contact {updateContact} />

    <InboxTable  bind:messages {updateMessage}  />

{:else}
    <Loading />
{/if}

