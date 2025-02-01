import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const WeightProgressChart: React.FC = () => {
  // Dummy data for weight tracking
  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'], // Time intervals
    datasets: [
      {
        label: 'Weight (kg)',
        data: [45, 46, 47.5, 50, 53, 55], // Weight data points
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.4, // Smoothing of the line
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
        text: 'Weight Management Progress',
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        title: {
          display: true,
          text: 'Weight (kg)',
        },
        ticks: {
          stepSize: 0.5,
        },
      },
      x: {
        title: {
          display: true,
          text: 'Time (Weeks)',
        },
      },
    },
  };

  return (
    <div className='rounded-lg
    shadow-input
    border-2
    border-blue-500
    shadow-blue-500/50
    hover:shadow-[0_0_10px_5px_rgba(0,119,255,1)]
    hover:border-blue-500
    transition-all
    duration-300
     bg-gray-900'>
        <Line data={data} options={options} />
    </div>
  );
};

export default WeightProgressChart;
