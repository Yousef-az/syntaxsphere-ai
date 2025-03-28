<script lang="ts">
    export let title: string;
    export let value: string | number;
    export let percentChange: number;
    export let isPositive: boolean = percentChange >= 0;
</script>

<div class="dashboard-card">
    <div class="card-header">
        <h3>{title}</h3>
    </div>
    <div class="card-body">
        <div class="value">{value}</div>
        <div class="percent-change" class:positive={isPositive} class:negative={!isPositive}>
            {isPositive ? '+' : ''}{percentChange}%
        </div>
    </div>
</div>

<style>
    .dashboard-card {
        background: rgba(20, 24, 33, 0.7);
        border: 1px solid rgba(132, 215, 219, 0.1);
        border-radius: 12px;
        padding: 1.5rem;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(10px);
        transition: all 0.3s ease;
    }

    .dashboard-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 48px rgba(0, 0, 0, 0.3);
        border-color: rgba(132, 215, 219, 0.3);
    }

    .card-header h3 {
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.9rem;
        font-weight: 500;
        margin-bottom: 0.75rem;
    }

    .card-body {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
    }

    .value {
        font-size: 1.8rem;
        font-weight: 600;
        color: white;
    }

    .percent-change {
        font-size: 0.9rem;
        font-weight: 500;
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
    }

    .positive {
        color: #4ade80;
        background: rgba(74, 222, 128, 0.1);
    }

    .negative {
        color: #f87171;
        background: rgba(248, 113, 113, 0.1);
    }
</style>