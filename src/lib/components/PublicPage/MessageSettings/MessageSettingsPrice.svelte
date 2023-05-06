
<script lang="ts">

    import {page} from '$app/stores'
    const currencies = $page.data.currencies
	import {Wallet} from 'lucide-svelte';
    export let messageSettings:any;

    function handleCurrencyChange(){
        messageSettings.currencySymbol = currencies[messageSettings.currency]
    }

</script>





<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
    <div class="input-group-shim"><Wallet /></div>
    <input type="text" placeholder="Amount" bind:value={messageSettings.price} />
    <select bind:value={messageSettings.currency} on:change={handleCurrencyChange}>
        {#each Object.entries(currencies) as [code, currency]}
            {#if code === messageSettings.currency}
                <option value={code} selected>{code}</option>
            {:else}
                <option value={code}>{code}</option>
            {/if}
        {/each}
    </select>
</div>