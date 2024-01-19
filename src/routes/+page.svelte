<script lang="ts">
	import type { Components } from '$lib/vrchat/types';
	import { getContext } from 'svelte';

	const group: Components.Schemas.Group = getContext('group');
</script>

<div>{group.description}</div>
