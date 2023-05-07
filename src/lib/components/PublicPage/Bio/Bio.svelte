<script lang="ts">

    import { Avatar, FileButton } from '@skeletonlabs/skeleton';
    import {updateUserFeature} from '$lib/data/helper';

    import {page} from '$app/stores';
	$: ({user, supabase, bio} = $page.data)

    export let editorMode = false;
    let initials:string="AZ";

    

    async function updateBio(toUpdate){
        updateUserFeature(supabase, user, 'bio', toUpdate)
    }

    
    // ==============================
    let files: FileList;
    function onUploadHandler(e: Event): void {
        console.log('file data:', e);
        console.log('file data:', files);
        updateBio({pfp: bio.pfp})
    }
    // ==============================
    import {onMount} from 'svelte';
    onMount(() => {
        initials = bio.username[0] + bio.username[1];
    })

</script>



<section>

    <!-- Bio pfp -->
    <Avatar src='{bio.pfp}' initials='{initials}' width="w-32" rounded="rounded-full" />
    {#if editorMode}
        <FileButton name="files" bind:files on:change={onUploadHandler}>
        +
        </FileButton>
    {/if}
    
    
    <!-- Bio username -->
    <h1>
        @{bio.username}
    </h1>

    
    
    
    <!-- Bio body -->
    {#if editorMode}
        <label class="label">
            <span>Bio:</span>
            <textarea bind:value={bio.desc} class="textarea " rows="4" placeholder="Tell us about yourself."  on:blur={()=> updateBio( ()=>{updateBio({desc: bio.desc})} )} />
        </label>
    {:else}
        <p>
            {bio.desc}
        </p>
    {/if}

</section>    

