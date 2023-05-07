<script lang="ts">
	
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton'


    import {updateMessageDB} from '$lib/data/helper';
    import {page} from '$app/stores';
    $: ({supabase, messages} = $page.data)


    async function updateMessage(message_id, toUpdate){
        updateMessageDB(supabase, message_id, toUpdate)
    }

    function toggleMessageIsRead(message:any){
        message.is_read = true;
        updateMessage(message.id, {is_read:message.is_read});
        messages=messages;
    }



</script>






{#if messages.length === 0}
    <h1>No messages</h1>
{:else}
<Accordion>
    {#each messages as message, i}
	<AccordionItem on:toggle={(e)=>toggleMessageIsRead(message)} >
        <svelte:fragment slot="lead">
            
        </svelte:fragment>
        <svelte:fragment slot="summary">
            <div class="{message.is_read? 'alert variant-ringed' : 'alert variant-filled'}">
                <span class="{message.is_read? 'badge bg-initial' : 'badge variant-filled-primary'}">
                    {message.is_read? 'Read' : 'New'}
                </span>

                <span>
                    {message.sender}
                </span>
                <span>
                    {message.currency}{message.price}
                </span>
                <span>
                    {message.subject}
                </span>
                <span>
                    {message.created_at}
                </span>
            </div>
        </svelte:fragment>
        <svelte:fragment slot="content">
            <hr>
            <div class="p-4">
                <p>{message.body}</p>
            </div>
            <hr>
        </svelte:fragment>
	</AccordionItem>
    {/each}

</Accordion>

{/if}
