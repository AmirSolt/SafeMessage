<script lang="ts">


	export let form;

</script>





<button type="button" class="btn variant-filled">
	<span>(icon)</span>
	<span>Sign in with Google</span>
</button>

<button type="button" class="btn variant-filled">
	<span>(icon)</span>
	<span>Sign in with Facebook</span>
</button>





{#if !form?.sent}
<div>
	<h1>Login</h1>
	<h3>We will send a code to your email</h3>
	<form action="?/otp_init" method="POST" class="auth-form">
		<label for=""> Email </label>
		<input type="email" name="email">
		<button type="submit" class="btn variant-filled">
			<span>(icon)</span>
			<span>Send Code</span>
		</button>
	</form>
</div>
{/if}

{#if form?.sent}
<div>
	<h1>Verify Token</h1>
	<h3>Check your email for the code</h3>
	<form action="?/otp_verif" method="POST" class="auth-form" >
		
		<input type="hidden" name="email" value={form?.email}>

		<label for=""> Token </label>
		<input type="text" name="token" />
		
		<button type="submit" class="btn variant-filled">
			<span>(icon)</span>
			<span>Verify</span>
		</button>
	</form>
</div>

{/if}
