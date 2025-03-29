<script lang="ts">
    export let text: string;
    export let insights: string[];
</script>

<div class="analytics-summary">
    <div class="summary-text">
        {text}
    </div>

    <div class="insights-list">
        <h4 class="insights-header">Key Insights</h4>
        <ul>
            {#each insights as insight, i}
                <li class="insight-item stagger-item" style="animation-delay: {i * 0.1 + 0.3}s;">
                    <div class="insight-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="#2DD4BF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="insight-text">{insight}</div>
                </li>
            {/each}
        </ul>
    </div>

    <div class="action-buttons">
        <button class="action-button">
            <span>Generate Report</span>
        </button>
        <button class="action-button secondary">
            <span>Share Insights</span>
        </button>
    </div>
</div>

<style>
    .analytics-summary {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .summary-text {
        font-size: 0.95rem;
        line-height: 1.6;
        color: rgba(255, 255, 255, 0.9);
        margin-bottom: 1.5rem;
        padding-bottom: 1.5rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    .insights-header {
        font-size: 0.9rem;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.8);
        margin-bottom: 1rem;
    }

    .insights-list {
        flex: 1;
        margin-bottom: 1.5rem;
    }

    .insight-item {
        display: flex;
        align-items: flex-start;
        gap: 0.75rem;
        margin-bottom: 1rem;
    }

    .insight-icon {
        margin-top: 0.25rem;
        flex-shrink: 0;
    }

    .insight-text {
        font-size: 0.9rem;
        line-height: 1.5;
        color: rgba(255, 255, 255, 0.8);
    }

    .action-buttons {
        display: flex;
        gap: 1rem;
    }

    .action-button {
        flex: 1;
        background: rgba(45, 212, 191, 0.15);
        border: 1px solid rgba(45, 212, 191, 0.3);
        border-radius: 8px;
        color: #2DD4BF;
        padding: 0.75rem 1rem;
        font-size: 0.9rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .action-button:hover {
        background: rgba(45, 212, 191, 0.25);
    }

    .action-button.secondary {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        color: rgba(255, 255, 255, 0.8);
    }

    .action-button.secondary:hover {
        background: rgba(255, 255, 255, 0.1);
        color: white;
    }
</style>