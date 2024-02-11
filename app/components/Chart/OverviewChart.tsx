import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface OverviewChartProps {
  data: number[];
  labels: string[];
}

const OverviewChart: React.FC<OverviewChartProps> = ({ data, labels }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart>();

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }

        chartInstanceRef.current = new Chart(ctx, {
          type: 'line',
          data: {
            labels,
            datasets: [{
              label: 'Line Chart',
              data,
              borderColor: 'rgb(185, 28, 28)',
              tension: 0.1,
            }]
          }
        });
      }
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [data, labels]);

  return (
    <div className='bg-white p-4 rounded-lg h-3/4 w-3/4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
      <canvas ref={chartRef} />
    </div>
  );
}

export default OverviewChart;

