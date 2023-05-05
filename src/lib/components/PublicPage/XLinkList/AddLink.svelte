<script lang="ts">

    import {Plus} from 'lucide-svelte'
	import { LinkItem } from '../config'
	import type { PublicPageConfig } from '../config'
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton'
    import SocialIcons from '@rodneylab/svelte-social-icons';


    import {page} from '$app/stores'
    const socialIcons = $page.data.socialIcons

    
	export let config: PublicPageConfig
	

	let newUrl: string = ''
	let newLabel: string = ''
	let newIconDomainName: string = Object.keys(socialIcons)[0]

    function extractDomainName(url: string) {
        // no subdomain, no extension
        const domainName = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im)
        return domainName ? domainName[1] : null
    }

 
	function urlChangeHandler() {
        const newDomainName = extractDomainName(newUrl);
        if(newDomainName) 
            newIconDomainName = newDomainName in socialIcons ? newDomainName : Object.keys(socialIcons)[0]
	}


    function resetForm() {
        newUrl = ""
        newLabel = ""
        newIconDomainName = Object.keys(socialIcons)[0]
    }

	function submitLink() {
		const newLinkItem = new LinkItem({
			link: newUrl,
			icon: socialIcons[newIconDomainName],
			label: newLabel,
		})

		config.linkItems.unshift(newLinkItem);
        config = config; // force update
        resetForm();
	}
</script>



<Accordion >
	<AccordionItem >
		<svelte:fragment slot="lead" >
            <span class="btn-icon  variant-filled"><Plus /></span>
        </svelte:fragment>
		<svelte:fragment slot="summary">
            <span >Add Link</span> 
        </svelte:fragment>
		<svelte:fragment slot="content">
            <form on:submit={submitLink}  >
                <label class="label">
                    <span>Url</span>
                    <input
                        bind:value={newUrl}
                        class="input"
                        type="text"
                        placeholder="https://..."
                        on:input={urlChangeHandler}
                    />
                </label>
    
                <label class="label">
                    <span>Icon</span>
                    <select bind:value={newIconDomainName} class="select">
                        {#each Object.entries(socialIcons) as [domainName, icon]}
                            <option value={domainName}> 
                                <SocialIcons network="{icon}" alt={domainName}/>
                            </option>
                        {/each}
                    </select>
                </label>
    
                <label class="label">
                    <span>Label</span>
                    <input
                        bind:value={newLabel}
                        class="input"
                        type="text"
                        placeholder="Describe the link"
                    />
                </label>
    
                <div class="text-end">
                    <button type="submit" class="btn variant-filled" 
                        >Submit</button
                    >
                </div>
            </form>
		</svelte:fragment>
	</AccordionItem>
</Accordion>

<hr>
