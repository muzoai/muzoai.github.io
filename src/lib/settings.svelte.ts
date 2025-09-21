import { browser } from "$app/environment";

export interface Settings {
	theme: Theme;
}

export enum Theme {
	Light = 'light',
	Dark = 'dark',
	Yesh = 'yesh',
	Nord = 'nord',
	Catppuccin = 'catppuccin',
	Everforest = 'everforest',
}

const DEFAULT: Settings = {
	theme: Theme.Nord,
};

let settings: Settings = $state(DEFAULT);

if (browser) {
	const stored = JSON.parse(localStorage.getItem("settings") ?? "null");
	if (stored) {
		settings = stored;
	}
}

export function getSettings(): Settings {
	return settings;
};

export function setSettings(newSettings: Settings) {
	settings = newSettings;
	console.log(settings);
	if (browser) {
		localStorage.setItem("settings", JSON.stringify(newSettings));
	}
};

