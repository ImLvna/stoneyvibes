<script lang="ts">
	import { staff } from '$lib/staff';
</script>

<div class="root flex-row">
	<div class="staff">
		{#each staff as staffMember}
			<button
				class="member flex-column"
				on:click={() => window.open(`/staff/${staffMember.vrchat_name}`)}
			>
				<div class="flex-column images">
					<img src={staffMember.banner} class="banner" alt={staffMember.name} />
					<img src={staffMember.image} class="icon" alt={staffMember.name} />
				</div>
				<div class="flex-column info">
					<div class="name">{staffMember.name}</div>
					<div class="nickname">({staffMember.nickname})</div>
					<div class="role">{staffMember.role}</div>
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

	.staff {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-auto-rows: minmax(2rem, auto);
		grid-gap: 1rem;
	}

	.member {
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

	.info {
		align-self: center;
	}

	.images {
		width: 100%;
		height: 50%;
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

	.name {
		font-size: 2rem;
	}

	.role {
		font-size: 1.5rem;
	}

	.name,
	.role,
	.nickname {
		color: var(--color-text);
	}

	.nickname {
		font-size: 1rem;
	}
</style>
