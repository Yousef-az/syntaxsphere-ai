<script lang="ts">
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';

    export let data: {x: string, y: number}[];
    export let title: string;
    export let color: string = '#8CD7DB';

    let canvas: HTMLCanvasElement;
    let chart: Chart;

    onMount(() => {
        const ctx = canvas.getContext('2d');

        if (ctx) {
            chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: data.map(d => d.x),
                    datasets: [{
                        label: title,
                        data: data.map(d => d.y),
                        borderColor: color,
                        backgroundColor: createGradient(ctx, color),
                        borderWidth: 2,
                        pointRadius: 0,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: color,
                        pointHoverBorderColor: '#fff',
                        tension: 0.4,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            backgroundColor: 'rgba(20, 24, 33, 0.9)',
                            titleColor: 'rgba(255, 255, 255, 0.7)',
                            bodyColor: '#fff',
                            borderColor: 'rgba(132, 215, 219, 0.3)',
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

    function createGradient(ctx: CanvasRenderingContext2D, color: string) {
        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
        const rgbColor = hexToRgb(color);
        gradient.addColorStop(0, `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, 0.4)`);
        gradient.addColorStop(1, `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, 0)`);
        return gradient;
    }

    function hexToRgb(hex: string) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : { r: 0, g: 0, b: 0 };
    }
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