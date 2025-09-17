<script lang="ts">
	import { IconExclamationMark } from '@tabler/icons-svelte';

	interface Props {
		message: string;
	}

	const { message }: Props = $props();
</script>

<div>
	<IconExclamationMark size={32} /> <span>{message}</span>
</div>

<style>
	div {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 10px;
		background-color: var(--bg-err);
		color: var(--text-prim);
		border: 2px solid var(--text-prim);
		padding: 15px;
		border-radius: 10px;
		margin-bottom: 25px;
		margin-left: 25px;
		margin-right: 25px;
	}
</style>
