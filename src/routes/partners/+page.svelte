<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	// TODO: oh my god that fucking grid
</script>

<div class="root flex-column">
	<h1>Partners</h1>
	<div class="partners">
		{#each data.partnerGroups as partnerGroup}
			<button
				class="group flex-column"
				on:click={() => window.open(`https://vrchat.com/home/group/${partnerGroup.id}`)}
			>
				<div class="flex-column images">
					<img src={partnerGroup.bannerUrl} class="banner" alt={partnerGroup.name} />
					<img src={partnerGroup.iconUrl} class="icon" alt={partnerGroup.name} />
				</div>
				<div class="flex-column">
					<div class="name">{partnerGroup.name}</div>
					<i class="ownerName">{partnerGroup.owner.displayName}</i>
					<div class="description">{partnerGroup.description}</div>
				</div>
			</button>
		{/each}
	</div>
</div>

<style lang="scss">
	.root {
		align-items: center;
		justify-content: center;
	}

	.partners {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-auto-rows: minmax(2rem, auto);
		grid-gap: 1rem;
	}

	.group {
		margin: 1rem;
		width: 20rem;
		height: 20rem;
		position: relative;
		border-radius: 10%;
		overflow: hidden;
		background-color: var(--color-secondary);
		border: unset;
		padding: unset;
		cursor: pointer;
	}

	.images {
		width: 100%;
		height: 30%;
		position: relative;
	}

	.banner {
		width: 100%;
		height: 90%;
		object-fit: cover;
	}

	.icon {
		width: 5rem;
		height: 5rem;
		border-radius: 50%;
		position: absolute;
		bottom: -1rem;
		left: 1rem;
	}

	.name,
	.ownerName,
	.description {
		color: var(--color-text);
		padding: 0.2rem;
	}
</style>
