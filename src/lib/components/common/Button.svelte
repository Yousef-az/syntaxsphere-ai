<script lang="ts">
    export let variant: 'primary' | 'outline' | 'ghost' = 'primary';
    export let size: 'sm' | 'md' | 'lg' = 'md';
    export let disabled: boolean = false;
    export let type: 'button' | 'submit' | 'reset' = 'button';
    export let fullWidth: boolean = false;
    export let icon: any = undefined;
    export let iconPosition: 'left' | 'right' = 'left';
</script>

<button
        {type}
        class="btn btn-{variant} btn-{size}"
        class:disabled
        class:full-width={fullWidth}
        {disabled}
        on:click
>
    {#if icon && iconPosition === 'left'}
        <svelte:component this={icon} size={size === 'sm' ? 14 : size === 'md' ? 16 : 18} />
    {/if}

    <slot></slot>

    {#if icon && iconPosition === 'right'}
        <svelte:component this={icon} size={size === 'sm' ? 14 : size === 'md' ? 16 : 18} />
    {/if}
</button>

<style>
    .btn {
        border-radius: 8px;
        font-weight: 500;
        transition: all 0.3s ease;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        cursor: pointer;
        border: none;
    }

    .btn-primary {
        background: var(--accent);
        color: var(--bg-primary);
    }

    .btn-outline {
        background: transparent;
        border: 1px solid rgba(140, 215, 219, 0.3);
        color: var(--accent);
    }

    .btn-ghost {
        background: transparent;
        color: var(--text-secondary);
    }

    .btn-sm {
        padding: 0.375rem 0.75rem;
        font-size: 0.875rem;
    }

    .btn-md {
        padding: 0.5rem 1rem;
        font-size: 1rem;
    }

    .btn-lg {
        padding: 0.675rem 1.25rem;
        font-size: 1.125rem;
    }

    .btn:hover:not(.disabled) {
        transform: translateY(-2px);
    }

    .btn-primary:hover:not(.disabled) {
        background: #a3e3e8;
        box-shadow: 0 4px 12px rgba(140, 215, 219, 0.3);
    }

    .btn-outline:hover:not(.disabled) {
        background: rgba(140, 215, 219, 0.1);
    }

    .btn-ghost:hover:not(.disabled) {
        color: var(--text-primary);
    }

    .disabled {
        opacity: 0.5;
        cursor: not-allowed;
        pointer-events: none;
    }

    .full-width {
        width: 100%;
    }
</style>