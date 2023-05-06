<script lang="ts">
	import PublicPage from '$lib/components/PublicPage/PublicPage.svelte';
	import { SlideToggle } from '@skeletonlabs/skeleton';

	let editorMode: boolean = false;

	export let data;
	$:(
        {
            user,
            bio,
            messageSettings
        } = data
    )

    import { onMount } from 'svelte';
    onMount(() => {
        console.log('user:', user);
        console.log('bio:', bio);
        console.log('messageSettings:', messageSettings);
    })
	
</script>


<SlideToggle name="slide" bind:checked={editorMode} />
<h2>Editor</h2>

<br />

<PublicPage bio={bio} messageSettings={messageSettings} {editorMode} />
