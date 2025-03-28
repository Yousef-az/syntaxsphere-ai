<script lang="ts">
    export let title = '';
    export let subtitle = '';
    export let padding = '1.5rem';
    export let elevation = 1; // 1-3 for different shadow levels
    export let hoverable = true;
    export let clickable = false;

    const elevationClasses = {
        1: 'shadow-sm',
        2: 'shadow',
        3: 'shadow-lg'
    };

    $: elevationClass = elevationClasses[elevation] || elevationClasses[1];
</script>

<div
        class="card {elevationClass}"
        class:hoverable
        class:clickable
        style="padding: {padding};"
        on:click={clickable ? () => {} : null}
>
    {#if title || subtitle}
        <div class="card-header">
            {#if title}
                <h3 class="card-title">{title}</h3>
            {/if}
            {#if subtitle}
                <p class="card-subtitle">{subtitle}</p>
            {/if}
        </div>
    {/if}

    <div class="card-content">
        <slot></slot>
    </div>

    {#if $$slots.footer}
        <div class="card-footer">
            <slot name="footer"></slot>
        </div>
    {/if}
</div>

<style>
    .card {
        background: rgba(20, 24, 33, 0.7);
        border: 1px solid rgba(132, 215, 219, 0.1);
        border-radius: 12px;
        transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        position: relative;
        overflow: hidden;
    }

    .card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 30%;
        background: linear-gradient(
                to bottom,
                rgba(255, 255, 255, 0.08),
                rgba(255, 255, 255, 0.01)
        );
        border-radius: inherit;
        pointer-events: none;
    }

    .hoverable:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 48px rgba(0, 0, 0, 0.3);
        border-color: rgba(132, 215, 219, 0.3);
    }

    .clickable {
        cursor: pointer;
    }

    .card-header {
        margin-bottom: 1rem;
    }

    .card-title {
        color: white;
        font-size: 1.1rem;
        font-weight: 600;
        margin: 0 0 0.25rem 0;
    }

    .card-subtitle {
        color: rgba(255, 255, 255, 0.6);
        font-size: 0.9rem;
        margin: 0;
    }

    .card-footer {
        margin-top: 1.5rem;
        border-top: 1px solid rgba(255, 255, 255, 0.05);
        padding-top: 1rem;
    }

    .shadow-sm {
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    }

    .shadow {
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    }

    .shadow-lg {
        box-shadow: 0 16px 48px rgba(0, 0, 0, 0.3);
    }
</style>