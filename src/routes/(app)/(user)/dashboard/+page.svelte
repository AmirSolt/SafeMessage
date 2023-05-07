<script lang="ts">


    export let data;
	$: ({user, bio} = data)
</script>


{#if bio}
    <h1>Profile</h1>
    <p class="mt-4 capitalize">Welcome, {bio.username}!</p>
{:else}
    <h1>loading...</h1>
{/if}
