<script lang="ts">
	export let text: string;
	export let x: number;
	export let y: number;
</script>

<div
	style="
		top: {y + 5}px;
		left: {x + 5}px;"
>
	{#each text.split('\n') as line}
		<span>{line}</span>
	{/each}
</div>

<style>
	div {
		border: 1px solid var(--color-primary);
		background: var(--color-secondary);
		color: var(--color-text);
		border-radius: 4px;
		padding: 4px;
		position: absolute;
		display: flex;
		flex-direction: column;
	}
</style>
