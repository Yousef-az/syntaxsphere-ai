<script lang="ts">
    import DashboardCard from '$lib/components/dashboard/DashboardCard.svelte';
    import LineChart from '$lib/components/dashboard/LineChart.svelte';
    import DonutChart from '$lib/components/dashboard/DonutChart.svelte';
    import SalesTable from '$lib/components/dashboard/SalesTable.svelte';

    // Sample data
    const cardData = [
        { title: 'Views', value: '9234', percentChange: 41.2 },
        { title: 'Visits', value: '4123', percentChange: -2.5 },
        { title: 'New Clients', value: '123', percentChange: 10.2 },
        { title: 'Active Users', value: '2135', percentChange: 27.4 }
    ];

    const timeFrames = ['1D', '7D', '14D', '1M', '3M', '6M', '1Y', 'All Time'];
    let selectedTimeFrame = '1M';

    const lineData = [
        { x: 'Jan', y: 200 },
        { x: 'Feb', y: 320 },
        { x: 'Mar', y: 280 },
        { x: 'Apr', y: 450 },
        { x: 'May', y: 350 },
        { x: 'Jun', y: 320 }
    ];

    const donutData = [
        { label: 'Direct Website visits', value: 35, color: '#8CD7DB' },
        { label: 'Partner sites', value: 25, color: '#9C8EED' },
        { label: 'Social Media', value: 20, color: '#FFB36D' },
        { label: 'Other', value: 20, color: '#8BD8A5' }
    ];

    const salesData = [
        { id: '1', customer: 'John Doe', amount: 2500.00, status: 'completed', date: '2025-03-21' },
        { id: '2', customer: 'Jane Smith', amount: 1200.50, status: 'pending', date: '2025-03-22' },
        { id: '3', customer: 'Robert Johnson', amount: 3750.25, status: 'completed', date: '2025-03-23' },
        { id: '4', customer: 'Emily Davis', amount: 850.00, status: 'failed', date: '2025-03-25' },
        { id: '5', customer: 'Michael Wilson', amount: 1650.75, status: 'completed', date: '2025-03-26' }
    ];
</script>

<div class="dashboard">
    <header class="dashboard-header">
        <h1>Dashboard</h1>

        <div class="timeframe-selector">
            {#each timeFrames as frame}
                <button
                        class="timeframe-button"
                        class:selected={selectedTimeFrame === frame}
                        on:click={() => selectedTimeFrame = frame}
                >
                    {frame}
                </button>
            {/each}
        </div>
    </header>

    <div class="metrics-grid">
        {#each cardData as card}
            <DashboardCard
                    title={card.title}
                    value={card.value}
                    percentChange={card.percentChange}
            />
        {/each}
    </div>

    <div class="charts-section">
        <div class="chart-card sales-chart">
            <h3 class="chart-title">Sales details</h3>
            <LineChart data={lineData} title="Sales" color="#8CD7DB" />
        </div>

        <div class="chart-card traffic-chart">
            <DonutChart data={donutData} title="Traffic by location" />
        </div>
    </div>

    <div class="sales-section">
        <h3 class="section-title">Recent Sales</h3>
        <SalesTable data={salesData} />
    </div>
</div>

<style>
    .dashboard {
        max-width: 1600px;
        margin: 0 auto;
    }

    .dashboard-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
    }

    h1 {
        font-size: 1.8rem;
        font-weight: 600;
    }

    .timeframe-selector {
        display: flex;
        background: rgba(20, 24, 33, 0.7);
        border-radius: 12px;
        padding: 0.25rem;
        border: 1px solid rgba(132, 215, 219, 0.1);
    }

    .timeframe-button {
        background: transparent;
        border: none;
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.8rem;
        font-weight: 500;
        padding: 0.5rem 0.75rem;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .timeframe-button:hover {
        color: white;
    }

    .timeframe-button.selected {
        background: rgba(132, 215, 219, 0.2);
        color: #8CD7DB;
    }

    .metrics-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1.5rem;
        margin-bottom: 2rem;
    }

    .charts-section {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 1.5rem;
        margin-bottom: 2rem;
    }

    .chart-card {
        background: rgba(20, 24, 33, 0.7);
        border: 1px solid rgba(132, 215, 219, 0.1);
        border-radius: 12px;
        padding: 1.5rem;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(10px);
        height: 400px;
        transition: all 0.3s ease;
    }

    .chart-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 48px rgba(0, 0, 0, 0.3);
        border-color: rgba(132, 215, 219, 0.3);
    }

    .chart-title, .section-title {
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.9rem;
        font-weight: 500;
        margin-bottom: 1rem;
    }

    .sales-section {
        margin-top: 2rem;
    }

    @media (max-width: 1200px) {
        .metrics-grid {
            grid-template-columns: repeat(2, 1fr);
        }

        .charts-section {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 768px) {
        .metrics-grid {
            grid-template-columns: 1fr;
        }

        .dashboard-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
        }
    }
</style>