import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { useContext } from 'react';
import ThemeContext from '../../contexts/theme/ThemeContext';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend, Title);

const NutrientExcess: React.FC = () => {
  const context = useContext(ThemeContext);
  // Dummy data for nutrient intake
  const data = {
    labels: ['Protein', 'Carbs', 'Fats', 'Vitamins', 'Minerals', 'Fiber'], // Nutrient categories
    datasets: [
      {
        label: 'Actual Intake',
        data: [100, 200, 60, 220, 70, 30], // Actual nutrient intake values
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
      },
      {
        label: 'Recommended Intake',
        data: [200, 250, 70, 100, 90, 150], // Recommended daily values
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
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
        text: 'Nutrient Deficiency Alerts',
        color: `${context?.theme==='dark'?'white':'black'}`, // Title text color
      },
    },
    scales: {
      r: {
        beginAtZero: true,
        suggestedMin: 0,
        suggestedMax: 300,
        ticks: {
          stepSize: 50,
          color: 'black', // Tick text color
        },
        angleLines: {
          display: true,
          color: `${context?.theme==='dark'?'rgba(255, 255, 255, 0.5)':'rgba(0, 0, 0, 0.5)'}`, // Angle lines color
        },
        grid: {
          color: `${context?.theme==='dark'?'rgba(255, 255, 255, 0.5)':'rgba(0, 0, 0, 0.5)'}`, // Grid lines color
        },
        pointLabels: {
          color: `${context?.theme==='dark'?'white':'black'}`, // Labels color (e.g., Protein, Carbs, etc.)
        },
      },
    },
  };


  return (
    <div
      className={`h-fit w-full rounded-lg shadow-input border-2 border-blue-500 shadow-blue-500/50 hover:shadow-[0_0_10px_5px_rgba(0,119,255,1)] hover:border-blue-500 transition-all duration-300 ${context?.theme==='dark'?'bg-gray-900':'bg-neutral-100'}`}
    >
      <Radar data={data} options={options} />
    </div>
  );
};


export default NutrientExcess;

