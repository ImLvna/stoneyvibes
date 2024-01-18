<script lang="ts">
	import { page } from '$app/stores';
	import { setContext } from 'svelte';
	import type { LayoutServerData } from './$types';
	import './style.scss';

	export let data: LayoutServerData;

	setContext('group', data.group);

	const paths = {
		Instances: '/instances',
		Partners: '/partners',
		Staff: '/staff'
	};
</script>

<div class="root flex-column">
	<header class="flex-row">
		<a href="/" class="logo">
			<img src="/favicon.png" alt="Logo" />
		</a>
		<nav class="flex-row">
			{#each Object.entries(paths) as path}
				<a href={path[1]} class:active={$page.url.pathname.includes(path[1])}>{path[0]}</a>
			{/each}
		</nav>
	</header>

	<main>
		<slot />
	</main>
</div>

<style lang="scss">
	:root {
		--color-primary: #441a48;
		--color-secondary: #552d74;
		--color-text: #fff;
	}

	header {
		background-color: var(--color-secondary);
		color: var(--color-text);
		height: 2.7rem;
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		width: 100%;
		position: sticky;
		top: 0;
		z-index: 1;
		overflow: hidden;

		align-items: center;

		a {
			color: var(--color-text);
			text-decoration: none;
			padding: 0.5rem;
			border-radius: 0.5rem;
			margin: 0.2rem;
			transition: background-color 0.2s ease-in-out;

			&:hover {
				background-color: var(--color-primary);
			}

			&.active {
				background-color: var(--color-primary);
			}
		}
	}

	.logo {
		width: 2.3rem;
		padding: 0.2rem;
		overflow: visible;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
</style>
