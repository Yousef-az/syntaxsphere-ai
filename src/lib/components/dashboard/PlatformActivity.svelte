<script lang="ts">
    export let data: Array<{
        name: string;
        messageCount?: number;
        ticketCount?: number;
        opportunityCount?: number;
        active: boolean;
        lastActivity: string;
    }>;
</script>

<div class="platform-activity">
    {#each data as platform, i}
        <div class="platform-card stagger-item" style="animation-delay: {i * 0.1}s;">
            <div class="platform-header">
                <div class="platform-name">
                    <div class="status-dot" class:active={platform.active}></div>
                    <h4>{platform.name}</h4>
                </div>
                <div class="last-activity">
                    {platform.lastActivity}
                </div>
            </div>

            <div class="platform-stats">
                {#if platform.messageCount !== undefined}
                    <div class="stat">
                        <span class="stat-value">{platform.messageCount}</span>
                        <span class="stat-label">Messages</span>
                    </div>
                {/if}

                {#if platform.ticketCount !== undefined}
                    <div class="stat">
                        <span class="stat-value">{platform.ticketCount}</span>
                        <span class="stat-label">Tickets</span>
                    </div>
                {/if}

                {#if platform.opportunityCount !== undefined}
                    <div class="stat">
                        <span class="stat-value">{platform.opportunityCount}</span>
                        <span class="stat-label">Opportunities</span>
                    </div>
                {/if}
            </div>

            <div class="platform-actions">
                <button class="action-button">
                    View Details
                </button>
            </div>
        </div>
    {/each}
</div>

<style>
    .platform-activity {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .platform-card {
        background: rgba(255, 255, 255, 0.03);
        border-radius: 12px;
        padding: 1rem;
        transition: all 0.2s ease;
    }

    .platform-card:hover {
        background: rgba(255, 255, 255, 0.05);
    }

    .platform-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.75rem;
    }

    .platform-name {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .platform-name h4 {
        font-size: 1rem;
        font-weight: 500;
        color: white;
        margin: 0;
    }

    .status-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
    }

    .status-dot.active {
        background: #2DD4BF;
        box-shadow: 0 0 8px rgba(45, 212, 191, 0.5);
    }

    .last-activity {
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.5);
    }

    .platform-stats {
        display: flex;
        gap: 1.5rem;
        margin-bottom: 1rem;
    }

    .stat {
        display: flex;
        flex-direction: column;
    }

    .stat-value {
        font-size: 1.25rem;
        font-weight: 600;
        color: white;
    }

    .stat-label {
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.5);
    }

    .platform-actions {
        display: flex;
        justify-content: flex-end;
    }

    .action-button {
        background: transparent;
        border: 1px solid rgba(45, 212, 191, 0.3);
        color: #2DD4BF;
        padding: 0.5rem 1rem;
        border-radius: 8px;
        font-size: 0.8rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .action-button:hover {
        background: rgba(45, 212, 191, 0.1);
        border-color: rgba(45, 212, 191, 0.5);
    }
</style>