<script lang="ts">
    import '../app.css';
    import Sidebar from '$lib/components/layout/Sidebar.svelte';
    import Navbar from '$lib/components/layout/Navbar.svelte';
</script>

<div class="app-container">
    <Sidebar />

    <div class="main-content">
        <Navbar />
        <main>
            <slot />
        </main>
    </div>
</div>

<style>
    .app-container {
        display: flex;
        min-height: 100vh;
        background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
        color: white;
    }

    .main-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }

    main {
        flex: 1;
        padding: 2rem;
        overflow-y: auto;
    }
</style>