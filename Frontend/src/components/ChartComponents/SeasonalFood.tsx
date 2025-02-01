import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';
import { Bubble } from 'react-chartjs-2';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend, Title);

const SeasonalFoodChart: React.FC = () => {
  // Dummy data for seasonal food availability
  const data = {
    datasets: [
      {
        label: 'Mango',
        data: [{ x: 5, y: 80, r: 20 }], // May, 80 nutritional value, high availability
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Apple',
        data: [{ x: 9, y: 70, r: 15 }], // September, 70 nutritional value, moderate availability
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Pumpkin',
        data: [{ x: 10, y: 50, r: 25 }], // October, 50 nutritional value, very high availability
        backgroundColor: 'rgba(255, 206, 86, 0.5)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
      {
        label: 'Spinach',
        data: [{ x: 2, y: 90, r: 18 }], // February, 90 nutritional value, high availability
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Seasonal Food Availability',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Months (1 = January, 12 = December)',
        },
        ticks: {
          stepSize: 1,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Nutritional Value (Score)',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div
    className="rounded-lg shadow-input border-2 border-blue-500 shadow-blue-500/50 hover:shadow-[0_0_10px_5px_rgba(0,119,255,1)] hover:border-blue-500 transition-all duration-300 bg-gray-900"
    >
      <Bubble data={data} options={options} />
    </div>
  );
};

export default SeasonalFoodChart;
