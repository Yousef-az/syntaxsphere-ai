<script lang="ts">
    import { fade, fly } from 'svelte/transition';
    import { createEventDispatcher } from 'svelte';

    export let isOpen = false;
    export let title = '';
    export let width = '500px';
    export let showCloseButton = true;
    export let closeOnOutsideClick = true;

    const dispatch = createEventDispatcher();

    function close() {
        dispatch('close');
    }

    function handleOutsideClick(event: MouseEvent) {
        if (closeOnOutsideClick && event.target === event.currentTarget) {
            close();
        }
    }

    function handleKeydown(event: KeyboardEvent) {
        if (event.key === 'Escape') {
            close();
        }
    }
</script>

<svelte:window on:keydown={isOpen ? handleKeydown : null} />

{#if isOpen}
    <div
            class="dialog-overlay"
            on:click={handleOutsideClick}
            transition:fade={{ duration: 150 }}
    >
        <div
                class="dialog-content glossy-card"
                in:fly={{ y: 20, duration: 300 }}
                out:fade
                style="max-width: {width};"
        >
            <div class="dialog-header">
                {#if title}
                    <h2 class="dialog-title">{title}</h2>
                {/if}

                {#if showCloseButton}
                    <button class="close-button" on:click={close}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                {/if}
            </div>

            <div class="dialog-body">
                <slot></slot>
            </div>

            {#if $$slots.footer}
                <div class="dialog-footer">
                    <slot name="footer"></slot>
                </div>
            {/if}
        </div>
    </div>
{/if}

<style>
    .dialog-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(2px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        padding: 1rem;
    }

    .dialog-content {
        background: rgba(20, 24, 33, 0.9);
        border: 1px solid rgba(132, 215, 219, 0.1);
        border-radius: 12px;
        width: 100%;
        max-height: 90vh;
        display: flex;
        flex-direction: column;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
    }

    .dialog-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.25rem 1.5rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    .dialog-title {
        color: white;
        font-size: 1.2rem;
        font-weight: 600;
        margin: 0;
    }

    .close-button {
        background: transparent;
        border: none;
        color: rgba(255, 255, 255, 0.7);
        cursor: pointer;
        padding: 0.25rem;
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
    }

    .close-button:hover {
        color: white;
        background: rgba(255, 255, 255, 0.1);
    }

    .dialog-body {
        padding: 1.5rem;
        overflow-y: auto;
        flex: 1;
    }

    .dialog-footer {
        padding: 1rem 1.5rem;
        border-top: 1px solid rgba(255, 255, 255, 0.05);
        display: flex;
        justify-content: flex-end;
        gap: 0.75rem;
    }
</style>