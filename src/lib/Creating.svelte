<script lang="ts">
	import { browser } from '$app/environment';
	import pkg from 'abcjs';
	import { onDestroy, onMount } from 'svelte';

	let abcjs: any;

	let notes = $state(["A"]);

	const id = `elem${Math.random()}`;

	onMount(async () => {
		abcjs = await import('abcjs');
	});

	const NOTE_NAMES = [
		// "a", "b", "c", "d", "e", "f", "g",
		"A", "B", "C", "D", "E", "F", "G",
	];

	function randNote(): string {
		return NOTE_NAMES[Math.floor(Math.random() * NOTE_NAMES.length)];
	}

	const key = randNote();

	function rerender() {
		let notesStr = "";
		let i = 1;
		for (const note of notes) {
			notesStr += note;
			notesStr += " ";
			
			if (i % 4 == 0) {
				notesStr += "| ";
			}

			i++;
		}

		const abc = `
			M: 4/4
			K: ${key}min
			|:${notesStr}:|
		`;

		abcjs.renderAbc(id, abc);
	}

	if (browser) {
		const interval = window.setInterval(() => {
			notes.push(randNote());
			if (notes.length > 8) {
				notes = [];
			}
			rerender();
		}, 100);

		onDestroy(() => {
			window.clearInterval(interval);
		});
	}
</script>

<div class="container">
	<div class="notes" {id}></div>
</div>

<style>
	.container {
		overflow: hidden;	
		height: 100px;
        z-index: 10;
	}
</style>
