<script lang="ts">


	export let data;
	$: ({ supabase, session} = data);
    $: user = session?.user
    async function fetchUserFeature(tableName:string, user_id:string|undefined){
        const { data, error } = await supabase
            .from(tableName)
            .select()
            .eq('id', user_id)
            .single()
        if (error) throw error
        return data
    } 
    

</script>


{#await fetchUserFeature('bio', user?.id)}
	<h2>...loading</h2>
{:then bio}
	<h1>Profile</h1>
	<p class="mt-4 capitalize">Welcome, {bio.username}!</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}