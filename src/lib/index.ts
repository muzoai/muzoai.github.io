// place files you want to import through the `$lib` alias in this folder.

import { browser } from "$app/environment";
import hoverSound from "$lib/assets/click-buttons-ui-menu-sounds-effects-button-2-203594.mp3";
import doneSound from "$lib/assets/ui-sounds-pack-2-sound-2-358896.mp3"
import submitSound from "$lib/assets/ui-sounds-pack-2-sound-4-358895.mp3"

export function elemHoverSound(node: HTMLElement) {
	const audio = new Audio(hoverSound);
	function playSound() {
		audio.currentTime = 0;
		audio.play();
	}
	node.addEventListener("mouseenter", playSound);
	return {
		destroy() {
			node.removeEventListener("mouseenter", playSound);
		}
	};
}

let submitAudio: HTMLAudioElement | undefined;
let doneAudio: HTMLAudioElement | undefined;

if (browser) {
	submitAudio = new Audio(submitSound);
	submitAudio.preload = "auto";

	doneAudio = new Audio(doneSound);
	doneAudio.preload = "auto";
}

export function playDone() {
	if (!browser) return;
	submitAudio!.pause();
	doneAudio!.currentTime = 0;
	doneAudio!.play();
}

export function playSubmit() {
	if (!browser) return;
	submitAudio!.currentTime = 0;
	submitAudio!.play();
}
