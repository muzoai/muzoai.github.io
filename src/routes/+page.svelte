<script lang="ts">
	import { elemHoverSound, playDone, playSubmit } from '$lib';
	import Error from '$lib/Error.svelte';
	import SettingsMenu from '$lib/SettingsMenu.svelte';
	import { callModel, Song } from '$lib/song.svelte';
	import SongList from '$lib/SongList.svelte';
	import { IconSend, IconSettings } from '@tabler/icons-svelte';
	import { onMount } from 'svelte';

	let prompt = $state('');
	let lastPrompt: string | null = $state(null);

	let error: string | undefined = $state(undefined);

	let songs: Song[] = $state([]);

	function shake() {
		let main = document.getElementById('main');

		if (!main) return;

		main.classList = 'shaking';

		main.style.animation = 'none';
		main.offsetHeight; /* trigger reflow */
		main.style.animation = '';
	}

	function done(song: Song, success: boolean) {
		song.isGenerating = false;

		if (!success) {
			const index = songs.indexOf(song);
			if (index != -1) {
				songs.splice(index, 1);
			}
			return;
		}

		playDone();

		shake();

		document.getElementById(song.id)!.style = 'filter: brightness(3)';
		window.setTimeout(() => {
			document.getElementById(song.id)!.style = 'transition: filter ease-out 1s; filter: none;';
		}, 10);
	}

	onMount(() => {
		const stored = JSON.parse(localStorage.getItem('songs') ?? 'null');

		if (stored) {
			songs = stored;
		}

		$effect(() => {
			localStorage.setItem('songs', JSON.stringify(songs));
		});
	});

	function generate() {
		if (prompt.length == 0) return;

		error = undefined;

		const song = new Song(prompt);

		lastPrompt = prompt;
		prompt = '';

		song.isGenerating = true;
		songs.push(song);

		playSubmit();

		callModel(song.prompt)
			.then((url) => {
				song.url = url;
				done(song, true);
			})
			.catch((e) => {
				error = e.toString();
				done(song, false);
			});
	}

	let showingSettings = $state(false);
</script>

<div class="top-right">
	<button
		aria-label="generate"
		use:elemHoverSound
		onclick={() => (showingSettings = !showingSettings)}
	>
		<IconSettings size={32} />
	</button>
</div>

{#if showingSettings}
	<SettingsMenu />
{:else}
	<div id="main">
		<div class="input-area">
			<textarea bind:value={prompt} placeholder="Describe your song..."></textarea>

			<button aria-label="generate" use:elemHoverSound onclick={generate}>
				<IconSend size={32} />
			</button>
		</div>

		{#if error !== undefined}
			<Error message={error} />
		{/if}

		<div class="song-list-container">
			<SongList {songs} />
		</div>
	</div>
{/if}

<style>
	:global(.shaking) {
		animation: shake 0.5s;
		animation-iteration-count: 1;
	}

	@keyframes shake {
		0% {
			transform: translate(1px, 1px) rotate(0deg);
		}
		10% {
			transform: translate(-1px, -2px) rotate(-1deg);
		}
		20% {
			transform: translate(-3px, 0px) rotate(1deg);
		}
		30% {
			transform: translate(3px, 2px) rotate(0deg);
		}
		40% {
			transform: translate(1px, -1px) rotate(1deg);
		}
		50% {
			transform: translate(-1px, 2px) rotate(-1deg);
		}
		60% {
			transform: translate(-3px, 1px) rotate(0deg);
		}
		70% {
			transform: translate(3px, 1px) rotate(-1deg);
		}
		80% {
			transform: translate(-1px, -1px) rotate(1deg);
		}
		90% {
			transform: translate(1px, 2px) rotate(0deg);
		}
		100% {
			transform: translate(1px, -2px) rotate(-1deg);
		}
	}

	#main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100%;
		width: 100%;
	}

	.song-list-container {
		overflow: scroll;
	}

	.input-area {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		gap: 10px;
		padding: 30px;
	}

	textarea {
		width: 400px;
		height: 150px;
	}

	.top-right {
		position: fixed;
		left: 10px;
		top: 10px;
		opacity: 50%;
	}

	.top-right:hover {
		opacity: 100%;
	}
</style>
