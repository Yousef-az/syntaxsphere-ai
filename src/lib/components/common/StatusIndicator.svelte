<script lang="ts">
    export let status: 'success' | 'error' | 'warning' | 'info' | 'neutral' = 'neutral';
    export let size: 'sm' | 'md' | 'lg' = 'md';
    export let showLabel: boolean = true;
    export let label: string | undefined = undefined;

    const statusColors = {
        success: 'var(--success)',
        error: 'var(--error)',
        warning: 'var(--warning)',
        info: 'var(--info)',
        neutral: 'var(--text-secondary)'
    };

    const statusLabels = {
        success: 'Success',
        error: 'Error',
        warning: 'Warning',
        info: 'Info',
        neutral: 'Neutral'
    };

    const sizeMap = {
        sm: '6px',
        md: '8px',
        lg: '10px'
    };

    $: displayLabel = label || statusLabels[status];
    $: dotSize = sizeMap[size];
</script>

<div class="status-indicator">
    <span
            class="indicator-dot {status}"
            style="width: {dotSize}; height: {dotSize};"
    ></span>
    {#if showLabel}
        <span class="indicator-label">{displayLabel}</span>
    {/if}
</div>

<style>
    .status-indicator {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
    }

    .indicator-dot {
        display: inline-block;
        border-radius: 50%;
        box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
    }

    .success {
        background-color: var(--success);
        box-shadow: 0 0 5px rgba(74, 222, 128, 0.5);
    }

    .error {
        background-color: var(--error);
        box-shadow: 0 0 5px rgba(248, 113, 113, 0.5);
    }

    .warning {
        background-color: var(--warning);
        box-shadow: 0 0 5px rgba(255, 179, 109, 0.5);
    }

    .info {
        background-color: var(--info);
        box-shadow: 0 0 5px rgba(156, 142, 237, 0.5);
    }

    .neutral {
        background-color: var(--text-secondary);
    }

    .indicator-label {
        font-size: 0.85rem;
        font-weight: 500;
        color: var(--text-secondary);
    }
</style>