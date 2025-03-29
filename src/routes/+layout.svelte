<script lang="ts">
    import '../app.css';
    import { fade } from 'svelte/transition';
    import { page } from '$app/stores';
    import Sidebar from '$lib/components/layout/Sidebar.svelte';

    // Track page changes for transitions
    let currentPath = $page.url.pathname;

    // Update path when page changes
    $: if (currentPath !== $page.url.pathname) {
        currentPath = $page.url.pathname;
    }

    // Scrollbar effect
    let isScrolling = false;
    let scrollTimeout: ReturnType<typeof setTimeout>;

    function handleScroll() {
        if (!isScrolling) {
            isScrolling = true;
            document.body.classList.add('scrolling');
        }

        clearTimeout(scrollTimeout);

        scrollTimeout = setTimeout(() => {
            isScrolling = false;
            document.body.classList.remove('scrolling');
        }, 1000);
    }
</script>

<svelte:window on:scroll={handleScroll} />

<div class="app-container">
    <Sidebar />

    <main class="main-content">
        <div class="content-wrapper">
            {#key currentPath}
                <div in:fade={{ duration: 200, delay: 50 }}>
                    <slot />
                </div>
            {/key}
        </div>
    </main>
</div>

<style>
    .app-container {
        display: flex;
        min-height: 100vh;
        background: linear-gradient(135deg, #0a0a0a 0%, #111111 100%);
        color: white;
        position: relative;
    }

    .app-container::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background:
                radial-gradient(circle at 20% 30%, rgba(45, 212, 191, 0.05) 0%, transparent 30%),
                radial-gradient(circle at 80% 70%, rgba(45, 212, 191, 0.03) 0%, transparent 30%);
        pointer-events: none;
        z-index: 0;
    }

    .main-content {
        flex: 1;
        padding: 2rem;
        overflow-y: auto;
        position: relative;
        z-index: 1;
    }

    .content-wrapper {
        max-width: 1800px;
        margin: 0 auto;
    }

    @media (max-width: 768px) {
        .main-content {
            padding: 1rem;
        }
    }
</style>