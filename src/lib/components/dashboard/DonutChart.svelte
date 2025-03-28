<script lang="ts">
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';

    export let data: { label: string; value: number; color: string }[];
    export let title: string;

    let canvas: HTMLCanvasElement;
    let chart: Chart;

    onMount(() => {
        const ctx = canvas.getContext('2d');

        if (ctx) {
            chart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: data.map(d => d.label),
                    datasets: [{
                        data: data.map(d => d.value),
                        backgroundColor: data.map(d => d.color),
                        borderColor: 'rgba(20, 24, 33, 0.7)',
                        borderWidth: 2,
                        borderRadius: 4,
                        hoverOffset: 6
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    cutout: '75%',
                    plugins: {
                        legend: {
                            position: 'right',
                            labels: {
                                color: 'rgba(255, 255, 255, 0.7)',
                                padding: 16,
                                font: {
                                    size: 11
                                },
                                generateLabels: function(chart) {
                                    const original = Chart.overrides.doughnut.plugins.legend.labels.generateLabels;
                                    const labels = original.call(this, chart);

                                    labels.forEach((label, i) => {
                                        label.text = `${label.text}: ${data[i].value}%`;
                                    });

                                    return labels;
                                }
                            }
                        },
                        tooltip: {
                            backgroundColor: 'rgba(20, 24, 33, 0.9)',
                            titleColor: 'rgba(255, 255, 255, 0.7)',
                            bodyColor: '#fff',
                            borderColor: 'rgba(132, 215, 219, 0.3)',
                            borderWidth: 1,
                            cornerRadius: 8,
                            displayColors: false,
                            padding: 12,
                            callbacks: {
                                label: function(context) {
                                    return `${context.label}: ${context.raw}%`;
                                }
                            }
                        }
                    }
                }
            });
        }

        return () => {
            if (chart) {
                chart.destroy();
            }
        };
    });
</script>

<div class="chart-container">
    <h3 class="chart-title">{title}</h3>
    <div class="donut-wrapper">
        <canvas bind:this={canvas}></canvas>
    </div>
</div>

<style>
    .chart-container {
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .chart-title {
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.9rem;
        font-weight: 500;
        margin-bottom: 1rem;
    }

    .donut-wrapper {
        flex: 1;
        position: relative;
    }
</style>