import type React from "react"
import { useContext, useRef, useEffect, useState } from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Line } from "react-chartjs-2"
import ThemeContext from "../../contexts/theme/ThemeContext"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const WeightProgressChart: React.FC = () => {
  const context = useContext(ThemeContext)
  const chartRef = useRef<HTMLDivElement>(null)
  const [chartDimensions, setChartDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      if (chartRef.current) {
        setChartDimensions({
          width: chartRef.current.offsetWidth,
          height: chartRef.current.offsetHeight,
        })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => {
      window.removeEventListener("resize", updateDimensions)
    }
  }, [])

  // Dummy data for weight tracking
  const data = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"], // Time intervals
    datasets: [
      {
        label: "Weight (kg)",
        data: [45, 46, 47.5, 50, 53, 55], // Weight data points
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        pointBackgroundColor: "rgba(75, 192, 192, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(75, 192, 192, 1)",
        tension: 0.4, // Smoothing of the line
      },
    ],
  }

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: context?.theme === "dark" ? "white" : "black",
        },
      },
      title: {
        display: true,
        text: "Weight Management Progress",
        color: context?.theme === "dark" ? "white" : "black",
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        title: {
          display: true,
          text: "Weight (kg)",
          color: context?.theme === "dark" ? "white" : "black",
        },
        ticks: {
          stepSize: 0.5,
          color: context?.theme === "dark" ? "white" : "black",
        },
        grid: {
          color: context?.theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
        },
      },
      x: {
        title: {
          display: true,
          text: "Time (Weeks)",
          color: context?.theme === "dark" ? "white" : "black",
        },
        ticks: {
          color: context?.theme === "dark" ? "white" : "black",
        },
        grid: {
          color: context?.theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
        },
      },
    },
  }

  return (
    <div
      ref={chartRef}
      className={`w-full h-full min-h-[400px] rounded-lg shadow-input border-2 border-blue-500 shadow-blue-500/50 hover:shadow-[0_0_10px_5px_rgba(0,119,255,1)] hover:border-blue-500 transition-all duration-300 ${
        context?.theme === "dark" ? "bg-gray-900" : "bg-neutral-100"
      }`}
    >
      <Line data={data} options={options} width={chartDimensions.width} height={chartDimensions.height} />
    </div>
  )
}

export default WeightProgressChart

