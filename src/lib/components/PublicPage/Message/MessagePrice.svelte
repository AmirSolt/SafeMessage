
<script lang="ts">

    import {page} from '$app/stores'
    const currencies = $page.data.currencies
	let config = $page.data.publicPageConfig
    
	import {Wallet} from 'lucide-svelte';

    function handleCurrencyChange(){
        config.message.currencySymbol = currencies[config.message.currency]
    }

</script>





<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
    <div class="input-group-shim"><Wallet /></div>
    <input type="text" placeholder="Amount" bind:value={config.message.price} />
    <select bind:value={config.message.currency} on:change={handleCurrencyChange}>
        {#each Object.entries(currencies) as [code, currency]}
            {#if code === config.message.currency}
                <option value={code} selected>{code}</option>
            {:else}
                <option value={code}>{code}</option>
            {/if}
        {/each}
    </select>
</div>