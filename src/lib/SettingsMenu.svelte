<script lang="ts">
	import { getSettings, setSettings, Theme } from '$lib/settings.svelte';

	let theme = $state(getSettings().theme);

	$effect(() => {
		const settings = getSettings();
		settings.theme = theme;
		console.log(settings);
		setSettings(settings);
	});
</script>

<div class="container">
	<h2>Theme</h2>
	<select bind:value={theme}>
		{#each Object.values(Theme) as theme}
			<option value={theme}>{theme}</option>
		{/each}
	</select>
</div>

<style>
	.container {
		display: block;
		padding: 50px;	
	}
</style>
