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

	const ORIGIN = "https://muzo-nestjs-backend-bdgegsefercmgdb4.australiaeast-01.azurewebsites.net/";
	// const ORIGIN = "http://localhost:8080";

	console.log(dto);

	let res: PromptResponseDto = await (await fetch(`${ORIGIN}/tracks/createloggedout`, {
		method: "POST",
		body: JSON.stringify(dto),
        headers: {
            'Content-Type': 'application/json',
        },
	})).json();

	console.log(res);

	return res?.track?.audioUrl;
}

