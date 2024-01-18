<script lang="ts">
	import { page } from '$app/stores';
	import { staff } from '$lib/staff';
	import tooltip from '$lib/tooltip';

	// export let data: PageServerData;
	const member = staff.find((i) => i.vrchat_name === $page.params.name)!;
</script>

<div class="root flex-column">
	<div class="images flex-column">
		<img src={member.banner} class="banner" alt={member.name} />
		<img src={member.image} class="icon" alt={member.name} />
	</div>
	<div class="flex-column info">
		<div class="name">{member.name}</div>
		<div class="nickname">({member.nickname})</div>
		<div class="role">{member.role}</div>
		<div class="age" use:tooltip={member.birthday.calendar()}>
			Born {member.birthday.fromNow()}
		</div>
	</div>
	About Me:
	<ul class="about">
		<li>Pronouns:</li>
		<li>{member.pronouns}</li>
		<li>Gender:</li>
		<li>{member.gender}</li>
		<li>Relationship Status:</li>
		<li>{member.relationshipStatus}</li>
		<li>Favourite Color:</li>
		<li>{member.favColor}</li>
		<li>Favorite Animal:</li>
		<li>{member.favAnimal}</li>
		<li>Platform:</li>
		<li>{member.platform}</li>
		<li>Games I play</li>
		<ul>
			{#each member.games as game}
				<li>{game}</li>
			{/each}
		</ul>
		<li>Hobbies:</li>
		<ul>
			{#each member.hobbies as hobby}
				<li>{hobby}</li>
			{/each}
		</ul>
		{#if member.funFact}
			<li>Fun Fact about me:</li>
			<li>{member.funFact}</li>
		{/if}
	</ul>
</div>

<style lang="scss">
	.root {
		align-items: center;
		justify-content: center;
	}

	.images {
		width: 100%;
		height: 10rem;
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

	.info {
		align-self: center;
		font-size: 2rem;
		text-align: center;
	}
	.nickname {
		font-size: 1.5rem;
	}

	ul {
		list-style: none;
	}
	.about {
		padding: 0;
		margin: 0;
	}
	.about > li:nth-child(even) {
		padding-left: 1rem;
	}
</style>
