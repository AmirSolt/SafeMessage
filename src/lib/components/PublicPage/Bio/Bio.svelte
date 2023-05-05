<script lang="ts">

    import { Avatar, FileButton } from '@skeletonlabs/skeleton';


    import {page} from '$app/stores'
	let config = $page.data.publicPageConfig


    export let editorMode = false;

    let initials = config.bio.username[0] + config.bio.username[1];

    let files: FileList;
    function onUploadHandler(e: Event): void {
        console.log('file data:', e);
        console.log('file data:', files);
    }


</script>



<section>

    <!-- Bio pfp -->
    <Avatar src='{config.bio.pfp}' initials='{initials}' width="w-32" rounded="rounded-full" />
    {#if editorMode}
        <FileButton name="files" bind:files on:change={onUploadHandler}>
        +
        </FileButton>
    {/if}
    
    
    <!-- Bio username -->
    <h1>
        @{config.bio.username}
    </h1>
    
    
    <!-- Bio body -->
    {#if editorMode}
        <label class="label">
            <span>Bio:</span>
            <textarea bind:value={config.bio.body} class="textarea " rows="4" placeholder="Tell us about yourself."  />
        </label>
    {:else}
        <p>
            {config.bio.body}
        </p>
    {/if}

</section>    

