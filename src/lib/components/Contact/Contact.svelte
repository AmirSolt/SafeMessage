<script lang="ts">
    import { page } from '$app/stores'
    let contact = $page.data.contact



</script>



<label class="label">
    <span>Preferred Contact Method</span>
    <select class="select" bind:value={contact.primaryMethod}>
        {#each Object.entries(contact.methods) as [method, value]}
            {#if method === contact.primaryMethod}
                <option value="{method}" selected>{method}</option>
            {:else}
                <option value="{method}">{method}</option>
            {/if}
        {/each}

    </select>
</label>


{#if contact.primaryMethod === contact.methods.email}
    <label class="label">
        <span>Email</span>
        <input class="input" type="email" placeholder="Email" bind:value={contact.email}/>
    </label>
{:else if contact.primaryMethod === contact.methods.phone}
    <label class="label">
        <span>Phone</span>
        <input class="input" type="tel" placeholder="Phone" bind:value={contact.phone}/>
    </label>
{/if}

