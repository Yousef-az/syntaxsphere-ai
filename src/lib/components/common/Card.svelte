<script lang="ts">
    export let title: string | undefined = undefined;
    export let padding: 'none' | 'sm' | 'md' | 'lg' = 'md';
    export let hoverable: boolean = true;
    export let gradient: boolean = false;
</script>

<div
        class="card"
        class:hoverable
        class:gradient-overlay={gradient}
        class:p-none={padding === 'none'}
        class:p-sm={padding === 'sm'}
        class:p-md={padding === 'md'}
        class:p-lg={padding === 'lg'}
>
    {#if title}
        <div class="card-header">
            <h3>{title}</h3>
            <slot name="header-action"></slot>
        </div>
    {/if}
    <div class="card-content">
        <slot></slot>
    </div>
</div>

<style>
    .card {
        background: rgba(20, 24, 33, 0.7);
        border: 1px solid rgba(132, 215, 219, 0.1);
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(10px);
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
    }

    .gradient-overlay::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(0, 0, 0, 0) 100%);
        pointer-events: none;
    }

    .p-none {
        padding: 0;
    }

    .p-sm {
        padding: 0.75rem;
    }

    .p-md {
        padding: 1.5rem;
    }

    .p-lg {
        padding: 2rem;
    }

    .hoverable:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 48px rgba(0, 0, 0, 0.3);
        border-color: rgba(132, 215, 219, 0.3);
    }

    .card-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1rem;
    }

    .card-header h3 {
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.9rem;
        font-weight: 500;
        margin: 0;
    }
</style>