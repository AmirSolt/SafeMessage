<script lang="ts">
	import PublicPage from '$lib/components/PublicPage/PublicPage.svelte';
	import { SlideToggle } from '@skeletonlabs/skeleton';
    import Loading from '$lib/components/basic/Loading.svelte';

	let editorMode: boolean = false;

	export let data;
	$: ({user, bio, messageSettings, supabase} = data)


    async function updateUserFeature(tableName: string, value:any) {
        const { data, error } = await supabase.from(tableName).update(value).eq('id', user.id);
        if (error) throw error;
        return data;
    }

    async function updateBio(toUpdate){
        updateUserFeature('bio', toUpdate)
    }
    async function updateMessageSettings(toUpdate){
        updateUserFeature('message_settings', toUpdate)
    }

  
</script>




{#if bio && messageSettings}
    <SlideToggle name="slide" bind:checked={editorMode} />
    <h2>Editor</h2>
    <br />
    <PublicPage bind:bio bind:messageSettings {editorMode} {updateBio} {updateMessageSettings}  />
    
{:else}

<Loading />

{/if}
