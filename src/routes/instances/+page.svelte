<script lang="ts">
	import Instancelist from '$lib/client/components/instancelist.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<div class="root flex-column">
	<h1>Instances</h1>
	{#if data.instances.length > 0}
		<Instancelist instances={data.instances} />
	{:else}
		<p>No instances found.</p>
	{/if}
	{#if data.partnerInstances.length > 0}
		<h1>Check out some of our partners!</h1>
		{#each data.partnerInstances as partnerInstance}
			<h2>{data.partnerGroups.find((i) => i.id === partnerInstance.id)?.name}</h2>
			<Instancelist instances={partnerInstance.instances} />
		{/each}
	{/if}
</div>

<style>
	.root {
		align-items: center;
		justify-content: center;
	}
</style>
