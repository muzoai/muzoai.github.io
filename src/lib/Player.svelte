<script lang="ts">
  import { IconPlayerPlayFilled, IconPlayerPauseFilled, IconTrash, IconDownload } from '@tabler/icons-svelte';
  import { isPlaying, setPlaying, type Song } from './song.svelte';
  import ProgressBar from './ProgressBar.svelte';
  import { onDestroy, onMount } from 'svelte';
  import { elemHoverSound } from '$lib';

  interface Props {
    song: Song;
    deleteThis: () => void;
  }

  const { song, deleteThis }: Props = $props();

  let paused = $state(true);
  let duration = $state(0);
  let progress = $state(0);

  let audio: HTMLAudioElement;

  const play = () => {
    if (!isPlaying(song)) {
      setPlaying(song);
      paused = false;
    } else {
      paused = !paused;
    }

    if (paused) {
      audio.pause();
    } else {
      audio.play();
    }
  };

  let isCurrentlyPlaying = $derived(!paused && isPlaying(song));

  onMount(() => {
    // audio = new Audio('https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3');

    audio = new Audio(song.url);
    audio.addEventListener('loadedmetadata', () => {
      duration = audio.duration;
    });
    audio.addEventListener('timeupdate', () => {
      progress = audio.currentTime / audio.duration;
    });
  });

  onDestroy(() => {
    audio.pause();
  });

  $effect(() => {
    if (!audio) return;

    if (isCurrentlyPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  });

  function seek(p: number) {
    audio.currentTime = p * audio.duration;
  }
</script>

<div class="container">
  <button class="play-button" onclick={play} use:elemHoverSound>
    {#if isCurrentlyPlaying}
      <IconPlayerPauseFilled size={32} />
    {:else}
      <IconPlayerPlayFilled size={32} />
    {/if}
  </button>

  <div class="name">
    {song?.prompt?.length > 40 ? `${song.prompt?.slice(0, 40)}...` : song.prompt}
  </div>

  <div class="progress">
    <ProgressBar {progress} {seek} />
  </div>

  <div class="options">
    <button onclick={deleteThis} use:elemHoverSound>
      <IconTrash size={20} />
    </button>
    <button onclick={() => {
    }} use:elemHoverSound>
      <IconDownload size={20} />
    </button>
  </div>
</div>

<style>
  .container {
    display: grid;
    grid-template-columns: 75px 1fr 50px;
    grid-template-rows: 1fr 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    height: 60px;
    width: 100%;
  }

  .play-button {
    grid-area: 1 / 1 / 3 / 2;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .name {
    grid-area: 1 / 2 / 2 / 3;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  .progress {
    grid-area: 2 / 2 / 3 / 3;
    display: flex;
    align-items: center;
  }

  .options {
    grid-area: 1 / 3 / 3 / 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
