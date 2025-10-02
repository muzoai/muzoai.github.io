<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import BackDrop from '$lib/BackDrop.svelte';
	import { getSettings } from '$lib/settings.svelte';
	import TopBar from '$lib/TopBar.svelte';
	import { onMount } from 'svelte';

	let { children } = $props();

	export const prerender = true;

	// onMount(() => {
	// 	$effect(() => {
	// 		document.getElementsByTagName('html')[0].classList = `theme-${getSettings().theme}`;
	// 	});
	// });
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<TopBar />
<BackDrop />

{@render children?.()}

<style>
	:root {
		--bg-prim: #222;
		--bg-sec: #333;
		--text-prim: #fff;
		--hover: #555;
		--bg-err: #f553;
		--text-err: #f33;
	}

	:global {
		.theme-aero {
			--col-navbar: transparent;
			--bg-prim: #95b8c9;
			--bg-sec: #9ceff2;
			--text-prim: #000;
			--hover: #22d3ee;

			.gloss {
				&::before {
					content: '';
					position: absolute;
					top: 4%;
					left: 0.5em;
					width: calc(100% - 1em);
					height: 40%;
					background: linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.0));
					border-radius: inherit;
					transition: background 400ms;
				}
			}

			.small-gloss {
				&::after {
					content: '';
					position: absolute;
					top: 4%;
					width: 25px;
					height: 15px;
					background: linear-gradient(to bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0));
					border-radius: 9999px;
					transition: background 400ms;
				}
			}

			.med-gloss {
				&::after {
					content: '';
					position: absolute;
					top: 4%;
					width: 30px;
					height: 15px;
					background: linear-gradient(to bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0));
					border-radius: 9999px;
					transition: background 400ms;
				}
			}

			.areo,
			button,
			select {
				--bottom-glow: radial-gradient(
					farthest-corner at bottom center,
					rgba(255, 255, 255, 0.7),
					transparent
				);
				--stripes: repeating-linear-gradient(to bottom, #eee 0px, #eee 2px, #fff 2px, #fff 4px);
				/* Colors */
				--hue: 200;
				/* --button-background: oklch(75% 0.1 var(--hue) / 0.8); */
				/* --bg-dark: oklch(45% 0.1 var(--hue) / 0.75); */

				--button-background: #000000aa;
				--bg-dark: #00000022;

				backdrop-filter: blur(10px);


				/* --button-foreground: oklch(15% 0.05 var(--hue)); */
				/* Style */
				/* background-color: var(--button-background); */
				background:
					var(--bottom-glow), linear-gradient(to bottom, var(--bg-dark), var(--button-background));
				box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
				border: 1px solid var(--button-background);
				border-radius: 999px;
				cursor: pointer;
				/* margin: 1em 1ex; */
				padding: 0.7ex 0.7em;
				position: relative;
				text-shadow: 0 2px 0.5em #0003;
				transition: all 300ms;
				/* Text */
				color: var(--button-foreground);
				font-family: 'Lucida Grande', 'Lucida Sans Unicode', 'Lunasima', sans-serif;
				font-weight: 700;

				&:hover,
				&:focus {
					box-shadow: 0 6px 8px rgba(0, 0, 0, 0.4);
					transform: scale(1.1);
				}

				&:active {
					box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
				}
			}
		}

		.theme-other {
			--col-navbar: transparent;
			--bg-prim: #95b8c9;
			--bg-sec: #9ceff2;
			--text-prim: #000;
			--hover: #22d3ee;

			.gloss {
				&::before {
					content: '';
					position: absolute;
					top: 4%;
					left: 0.5em;
					width: calc(100% - 1em);
					height: 40%;
					background: linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.0));
					border-radius: inherit;
					transition: background 400ms;
				}
			}

			.small-gloss {
				&::after {
					content: '';
					position: absolute;
					top: 4%;
					width: 25px;
					height: 15px;
					background: linear-gradient(to bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0));
					border-radius: 9999px;
					transition: background 400ms;
				}
			}

			.med-gloss {
				&::after {
					content: '';
					position: absolute;
					top: 4%;
					width: 30px;
					height: 15px;
					background: linear-gradient(to bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0));
					border-radius: 9999px;
					transition: background 400ms;
				}
			}

			.areo,
			button,
			select {
				--bottom-glow: radial-gradient(
					farthest-corner at bottom center,
					rgba(255, 255, 255, 0.7),
					transparent
				);
				--stripes: repeating-linear-gradient(to bottom, #eee 0px, #eee 2px, #fff 2px, #fff 4px);
				/* Colors */
				--hue: 200;
				--button-background: oklch(75% 0.1 var(--hue) / 0.8);
				--bg-dark: oklch(45% 0.1 var(--hue) / 0.75);
				--button-foreground: oklch(15% 0.05 var(--hue));
				/* Style */
				background-color: var(--button-background);
				background:
					var(--bottom-glow), linear-gradient(to bottom, var(--bg-dark), var(--button-background));
				box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
				border: 1px solid var(--button-background);
				border-radius: 999px;
				cursor: pointer;
				/* margin: 1em 1ex; */
				padding: 0.7ex 0.7em;
				position: relative;
				text-shadow: 0 2px 0.5em #0003;
				transition: all 300ms;
				/* Text */
				color: var(--button-foreground);
				font-family: 'Lucida Grande', 'Lucida Sans Unicode', 'Lunasima', sans-serif;
				font-weight: 700;

				&:hover,
				&:focus {
					box-shadow: 0 6px 8px rgba(0, 0, 0, 0.4);
					transform: scale(1.1);
				}

				&:active {
					box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
				}
			}
		}

		.theme-dark {
			--col-navbar: #1a1a1a;
			--col-sidebar: #1a1a1a;
			--col-accent: #777;
			--col-altAccent: #666;
			--col-accentContrast: #fff;
			--bg-prim: #111;
			--bg-sec: #222;
			--col-subContainer: #333;
			--text-prim: #fff;
			--hover: #777;
		}

		.theme-light {
			--bg-prim: #fff9;
			--bg-sec: #ddd;
			--text-prim: #252525;
			--hover: #239AD7;
			--accent: #51D6CE;
			--shadow: #00000045;

			.song-container, textarea {
				backdrop-filter: blur(15px);
				background-color: transparent !important;
				box-shadow: 0px 0px 20px var(--shadow);
				border-radius: 3px !important;
			}

			.song-container::before {
				content: '';
				position: absolute;
				width: 100%;
				height: 100%;
				background-color: #ddd6;
				z-index: 0;
			}

			/* @font-face { */
			/* 	font-family: "Fraunces"; */
			/* 	src: url("Fraunces.woff2") format("woff2"); */
			/* } */
			/**/
			/* * { */
			/* 	font-family: "Fraunces" */
			/* } */
		}

		.theme-light-old {
			--bg-prim: #fff;
			--bg-sec: #ddd;
			--text-prim: #000;
			--hover: #239AD7;
			--accent: #51D6CE;
			--shadow: #00000033;
		}

		/* https://catppuccin.com/ */
		.theme-catppuccin {
			--col-navbar: #24273a;
			--col-sidebar: #24273a;
			--col-accent: #ee99a0;
			--col-altAccent: #ed8796;
			--col-accentContrast: #363a4f;
			--bg-prim: #1e2030;
			--bg-sec: #24273a;
			--col-subContainer: #363a4f;
			--text-prim: #cad3f5;
			--hover: #ee99a0;
		}

		/* https://www.nordtheme.com/ */
		.theme-nord {
			--col-navbar: #3b4252;
			--col-sidebar: #3b4252;
			--col-accent: #88c0d0;
			--col-altAccent: #5e81ac;
			--col-accentContrast: #eceff4;
			--bg-prim: #2e3440;
			--bg-sec: #434c5e;
			--col-subContainer: #4c566a;
			--text-prim: #e5e9f0;
			--hover: #88c0d0;
		}

		/* https://github.com/sainnhe/everforest */
		.theme-everforest {
			--col-navbar: #2d353b;
			--col-sidebar: #2d353b;
			--col-accent: #a7c080;
			--col-altAccent: #a7c080;
			--col-accentContrast: #3a515d;
			--bg-prim: #232a2e;
			--bg-sec: #343f44;
			--col-subContainer: #3d484d;
			--text-prim: #d3c6aa;
			--hover: #a7c080;
		}
	}

	:global {
		* {
			font-family: Arial, Helvetica, sans-serif;
		}

		button {
			all: unset;
			cursor: pointer;
			transition: color ease-in-out 0.1s;
			color: var(--text-prim);
			display: flex;
			align-items: center;
			justify-content: center;
			z-index: 10;
		}

		button:hover {
			color: var(--hover);
		}

		button:hover > svg {
			transform: scale(1.2);
		}

		button > svg {
			transition: transform ease-in-out 0.1s;
		}

		textarea,
		select,
		input {
			background-color: var(--bg-sec);
			color: var(--text-prim);
			padding: 10px;
			border-radius: 10px;
			border-style: none;
			border: 2px solid var(--bg-prim);
		}

		textarea:focus,
		select,
		input:focus {
			outline: none;
			border: 2px solid var(--text-prim) !important;
		}
	}
</style>
