import { type PromptDto, type PromptResponseDto } from "$lib/../shared/dto"

let playing: string = $state("");

export function isPlaying(song: Song): boolean {
	return song.id === playing;
};

export function setPlaying(song: Song) {
	playing = song.id;
};

export class Song {
	prompt: string;
	id: string = Math.random().toString();
	creationTime = Date.now();
	url?: string;
	isGenerating: boolean = $state(true);

	constructor(prompt: string) {
		this.prompt = prompt;
	}
};

export async function callModel(prompt: string): Promise<string> {
	const dto: PromptDto = {
		prompt: prompt,
		hasAudioAttchment: false,
	};

	let res: PromptResponseDto = await (await fetch("https://muzo-nestjs-backend-bdgegsefercmgdb4.australiaeast-01.azurewebsites.net//tracks/createloggedout", {
		method: "POST",
		body: JSON.stringify(dto),
	})).json();

	console.log(res);

	return res?.track?.audioUrl;
}

