<script lang="ts">
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';

    export let data: {channel: string, value: number}[];
    export let title: string;
    export let color: string = '#2DD4BF';

    let canvas: HTMLCanvasElement;
    let chart: Chart;

    onMount(() => {
        const ctx = canvas.getContext('2d');

        if (ctx) {
            chart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: data.map(d => d.channel),
                    datasets: [{
                        label: title,
                        data: data.map(d => d.value),
                        backgroundColor: color + '80', // adding alpha
                        borderColor: color,
                        borderWidth: 1,
                        borderRadius: 4,
                        maxBarThickness: 40
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    animation: {
                        duration: 1500,
                        easing: 'easeOutQuart'
                    },
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            titleColor: 'rgba(255, 255, 255, 0.9)',
                            bodyColor: '#fff',
                            borderColor: 'rgba(255, 255, 255, 0.1)',
                            borderWidth: 1,
                            cornerRadius: 8,
                            displayColors: false,
                            padding: 12
                        }
                    },
                    scales: {
                        x: {
                            grid: {
                                display: false
                            },
                            ticks: {
                                color: 'rgba(255, 255, 255, 0.5)',
                                font: {
                                    size: 10
                                }
                            }
                        },
                        y: {
                            grid: {
                                color: 'rgba(255, 255, 255, 0.05)'
                            },
                            ticks: {
                                color: 'rgba(255, 255, 255, 0.5)',
                                font: {
                                    size: 10
                                }
                            },
                            beginAtZero: true
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
    <canvas bind:this={canvas} height="300"></canvas>
</div>

<style>
    .chart-container {
        width: 100%;
        height: 300px;
        padding: 1rem 0;
    }
</style>