import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function ChartCard() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Gradient colors
    const gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#4b4a4aff");
    gradientStroke.addColorStop(1, "#7a7a7aff");

    const gradientBkgrd = ctx.createLinearGradient(0, 100, 0, 400);
   
    gradientBkgrd.addColorStop(0, "rgba(255,108,0,0.4)");
gradientBkgrd.addColorStop(1, "rgba(255,59,116,0)");

    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
        datasets: [
          {
            label: "Views",
            backgroundColor: gradientBkgrd,
            borderColor: gradientStroke,
            data: [1000, 990, 1200, 1000, 1200, 1100, 1300, 1200],
            pointBorderColor: "rgba(255,255,255,0)",
            pointBackgroundColor: "rgba(255,255,255,0)",
            pointHoverRadius: 8,
            pointHoverBackgroundColor: gradientStroke,
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 4,
            pointRadius: 1,
            borderWidth: 5,
            pointHitRadius: 16,
              tension: 0.4,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            backgroundColor: "#fff",
            titleColor: "#000",
            bodyColor: "#000",
            displayColors: false,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            ticks: {
              callback: (value) => value / 1000 + "K",
            },
          },
        },
      },
    });

    // Cleanup on unmount
    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className="row-chart">
      <div className="chart__container">
        <canvas ref={chartRef} width="600" height="300"></canvas>
      </div>
    </div>
  );
}
