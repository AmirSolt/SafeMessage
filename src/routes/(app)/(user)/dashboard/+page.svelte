<script lang="ts">
	export let data;
    $: user = data.session?.user
</script>

<div class="p-4">
	<h1>Profile</h1>
	<p class="mt-4 capitalize">Welcome, {user?.email}!</p>
</div>