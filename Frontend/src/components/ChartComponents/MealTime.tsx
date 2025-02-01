import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MealTimingChart: React.FC = () => {
  // Dummy data for meal timings
  const data = {
    labels: ['Breakfast', 'Morning Snack', 'Lunch', 'Afternoon Snack', 'Evening snacks', 'Dinner'],
    datasets: [
      {
        label: 'Meal Timing (24 - Hours)',
        data: [8, 10, 13, 16, 18,  21], // Meal times in 24-hour format
        backgroundColor: 'rgba(51, 87, 255, 0.3)',
        borderColor: 'rgba(51, 87, 255, 0.8)',
        borderWidth: 2,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 24,
        title: {
          display: true,
          text: 'Time (Hours)',
        },
        ticks: {
          stepSize: 1,
        },
      },
      x: {
        title: {
          display: true,
          text: 'Meal Type',
        },
      },
    },
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Meal Timing Analysis',
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
     bg-gray-900 '>
        
        <Bar data={data} options={options} />
    </div>
  );
};

export default MealTimingChart;
