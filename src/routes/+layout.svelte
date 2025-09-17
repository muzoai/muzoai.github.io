<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { getSettings } from '$lib/settings.svelte';
	import { onMount } from 'svelte';

	let { children } = $props();

	export const prerender = true;

	onMount(() => {
		$effect(() => {
			const container = document.getElementById('container');
			if (container) {
				container.classList = `container theme-${getSettings().theme}`;
			}
		});
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div id="container">
	<div id="inner-container">
		{@render children?.()}
	</div>
</div>

<style>
	:global {
		.container {
			width: 100%;
			height: 1000px;
		}
	}

	#inner-container {
		width: 100%;
		height: 100%;
		background-color: var(--bg-prim);
		color: var(--text-prim);
	}

	:root {
		--bg-prim: #222;
		--bg-sec: #333;
		--text-prim: #fff;
		--hover: #555;
		--bg-err: #f553;
		--text-err: #f33;
	}

	:global {
		.theme-yesh {
			--col-navbar: transparent;
			--col-sidebar: #16132a;
			--col-accent: #22d3ee;
			--col-altAccent: #3b82f6;
			--col-accentContrast: #fff;
			--bg-prim: #120720;
			--bg-sec: #1e1b3b;
			--col-subContainer: #2c284e;
			--text-prim: #fff;
			--hover: #22d3ee;
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
			--col-navbar: #eee;
			--col-sidebar: #eee;
			--col-accent: #777;
			--col-altAccent: #555;
			--col-accentContrast: #fff;
			--bg-prim: #fff;
			--bg-sec: #eee;
			--col-subContainer: #ccc;
			--text-prim: #000;
			--hover: #777;
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
		}

		button:hover {
			color: var(--hover);
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
