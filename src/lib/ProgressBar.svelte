<script lang="ts">
    interface Props {
        progress: number,
        seek: (p: number) => void,
    };

    let { progress, seek }: Props = $props();
</script>

<div class="container" onclick={(e: MouseEvent) => {
    const elem = e.currentTarget as HTMLDivElement;
    const rect = elem.getBoundingClientRect();
    const p = (e.clientX - rect.left) / rect.width;
    seek(p);
}}>
    <div class="inner" style:width={`${progress * 100}%`}>
        <div class="head areo"></div>
    </div>
</div>

<style>
    :root {
        --height: 10px;
    }

    .head {
        height: calc(var(--height) * 2) !important;
        width: calc(var(--height) * 2) !important;
        padding: 0px;
        right: 0px;
        border-radius: 50% !important;
        background-color: var(--text-prim);
        position: relative;
        top: -50% !important;
        left: calc(100% - var(--height)) !important;
    }

    .head:hover {
        transform: scale(1.2);
        transition: transform ease-out .1s;
    }

    .inner {
        height: 100%;
        background-color: var(--text-prim);
        border-radius: var(--height);
    }

    .container {
        height: var(--height);
        border-radius: var(--height);
        width: 100%;
        background-color: var(--bg-prim);
        cursor: pointer;
    }
</style>

