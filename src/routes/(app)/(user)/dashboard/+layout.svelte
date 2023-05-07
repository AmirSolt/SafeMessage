<script lang="ts">
	import { AppRail, AppRailTile } from '@skeletonlabs/skeleton'
	import { AppShell } from '@skeletonlabs/skeleton'
	import type { Writable } from 'svelte/store'
	import { writable } from 'svelte/store'

	const storeValue: Writable<number> = writable(0)


</script>




<AppShell>
	<svelte:fragment slot="sidebarLeft">
		<AppRail selected={storeValue}>
			<svelte:fragment slot="lead">
				<AppRailTile
					tag="a"
					href="/dashboard"
					label="Overview"
					value={0}
				>
					(icon)
				</AppRailTile>
			</svelte:fragment>
			<svelte:fragment slot="default">
				<AppRailTile
					tag="a"
					href='/dashboard/editor'
					label="Page Editor"
					value={1}>
					(icon)
					</AppRailTile
				>
				<AppRailTile
					tag="a"
					href='/dashboard/inbox'
					label="Inbox"
					value={2}>
					(icon)
					</AppRailTile
				>
				<AppRailTile
					tag="a"
					href='/dashboard/styling'
					label="Styling"
					value={3}>
					(icon)
					</AppRailTile
				>
				<AppRailTile
					tag="a"
					href='/dashboard/analytics'
					label="Analytics"
					value={4}
				>
					(icon)
				</AppRailTile>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<AppRailTile
					tag="a"
					href='/dashboard/account'
					label="Account"
					value={5}
				>
					(icon)
				</AppRailTile>
			</svelte:fragment>
		</AppRail>
	</svelte:fragment>

	<slot />
</AppShell>