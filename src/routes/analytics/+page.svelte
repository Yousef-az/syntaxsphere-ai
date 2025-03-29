<script lang="ts">
    import { fade } from 'svelte/transition';
    import LineChart from '$lib/components/dashboard/LineChart.svelte';
    import DonutChart from '$lib/components/dashboard/DonutChart.svelte';
    import BarChart from '$lib/components/analytics/BarChart.svelte';
    import MetricSelector from '$lib/components/analytics/MetricSelector.svelte';
    import AnalyticsSummary from '$lib/components/analytics/AnalyticsSummary.svelte';

    // Sample data
    const timeFrames = ['1D', '7D', '14D', '1M', '3M', '6M', '1Y', 'All Time'];
    let selectedTimeFrame = '1M';

    const platformMetrics = ['Engagement', 'Conversion', 'Revenue', 'Support'];
    let selectedMetric = 'Engagement';

    const engagementData = [
        { x: 'Jan', y: 200, slack: 80, zoho: 50, salesforce: 70 },
        { x: 'Feb', y: 320, slack: 120, zoho: 90, salesforce: 110 },
        { x: 'Mar', y: 280, slack: 100, zoho: 80, salesforce: 100 },
        { x: 'Apr', y: 450, slack: 200, zoho: 120, salesforce: 130 },
        { x: 'May', y: 350, slack: 150, zoho: 90, salesforce: 110 },
        { x: 'Jun', y: 320, slack: 130, zoho: 95, salesforce: 95 }
    ];

    const platformContribution = [
        { label: 'Slack', value: 40, color: '#4A154B' },
        { label: 'Zoho', value: 25, color: '#C12222' },
        { label: 'Salesforce', value: 35, color: '#00A1E0' }
    ];

    const channelPerformance = [
        { channel: 'Email', engagement: 65, conversion: 2.4, revenue: 12500 },
        { channel: 'Social', engagement: 85, conversion: 1.8, revenue: 8300 },
        { channel: 'Direct', engagement: 45, conversion: 3.2, revenue: 18200 },
        { channel: 'Referral', engagement: 72, conversion: 2.7, revenue: 15600 },
        { channel: 'Organic', engagement: 58, conversion: 2.1, revenue: 9800 }
    ];

    const insights = [
        "Cross-platform engagement is 27% higher than single-platform engagement",
        "Slack communication leads to 35% faster deal closure compared to email",
        "Support tickets resolved through Zoho integration have 42% higher customer satisfaction"
    ];

    // Reactive data based on selected metric
    $: selectedData = getDataForMetric(selectedMetric);

    function getDataForMetric(metric) {
        switch (metric) {
            case 'Engagement':
                return {
                    lineData: engagementData,
                    barData: channelPerformance.map(item => ({
                        channel: item.channel,
                        value: item.engagement
                    })),
                    summaryText: "Overall platform engagement increased by 23% compared to previous period, with Slack showing the strongest growth at 31%."
                };
            case 'Conversion':
                return {
                    lineData: engagementData.map(item => ({
                        x: item.x,
                        y: item.y * 0.024,
                        slack: item.slack * 0.031,
                        zoho: item.zoho * 0.022,
                        salesforce: item.salesforce * 0.028
                    })),
                    barData: channelPerformance.map(item => ({
                        channel: item.channel,
                        value: item.conversion
                    })),
                    summaryText: "Conversion rates have improved by 12% on average, with direct and referral channels showing the strongest performance."
                };
            case 'Revenue':
                return {
                    lineData: engagementData.map(item => ({
                        x: item.x,
                        y: item.y * 50,
                        slack: item.slack * 55,
                        zoho: item.zoho * 45,
                        salesforce: item.salesforce * 60
                    })),
                    barData: channelPerformance.map(item => ({
                        channel: item.channel,
                        value: item.revenue / 1000
                    })),
                    summaryText: "Revenue generation is up 18% from integrations, with Salesforce leads converting at the highest monetary value."
                };
            case 'Support':
                return {
                    lineData: engagementData.map(item => ({
                        x: item.x,
                        y: item.y * 0.3,
                        slack: item.slack * 0.25,
                        zoho: item.zoho * 0.45,
                        salesforce: item.salesforce * 0.15
                    })),
                    barData: [
                        { channel: 'Response Time', value: 4.2 },
                        { channel: 'Resolution Rate', value: 7.8 },
                        { channel: 'Satisfaction', value: 8.5 },
                        { channel: 'Follow-ups', value: 3.1 },
                        { channel: 'Escalations', value: 1.2 }
                    ],
                    summaryText: "Support metrics show a 15% improvement in response time and 24% improvement in resolution rates when using integrated platforms."
                };
            default:
                return {
                    lineData: engagementData,
                    barData: channelPerformance.map(item => ({
                        channel: item.channel,
                        value: item.engagement
                    })),
                    summaryText: "Overall platform engagement is strong across integrated services."
                };
        }
    }
</script>

<div class="analytics">
    <header class="analytics-header">
        <div class="header-left">
            <h1 in:fade={{ duration: 600, delay: 100 }}>Cross-Platform Analytics</h1>
            <p class="subtitle">Unified insights across all your connected platforms</p>
        </div>

        <div class="header-right">
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
        </div>
    </header>

    <div class="metric-selection">
        <MetricSelector
                metrics={platformMetrics}
                selected={selectedMetric}
                onSelect={(metric) => selectedMetric = metric}
        />
    </div>

    <div class="analytics-grid">
        <div class="chart-section">
            <div class="chart-card">
                <h3 class="chart-title">{selectedMetric} Over Time</h3>
                <LineChart data={selectedData.lineData} title={selectedMetric} color="#2DD4BF" />
            </div>

            <div class="secondary-charts">
                <div class="chart-card">
                    <h3 class="chart-title">Platform Contribution</h3>
                    <DonutChart data={platformContribution} title="Contribution" />
                </div>

                <div class="chart-card">
                    <h3 class="chart-title">Channel Performance</h3>
                    <BarChart data={selectedData.barData} title={selectedMetric} />
                </div>
            </div>
        </div>

        <div class="insights-section">
            <div class="insights-card">
                <h3 class="insights-title">Cross-Platform Insights</h3>
                <AnalyticsSummary
                        text={selectedData.summaryText}
                        insights={insights}
                />
            </div>
        </div>
    </div>
</div>

<style>
    .analytics {
        max-width: 1800px;
        margin: 0 auto;
    }

    .analytics-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 1.5rem;
    }

    h1 {
        font-size: 2rem;
        font-weight: 600;
        background: linear-gradient(90deg, #fff, #5EEAD4);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom: 0.5rem;
    }

    .subtitle {
        color: rgba(255, 255, 255, 0.6);
        font-size: 0.9rem;
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

    .metric-selection {
        margin-bottom: 2rem;
    }

    .analytics-grid {
        display: grid;
        grid-template-columns: 7fr 3fr;
        gap: 1.5rem;
    }

    .chart-section {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .secondary-charts {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
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

    .chart-title, .insights-title {
        color: rgba(255, 255, 255, 0.8);
        font-size: 1rem;
        font-weight: 500;
        margin-bottom: 1rem;
    }

    .insights-section {
        display: flex;
        flex-direction: column;
    }

    .insights-card {
        background: rgba(0, 0, 0, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: 16px;
        padding: 1.5rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(20px);
        height: 100%;
    }

    @media (max-width: 1200px) {
        .analytics-grid {
            grid-template-columns: 1fr;
        }

        .secondary-charts {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 768px) {
        .analytics-header {
            flex-direction: column;
            gap: 1rem;
        }

        .header-right {
            width: 100%;
        }
    }
</style>