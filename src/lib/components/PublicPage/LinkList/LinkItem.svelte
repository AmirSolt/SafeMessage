<script lang="ts">


    import SocialIcons from '@rodneylab/svelte-social-icons';
    import {GripVertical, X, Edit} from 'lucide-svelte'


    export let linkItem;
    export let config;
    export let editorMode:boolean;


    function removeLinkItem() {

        let index = config.linkItems.indexOf(linkItem);
        config.linkItems.splice(index, 1);
        config = config
    }


</script>



{#if editorMode}
    <a  href="#">
        <i><GripVertical /></i>
        <SocialIcons network="{linkItem.icon}" alt="Social Icon"/>
        <span>{linkItem.label}</span>
        <button type="button" class="btn-icon" on:click={removeLinkItem}><X /></button>
    </a>
{:else}

    <a class="" href={linkItem.link} target="_blank" rel="noopener">
        <SocialIcons network="{linkItem.icon}" alt="Social Icon"/>
        <span>{linkItem.label}</span>
    </a>
{/if}