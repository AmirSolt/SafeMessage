<script lang="ts">
	
    export let messages:any[];
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton'
</script>






{#if messages.length === 0}
    <h1>No messages</h1>
{:else}
<Accordion>
    {#each messages as message, i}
	<AccordionItem >
        <svelte:fragment slot="lead">
            (icon)
        </svelte:fragment>
        <svelte:fragment slot="summary">
            <div class="{message.is_read? 'opacity-30 line-through' : ''}">
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
            <p>{message.body}</p>
        </svelte:fragment>
	</AccordionItem>
    {/each}

</Accordion>

{/if}
