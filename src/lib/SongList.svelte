<script lang="ts">
	import Creating from './Creating.svelte';
	import Player from './Player.svelte';
	import type { Song } from './song.svelte';

	interface Props {
		songs: Song[];
	}

	const { songs }: Props = $props();

	let sortedSong: Song[] = $derived(
		[...songs].sort((a, b) => b.creationTime.valueOf() - a.creationTime.valueOf())
	);
</script>

<div class="song-list">
	{#each sortedSong as song (song.id)}
		<div id={song.id} class="song-container areo gloss">
			{#if song.isGenerating}
				<Creating />
			{:else}
				<Player
					{song}
					deleteThis={() => {
						if (!confirm('Are you sure you want to delete this song?')) return;

						const index = songs.indexOf(song);
						if (index != -1) {
							songs.splice(index, 1);
						}
					}}
				/>
			{/if}
		</div>
	{/each}
</div>

<style>
	.song-list {
		display: flex;
		flex-direction: column;
		gap: 15px;
		width: 100%;
		align-items: center;
	}

	.song-container {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		max-height: 250px;
		max-width: 600px;
		overflow: hidden;
		transition: height ease-in-out 0.5s;
		background-color: var(--bg-sec);
		padding: 12px;
		border-radius: 10px;
		box-shadow: 0px 0px 15px var(--shadow);
	}
</style>
