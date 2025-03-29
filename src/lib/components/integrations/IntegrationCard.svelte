<script lang="ts">
    export let integration: {
        id: string;
        name: string;
        icon: string;
        status: string;
        lastSync: string;
        features: string[];
        description: string;
    };
    export let index: number = 0;

    let isExpanded = false;

    function toggleExpand() {
        isExpanded = !isExpanded;
    }
</script>

<div
        class="integration-card stagger-item"
        style="animation-delay: {index * 0.1}s;"
>
    <div class="card-header">
        <div class="integration-icon">
            <img src={integration.icon} alt={integration.name} />
        </div>
        <div class="integration-info">
            <h3 class="integration-name">{integration.name}</h3>
            <div class="integration-status">
                <span class="status-dot connected"></span>
                <span class="status-text">Connected</span>
                <span class="last-sync">Last sync: {integration.lastSync}</span>
            </div>
        </div>
        <button class="expand-button" on:click={toggleExpand}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                {#if isExpanded}
                    <path d="M18 15L12 9L6 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                {:else}
                    <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                {/if}
            </svg>
        </button>
    </div>

    {#if isExpanded}
        <div class="card-body" transition:fade={{ duration: 300 }}>
            <p class="integration-description">
                {integration.description}
            </p>

            <div class="features">
                <h4 class="features-title">Connected Features</h4>
                <div class="features-grid">
                    {#each integration.features as feature}
                        <div class="feature">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 6L9 17L4 12" stroke="#2DD4BF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span>{feature}</span>
                        </div>
                    {/each}
                </div>
            </div>

            <div class="card-actions">
                <button class="card-button">Configure</button>
                <button class="card-button secondary">Sync Now</button>
                <button class="card-button danger">Disconnect</button>
            </div>
        </div>
    {/if}
</div>

<style>
    .integration-card {
        background: rgba(0, 0, 0, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: 16px;
        padding: 1.5rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(20px);
        transition: all 0.3s ease;
    }

    .integration-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
        border-color: rgba(255, 255, 255, 0.1);
    }

    .card-header {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .integration-icon {
        width: 40px;
        height: 40px;
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.05);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px;
        flex-shrink: 0;
    }

    .integration-icon img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        filter: brightness(0) invert(1);
    }

    .integration-info {
        flex: 1;
    }

    .integration-name {
        font-size: 1.1rem;
        font-weight: 600;
        color: white;
        margin: 0 0 0.25rem 0;
    }

    .integration-status {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.8rem;
    }

    .status-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
    }

    .status-dot.connected {
        background: #2DD4BF;
        box-shadow: 0 0 8px rgba(45, 212, 191, 0.5);
    }

    .status-text {
        color: #2DD4BF;
    }

    .last-sync {
        color: rgba(255, 255, 255, 0.5);
        margin-left: 0.5rem;
    }

    .expand-button {
        background: transparent;
        border: none;
        color: rgba(255, 255, 255, 0.7);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
        border-radius: 4px;
        transition: all 0.2s ease;
    }

    .expand-button:hover {
        background: rgba(255, 255, 255, 0.05);
        color: white;
    }

    .card-body {
        margin-top: 1.5rem;
        padding-top: 1.5rem;
        border-top: 1px solid rgba(255, 255, 255, 0.05);
    }

    .integration-description {
        font-size: 0.9rem;
        line-height: 1.5;
        color: rgba(255, 255, 255, 0.8);
        margin-bottom: 1.5rem;
    }

    .features {
        margin-bottom: 1.5rem;
    }

    .features-title {
        font-size: 0.9rem;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.8);
        margin-bottom: 1rem;
    }

    .features-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.75rem;
    }

    .feature {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.85rem;
        color: rgba(255, 255, 255, 0.8);
    }

    .card-actions {
        display: flex;
        gap: 0.75rem;
    }

    .card-button {
        flex: 1;
        background: rgba(45, 212, 191, 0.15);
        border: 1px solid rgba(45, 212, 191, 0.3);
        border-radius: 8px;
        color: #2DD4BF;
        padding: 0.5rem 1rem;
        font-size: 0.85rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .card-button:hover {
        background: rgba(45, 212, 191, 0.25);
    }

    .card-button.secondary {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        color: rgba(255, 255, 255, 0.8);
    }

    .card-button.secondary:hover {
        background: rgba(255, 255, 255, 0.1);
        color: white;
    }

    .card-button.danger {
        background: rgba(248, 113, 113, 0.15);
        border: 1px solid rgba(248, 113, 113, 0.3);
        color: #f87171;
    }

    .card-button.danger:hover {
        background: rgba(248, 113, 113, 0.25);
    }
</style>