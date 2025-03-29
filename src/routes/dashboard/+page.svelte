<script lang="ts">
    import { fade } from 'svelte/transition';
    import DashboardCard from '$lib/components/dashboard/DashboardCard.svelte';
    import LineChart from '$lib/components/dashboard/LineChart.svelte';
    import DonutChart from '$lib/components/dashboard/DonutChart.svelte';
    import SalesTable from '$lib/components/dashboard/SalesTable.svelte';
    import PlatformActivity from '$lib/components/dashboard/PlatformActivity.svelte';
    import AiInsights from '$lib/components/dashboard/AiInsights.svelte';

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
        { label: 'Direct Website visits', value: 35, color: '#2DD4BF' },
        { label: 'Partner sites', value: 25, color: '#9C8EED' },
        { label: 'Social Media', value: 20, color: '#FF6B8B' },
        { label: 'Other', value: 20, color: '#3BCCA8' }
    ];

    const salesData = [
        { id: '1', customer: 'John Doe', amount: 2500.00, status: 'completed', date: '2025-03-21' },
        { id: '2', customer: 'Jane Smith', amount: 1200.50, status: 'pending', date: '2025-03-22' },
        { id: '3', customer: 'Robert Johnson', amount: 3750.25, status: 'completed', date: '2025-03-23' },
        { id: '4', customer: 'Emily Davis', amount: 850.00, status: 'failed', date: '2025-03-25' },
        { id: '5', customer: 'Michael Wilson', amount: 1650.75, status: 'completed', date: '2025-03-26' }
    ];

    const platformData = [
        { name: 'Slack', messageCount: 128, active: true, lastActivity: '5 min ago' },
        { name: 'Zoho', ticketCount: 23, active: true, lastActivity: '17 min ago' },
        { name: 'Salesforce', opportunityCount: 12, active: true, lastActivity: '43 min ago' }
    ];

    const insightsData = [
        {
            title: 'Sales Opportunity',
            description: 'Customer engagement is 35% higher on Slack than email, consider moving more communication there.',
            source: 'Slack + CRM data',
            impact: 'High'
        },
        {
            title: 'Support Bottleneck',
            description: 'Ticket resolution time has increased by 24% in the last week. Additional staffing recommended.',
            source: 'Zoho + Scheduling data',
            impact: 'Medium'
        },
        {
            title: 'Revenue Forecast',
            description: 'Based on current pipeline, Q2 targets will be exceeded by approximately 12%.',
            source: 'Salesforce + Financial data',
            impact: 'High'
        }
    ];
</script>

<div class="dashboard">
    <header class="dashboard-header">
        <h1 in:fade={{ duration: 600, delay: 100 }}>Dashboard</h1>

        <div class="timeframe-selector" in:fade={{ duration: 600, delay: 200 }}>
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
        {#each cardData as card, i}
            <DashboardCard
                    title={card.title}
                    value={card.value}
                    percentChange={card.percentChange}
                    index={i}
            />
        {/each}
    </div>

    <div class="charts-section" in:fade={{ duration: 600, delay: 300 }}>
        <div class="chart-card sales-chart">
            <h3 class="chart-title">Sales details</h3>
            <LineChart data={lineData} title="Sales" color="#2DD4BF" />
        </div>

        <div class="chart-card traffic-chart">
            <DonutChart data={donutData} title="Traffic by location" />
        </div>
    </div>

    <div class="integration-section" in:fade={{ duration: 600, delay: 400 }}>
        <div class="integration-grid">
            <div class="platform-activity-card">
                <h3 class="section-title">Platform Activity</h3>
                <PlatformActivity data={platformData} />
            </div>

            <div class="ai-insights-card">
                <h3 class="section-title">AI Insights</h3>
                <AiInsights data={insightsData} />
            </div>
        </div>
    </div>

    <div class="sales-section" in:fade={{ duration: 600, delay: 500 }}>
        <h3 class="section-title">Recent Sales</h3>
        <SalesTable data={salesData} />
    </div>
</div>

<style>
    .dashboard {
        max-width: 1800px;
        margin: 0 auto;
    }

    .dashboard-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
    }

    h1 {
        font-size: 2rem;
        font-weight: 600;
        background: linear-gradient(90deg, #fff, #5EEAD4);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .timeframe-selector {
        display: flex;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 12px;
        padding: 0.25rem;
        border: 1px solid rgba(255, 255, 255, 0.05);
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
        background: rgba(255, 255, 255, 0.05);
    }

    .timeframe-button.selected {
        background: rgba(45, 212, 191, 0.2);
        color: #2DD4BF;
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

    .integration-section {
        margin-bottom: 2rem;
    }

    .integration-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
    }

    .platform-activity-card, .ai-insights-card {
        background: rgba(0, 0, 0, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: 16px;
        padding: 1.5rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(20px);
    }

    .chart-card {
        background: rgba(0, 0, 0, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: 16px;
        padding: 1.5rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(20px);
        height: 400px;
        transition: all 0.3s ease;
    }

    .chart-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
        border-color: rgba(255, 255, 255, 0.1);
    }

    .chart-title, .section-title {
        color: rgba(255, 255, 255, 0.8);
        font-size: 1rem;
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

        .charts-section, .integration-grid {
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