<script lang="ts">
    import { fade } from 'svelte/transition';
    export let size = 40;
    export let color = '#8CD7DB';
    export let text = '';
    export let fullScreen = false;
</script>

{#if fullScreen}
    <div
            class="loading-overlay"
            transition:fade={{ duration: 150 }}
    >
        <div class="loading-container">
            <svg
                    width={size}
                    height={size}
                    viewBox="0 0 38 38"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke={color}
            >
                <g fill="none" fill-rule="evenodd">
                    <g transform="translate(1 1)" stroke-width="2">
                        <circle stroke-opacity=".25" cx="18" cy="18" r="18"/>
                        <path d="M36 18c0-9.94-8.06-18-18-18">
                            <animateTransform
                                    attributeName="transform"
                                    type="rotate"
                                    from="0 18 18"
                                    to="360 18 18"
                                    dur="1s"
                                    repeatCount="indefinite"/>
                        </path>
                    </g>
                </g>
            </svg>

            {#if text}
                <p class="loading-text">{text}</p>
            {/if}
        </div>
    </div>
{:else}
    <div class="loading-inline">
        <svg
                width={size}
                height={size}
                viewBox="0 0 38 38"
                xmlns="http://www.w3.org/2000/svg"
                stroke={color}
        >
            <g fill="none" fill-rule="evenodd">
                <g transform="translate(1 1)" stroke-width="2">
                    <circle stroke-opacity=".25" cx="18" cy="18" r="18"/>
                    <path d="M36 18c0-9.94-8.06-18-18-18">
                        <animateTransform
                                attributeName="transform"
                                type="rotate"
                                from="0 18 18"
                                to="360 18 18"
                                dur="1s"
                                repeatCount="indefinite"/>
                    </path>
                </g>
            </g>
        </svg>

        {#if text}
            <p class="loading-text">{text}</p>
        {/if}
    </div>
{/if}

<style>
    .loading-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(15, 20, 36, 0.8);
        backdrop-filter: blur(4px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    }

    .loading-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .loading-inline {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .loading-text {
        margin-top: 1rem;
        color: white;
        font-size: 0.9rem;
        text-align: center;
    }
</style>