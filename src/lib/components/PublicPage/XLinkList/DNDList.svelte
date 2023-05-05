<script lang="ts">
	import { flip } from 'svelte/animate';
	import { dndzone } from 'svelte-dnd-action';
    import LinkItem from './LinkItem.svelte'

    export let editorMode:boolean;
    export let config;

    $: items = config.linkItems.map((item, index) => ({linkItem:item, id: index}));


    const flipDurationMs = 0;
	function handleDndConsider(e) {
		items = e.detail.items;
	}
	function handleDndFinalize(e) {
		items = e.detail.items;
        config.linkItems = items.map(item => item.linkItem);

	}
</script>

<section >
    <ul class="list-nav " use:dndzone={{items, flipDurationMs}} on:consider={handleDndConsider} on:finalize={handleDndFinalize}>
	{#each items as item(item.id)}
    <li  animate:flip="{{duration: flipDurationMs}}">

            <LinkItem bind:config linkItem={item.linkItem} editorMode={editorMode} />
    </li>
	{/each}
    </ul>
</section>