import type React from "react"
import { useContext, useRef, useEffect, useState } from "react"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"
import { Bar } from "react-chartjs-2"
import ThemeContext from "../../contexts/theme/ThemeContext"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const MealTimingChart: React.FC = () => {
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

  // Dummy data for meal timings
  const data = {
    labels: ["Breakfast", "Morning Snack", "Lunch", "Afternoon Snack", "Evening snacks", "Dinner"],
    datasets: [
      {
        label: "Meal Timing (24 - Hours)",
        data: [8, 10, 13, 16, 18, 21], // Meal times in 24-hour format
        backgroundColor: "rgba(51, 87, 255, 0.3)",
        borderColor: "rgba(51, 87, 255, 0.8)",
        borderWidth: 2,
      },
    ],
  }

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 24,
        title: {
          display: true,
          text: "Time (Hours)",
          color: context?.theme === "dark" ? "white" : "black",
        },
        ticks: {
          stepSize: 1,
          color: context?.theme === "dark" ? "white" : "black",
        },
        grid: {
          color: context?.theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
        },
      },
      x: {
        title: {
          display: true,
          text: "Meal Type",
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
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: context?.theme === "dark" ? "white" : "black",
        },
      },
      title: {
        display: true,
        text: "Meal Timing Analysis",
        color: context?.theme === "dark" ? "white" : "black",
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
      <Bar data={data} options={options} width={chartDimensions.width} height={chartDimensions.height} />
    </div>
  )
}

export default MealTimingChart

