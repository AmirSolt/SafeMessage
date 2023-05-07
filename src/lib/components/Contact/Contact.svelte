<script lang="ts">
    
    import {updateUserFeature} from '$lib/data/helper';
    import {page} from '$app/stores';
    $: ({user, supabase, contactMethods, contact} = $page.data)


    async function updateContact(toUpdate){
        updateUserFeature(supabase, user, 'contact', toUpdate)
    }

</script>

<p>
    Please make sure you input the correct information.
</p>

<label class="label">
    <span>Preferred Contact Method</span>
    <select class="select" bind:value={contact.primary_method} on:change={()=>updateContact({primary_method:contact.primary_method})}>
        {#each Object.entries(contactMethods) as [method, value]}
            {#if method === contact.primary_method}
                <option value="{value}" selected>{value}</option>
            {:else}
                <option value="{value}">{value}</option>
            {/if}
        {/each}

    </select>
</label>



{#if contact.primary_method === contactMethods.email}
    <label class="label">
        <span>Email</span>
        <input class="input" type="email" placeholder="Email" bind:value={contact.email} on:blur={()=>updateContact({email:contact.email})}/>
    </label>
{:else if contact.primary_method === contactMethods.phone}
    <label class="label">
        <span>Phone</span>
        <input class="input" type="tel" placeholder="Phone" bind:value={contact.phone} on:blur={()=>updateContact({phone:contact.phone})}/>
    </label>
{/if}

<p>
    This does not affect your login email or phone number.    
</p>




