<script lang="ts">
    export let metrics: string[];
    export let selected: string;
    export let onSelect: (metric: string) => void;
</script>

<div class="metric-selector">
    {#each metrics as metric}
        <button
                class="metric-button"
                class:selected={selected === metric}
                on:click={() => onSelect(metric)}
        >
            <span class="metric-text">{metric}</span>
        </button>
    {/each}
</div>

<style>
    .metric-selector {
        display: flex;
        gap: 1rem;
        margin-bottom: 1rem;
    }

    .metric-button {
        background: rgba(0, 0, 0, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: 12px;
        padding: 0.75rem 1.5rem;
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.9rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .metric-button:hover {
        background: rgba(0, 0, 0, 0.4);
        border-color: rgba(255, 255, 255, 0.1);
        color: white;
    }

    .metric-button.selected {
        background: rgba(45, 212, 191, 0.15);
        border-color: rgba(45, 212, 191, 0.3);
        color: #2DD4BF;
    }

    .metric-text {
        display: inline-block;
    }

    @media (max-width: 768px) {
        .metric-selector {
            flex-wrap: wrap;
        }

        .metric-button {
            flex: 1;
            min-width: 120px;
            text-align: center;
        }
    }
</style>