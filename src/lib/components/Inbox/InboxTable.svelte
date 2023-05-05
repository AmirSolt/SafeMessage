<script lang="ts">
	import { page } from '$app/stores'
	let inbox = $page.data.inbox

	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton'
</script>






<!-- Messages -->
<Accordion>
    {#each inbox.messages as message, i}
	<AccordionItem >
        <svelte:fragment slot="lead">
            (icon)
        </svelte:fragment>
        <svelte:fragment slot="summary">
            <div >
                <span>
                    {message.sender}
                </span>
                <span>
                    {message.subject}
                </span>
                <span>
                    {message.date}
                </span>
            </div>
        </svelte:fragment>
        <svelte:fragment slot="content">
            <p>{message.body}</p>
        </svelte:fragment>
	</AccordionItem>
    {/each}

</Accordion>
