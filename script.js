document.addEventListener('DOMContentLoaded', () => {
    const progressText = document.querySelector('.progress-text');
    const progressBar = document.querySelector('.progress-bar');

    if (progressBar) {
        const radius = progressBar.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;

        progressBar.style.strokeDasharray = `${circumference} ${circumference}`;
        progressBar.style.strokeDashoffset = circumference;

        function setProgress(percent) {
            const offset = circumference - (percent / 100) * circumference;
            progressBar.style.strokeDashoffset = offset;
            progressText.textContent = `${percent}%`;
        }

        setProgress(94);
    } else {
        console.error("Progress bar element not found. Please ensure an SVG circle with class 'progress-bar' exists.");
    }

    function createLineChart(ctx, labels, data, borderColor, backgroundColor, tension, displayXAxisLabels) {
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    borderColor: borderColor,
                    backgroundColor: backgroundColor,
                    fill: true,
                    tension: tension,
                    pointRadius: 0,
                    borderWidth: 2
                }]
            },
            options: {
                // responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        display: displayXAxisLabels,
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: 'var(--light-text-color)'
                        }
                    },
                    y: {
                        display: false
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: false
                    }
                },
                elements: {
                    line: {
                        tension: 0.4
                    }
                }
            }
        });
    }

    const healthTrendLabels = ['11', '10', '17', '12', '23', '26', '24'];

    const healthTrendCtx = document.getElementById('healthTrendChart');
    if (healthTrendCtx) {
        createLineChart(
            healthTrendCtx,
            healthTrendLabels,
            [20, 25, 22, 30, 28, 35, 32],
            // 'var(--active-item-bg)',
            // 'var(--performance-chart-fill-color)',
            // 0.4,
            // true
        );
    }

    const patchComplianceCtx = document.getElementById('patchComplianceChart');
    if (patchComplianceCtx) {
        createLineChart(
            patchComplianceCtx,
            ['', '', '', '', '', '', ''],
            [40, 0, 180, 30, 100, 150, 0, 145, 160, 0, 180],
            // 'var(--active-item-bg)',
            // 'var(--performance-chart-fill-color)',
            // 0.4,
            // false
        );
    }

    const cpuLoadCtx = document.getElementById('cpuLoadChart');
    if (cpuLoadCtx) {
        createLineChart(
            cpuLoadCtx,
            ['', '', '', '', '', ''],
            [10, 15, 12, 18, 14, 20],
            // 'var(--active-item-bg)',
            // 'var(--performance-chart-fill-color)',
            // 0.5,
            // false
        );
    }

    const ramUsageCtx = document.getElementById('ramUsageChart');
    if (ramUsageCtx) {
        createLineChart(
            ramUsageCtx,
            ['', '', '', '', '', ''],
            [50, 55, 60, 58, 65, 62],
            // 'var(--active-item-bg)',
            // 'var(--performance-chart-fill-color)',
            // 0.5,
            // false
        );
    }
});