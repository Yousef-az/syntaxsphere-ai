<script lang="ts">
    export let data: Array<{
        title: string;
        description: string;
        source: string;
        impact: 'High' | 'Medium' | 'Low';
    }>;

    const impactClasses = {
        'High': 'bg-purple-500/10 text-purple-400',
        'Medium': 'bg-blue-500/10 text-blue-400',
        'Low': 'bg-gray-500/10 text-gray-400'
    };
</script>

<div class="ai-insights">
    {#each data as insight, i}
        <div class="insight-card stagger-item" style="animation-delay: {i * 0.1}s;">
            <div class="insight-header">
                <h4>{insight.title}</h4>
                <div class="impact-tag {impactClasses[insight.impact]}">
                    {insight.impact} Impact
                </div>
            </div>

            <p class="insight-description">
                {insight.description}
            </p>

            <div class="insight-footer">
                <div class="source">
                    Source: {insight.source}
                </div>
                <button class="action-button">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
    {/each}
</div>

<style>
    .ai-insights {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .insight-card {
        background: rgba(255, 255, 255, 0.03);
        border-radius: 12px;
        padding: 1rem;
        transition: all 0.2s ease;
    }

    .insight-card:hover {
        background: rgba(255, 255, 255, 0.05);
    }

    .insight-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.75rem;
    }

    .insight-header h4 {
        font-size: 1rem;
        font-weight: 500;
        color: white;
        margin: 0;
    }

    .impact-tag {
        font-size: 0.7rem;
        font-weight: 600;
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    .insight-description {
        font-size: 0.9rem;
        line-height: 1.5;
        color: rgba(255, 255, 255, 0.8);
        margin-bottom: 1rem;
    }

    .insight-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .source {
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.5);
    }

    .action-button {
        background: transparent;
        border: none;
        color: #2DD4BF;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        width: 28px;
        height: 28px;
        border-radius: 4px;
        transition: all 0.2s ease;
    }

    .action-button:hover {
        background: rgba(45, 212, 191, 0.1);
    }
</style>