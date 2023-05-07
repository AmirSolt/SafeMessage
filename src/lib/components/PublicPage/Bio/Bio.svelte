<script lang="ts">

    import { Avatar, FileButton } from '@skeletonlabs/skeleton';


    export let bio:any;
    export let editorMode = false;
    export let updateBio:any;

    // let initials:string = bio.username[0] + bio.username[1];
    let initials:string = "as";

    let files: FileList;
    function onUploadHandler(e: Event): void {
        console.log('file data:', e);
        console.log('file data:', files);
        updateBio({pfp: bio.pfp})
    }




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

