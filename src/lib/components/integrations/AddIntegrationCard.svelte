<script lang="ts">
    export let integration: {
        id: string;
        name: string;
        icon: string;
        status: string;
        features: string[];
        description: string;
    };
    export let index: number = 0;
</script>

<div
        class="integration-card stagger-item"
        style="animation-delay: {index * 0.1 + 0.3}s;"
>
    <div class="card-header">
        <div class="integration-icon">
            <img src={integration.icon} alt={integration.name} />
        </div>
        <div class="integration-info">
            <h3 class="integration-name">{integration.name}</h3>
            <div class="features-list">
                {integration.features.join(' • ')}
            </div>
        </div>
    </div>

    <div class="card-body">
        <p class="integration-description">
            {integration.description}
        </p>

        <div class="card-actions">
            <button class="card-button">Connect {integration.name}</button>
        </div>
    </div>
</div>

<style>
    .integration-card {
        background: rgba(0, 0, 0, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.03);
        border-radius: 16px;
        padding: 1.5rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        backdrop-filter: blur(20px);
        transition: all 0.3s ease;
    }

    .integration-card:hover {
        transform: translateY(-4px);
        background: rgba(0, 0, 0, 0.3);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
        border-color: rgba(255, 255, 255, 0.08);
    }

    .card-header {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1.5rem;
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

    .features-list {
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.5);
    }

    .card-body {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .integration-description {
        font-size: 0.9rem;
        line-height: 1.5;
        color: rgba(255, 255, 255, 0.7);
    }

    .card-actions {
        display: flex;
    }

    .card-button {
        flex: 1;
        background: rgba(45, 212, 191, 0.15);
        border: 1px solid rgba(45, 212, 191, 0.3);
        border-radius: 8px;
        color: #2DD4BF;
        padding: 0.75rem 1rem;
        font-size: 0.85rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .card-button:hover {
        background: rgba(45, 212, 191, 0.25);
    }
</style>