<script lang="ts">
	import { onMount } from 'svelte';

	let t = 0;

	const H = 500;
	const W = 500;

	const { onFinish }: { onFinish: () => void } = $props();

	interface Star {
		x: number;
		y: number;
		vx: number;
		vy: number;
		opacity: number;
	}

	function randomStar(): Star {
		const theta = Math.random() * 2 * Math.PI;
		const mag = 1.4 * Math.random() + 0.2;
		return {
			x: W / 2,
			y: H / 2,
			vx: mag * Math.sin(theta),
			vy: mag * Math.cos(theta),
			opacity: 1 + Math.random() * 0.4
		};
	}

	let stars: Star[] = [];
	for (let i = 0; i < 30; i++) {
		stars.push(randomStar());
	}

	function hexToRgb(hex: string) {
		const m = hex.match(/^#([0-9a-f]{6}|[0-9a-f]{3})$/i);
		if (!m) return {};

		let c = m[1];
		if (c.length === 3) {
			c = c
				.split('')
				.map((x) => x + x)
				.join('');
		}

		const intVal = parseInt(c, 16);
		return {
			r: (intVal >> 16) & 255,
			g: (intVal >> 8) & 255,
			b: intVal & 255
		};
	}

	onMount(() => {
		const col = window.getComputedStyle(document.body).getPropertyValue('--hover');
		const { r, g, b } = hexToRgb(col);

		const canv = document.getElementById('canv')! as HTMLCanvasElement;
		const ctx = canv.getContext('2d')!;

		const render = () => {
			ctx.clearRect(0, 0, H, W);

			const dt = 1.4;

			for (const star of stars) {
				star.vy += 0.07 * dt;
				star.opacity -= 0.02 * dt;

				star.x += star.vx * dt;
				star.y += star.vy * dt;

				ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${star.opacity})`;
				ctx.font = '20px Arial';
				ctx.fillText('✦', star.x, star.y);
			}

			t += 0.1 * dt;

			if (t > 10) {
				onFinish();
				return;
			}

			window.requestAnimationFrame(render);
		};

		window.requestAnimationFrame(render);
	});
</script>

<canvas id="canv" height={H} width={W}>
</canvas>

<style>
	#canv {
		position: absolute;
		z-index: 500;
		transform: translate(calc(-50% - 16px), calc(-50% + 16px));
		/* left: 50%; */
		/* top: 50%; */
		pointer-events: none;
	}
</style>
