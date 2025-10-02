<script>
	import { elemHoverSound } from "$lib";
	import { IconSettings } from "@tabler/icons-svelte";
	import { getShowingSettings, setShowingSettings } from "./settings.svelte";

</script>

<div class="container">
	<img class="logo" src="logo-word-blue.png" alt="logo" />

	<!-- <button -->
	<!-- 	aria-label="settings" -->
	<!-- 	use:elemHoverSound -->
	<!-- 	onclick={() => setShowingSettings(!getShowingSettings())} -->
	<!-- > -->
	<!-- 	<IconSettings size={32} /> -->
	<!-- </button> -->

	<a href="https://white-bay-04ed1ab00.6.azurestaticapps.net/">
		Use other site
	</a>
</div>
<div class="spacer"></div>

<style>
	:root {
		--top-bar-height: 50px;
	}

	.spacer {
		height: var(--top-bar-height);
	}

	.container {
		height: var(--top-bar-height);
		top: 0px;
		right: 0px;
		position: fixed;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		padding: 10px;
		margin: 0px;
		background-color: var(--bg-sec);
		z-index: 4000;
	}

	.logo {
		height: 50px;
		margin-left: 30px;
	}
</style>
