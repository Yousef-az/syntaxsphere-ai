<script lang="ts">
    // Define props with proper TypeScript types
    export let title: string;
    export let subtitle: string | undefined = undefined;

    // If you're using any slots with actions, define their types here
    // For example, if you're passing any props to slot components
</script>

<div class="page-container">
    <header class="page-header">
        <h1>{title}</h1>
        {#if subtitle}
            <p class="subtitle">{subtitle}</p>
        {/if}
        <slot name="header-actions"></slot>
    </header>

    <div class="page-content">
        <slot></slot>
    </div>
</div>

<style>
    .page-container {
        max-width: 1600px;
        margin: 0 auto;
    }

    .page-header {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
    }

    h1 {
        font-size: 1.8rem;
        font-weight: 600;
        margin-right: auto;
    }

    .subtitle {
        color: var(--text-secondary);
        font-size: 1rem;
        margin-top: 0.5rem;
        flex-basis: 100%;
    }

    @media (max-width: 768px) {
        .page-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
        }
    }
</style>