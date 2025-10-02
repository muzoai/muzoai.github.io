<!-- <script lang="ts"> -->
<!-- 	import { onMount } from "svelte"; -->
<!---->
<!-- 	const H = 1000; -->
<!-- 	const W = 1000; -->
<!-- 	 -->
<!-- 	onMount(() => { -->
<!-- 		const col = window.getComputedStyle(document.body).getPropertyValue('--hover'); -->
<!-- 		// const { r, g, b } = hexToRgb(col); -->
<!---->
<!-- 		const canv = document.getElementById('canv')! as HTMLCanvasElement; -->
<!-- 		const ctx = canv.getContext('2d')!; -->
<!---->
<!-- 		let lastT: number | null = null; -->
<!---->
<!-- 		const render = () => { -->
<!-- 			const now = Date.now(); -->
<!-- 			let dt = 0; -->
<!-- 			if (lastT !== null) dt = now - lastT; -->
<!-- 			lastT = now; -->
<!---->
<!-- 			ctx.clearRect(0, 0, H, W); -->
<!---->
<!-- 			ctx.fillRect(0, 0, 100, 100); -->
<!---->
<!-- 			window.requestAnimationFrame(render); -->
<!-- 		}; -->
<!---->
<!-- 		window.requestAnimationFrame(render); -->
<!-- 	}); -->
<!---->
<!-- </script> -->
<!---->
<!-- <canvas id="canv" height={H} width={W}> -->
<!-- </canvas> -->

<img src="art.png">

<style>
	img {
		position: fixed;
		bottom: 0px;
		left: 0px;
		width: 100%;
		/* height: 100%; */
		/* background-image: url("art.png"); */
		/* background-repeat: no-repeat; */
		opacity: 0.4;
	}
</style>


