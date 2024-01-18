<script lang="ts">
	import type { ModeratedInstance } from '$lib/vrchat/instance';
	export let instances: ModeratedInstance[];
</script>

<div class="instances">
	{#each instances as instance}
		<button
			on:click={() =>
				window.open(
					`https://vrchat.com/home/launch?worldId=${instance.location.replace(':', '&instanceId=')}`
				)}
			class="instance flex-column"
		>
			<img class="worldBackground" src={instance.world.imageUrl} alt={instance.world.name} />
			<div class="flex-column">
				<div class="flex-row">
					<div class="worldName">{instance.world.name}</div>
					<div class="worldUsers">{instance.memberCount} people</div>
				</div>

				{#if instance.isModerated}
					<div class="flex-row reverse">
						<div class="worldUsers">
							{instance.moderatorsOnline} mod{instance.moderatorsOnline > 1 ? 's' : ''}
						</div>
					</div>
				{/if}
			</div>
		</button>
	{/each}
</div>

<style>
	.instances {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.instance {
		margin: 1rem;
		width: 20rem;
		height: 20rem;
		position: relative;
		border-radius: 10%;
		overflow: hidden;
		background-color: var(--color-secondary);
		border: unset;
		padding: unset;
	}

	.worldBackground {
		width: 100%;
		height: 70%;
		object-fit: cover;
	}

	.worldName {
		padding: 0.5rem;
		font-size: 1.5rem;
		font-weight: bold;
		color: white;
		text-shadow: 0 0 1rem black;
	}

	.worldUsers {
		padding: 0.5rem;
		font-size: 1.5rem;
		font-weight: bold;
		color: white;
		text-shadow: 0 0 1rem black;
	}
</style>
