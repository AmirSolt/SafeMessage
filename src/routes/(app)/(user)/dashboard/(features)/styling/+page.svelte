<script lang="ts">
	import PublicPage from '$lib/components/PublicPage/PublicPage.svelte';
    import Loading from '$lib/components/Basic/Loading.svelte';
    import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
    import {updateUserFeature} from '$lib/data/helper';


    

    export let data;
	$: ({user, supabase, styling, bio, messageSettings} = data)  

    async function updateStyling(toUpdate){
        updateUserFeature(supabase, user, 'styling', toUpdate)
    }


    async function callStylingUpdate(){
        updateStyling({template: styling.template})
    }

</script>


{#if styling && bio && messageSettings}
    <RadioGroup active="variant-filled-primary" hover="hover:variant-soft-primary" on>
        
        <RadioItem on:change={callStylingUpdate} bind:group={styling.template} name="template" value='Default'>Default</RadioItem>
        <RadioItem on:change={callStylingUpdate} bind:group={styling.template} name="template" value='Dark'>Dark</RadioItem>
        <RadioItem on:change={callStylingUpdate} bind:group={styling.template} name="template" value='Light'>Light</RadioItem>
        <RadioItem on:change={callStylingUpdate} bind:group={styling.template} name="template" value='Minimal'>Minimal</RadioItem>
        <RadioItem on:change={callStylingUpdate} bind:group={styling.template} name="template" value='Beach'>Beach</RadioItem>
        <RadioItem on:change={callStylingUpdate} bind:group={styling.template} name="template" value='Forest'>Forest</RadioItem>
        <RadioItem on:change={callStylingUpdate} bind:group={styling.template} name="template" value='Space'>Space</RadioItem>

    </RadioGroup>
    <br />
    
    <p>More customization coming soon...</p>
        
    <br />
    {#key styling.template}
        <PublicPage editorMode={false}  />
    {/key}
{:else}
    <Loading />
{/if}