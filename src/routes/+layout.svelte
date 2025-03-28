<script lang="ts">
    import '../app.css';
    import Sidebar from '$lib/components/layout/Sidebar.svelte';
</script>

<div class="app-container">
    <Sidebar />

    <main class="main-content">
        <slot />
    </main>
</div>

<style>
    .app-container {
        display: flex;
        min-height: 100vh;
        background: linear-gradient(135deg, #0f1424 0%, #1a1f36 100%);
        color: white;
    }

    .main-content {
        flex: 1;
        padding: 2rem;
        overflow-y: auto;
        height: 100vh;
    }

    @media (max-width: 768px) {
        .main-content {
            padding: 1rem;
        }
    }
</style>