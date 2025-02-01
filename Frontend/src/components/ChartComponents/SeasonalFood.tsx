import type React from "react"
import { useContext, useRef, useEffect, useState } from "react"
import { Chart as ChartJS, LinearScale, PointElement, Tooltip, Legend, Title } from "chart.js"
import { Bubble } from "react-chartjs-2"
import ThemeContext from "../../contexts/theme/ThemeContext"

ChartJS.register(LinearScale, PointElement, Tooltip, Legend, Title)

const SeasonalFoodChart: React.FC = () => {
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

  // Dummy data for seasonal food availability
  const data = {
    datasets: [
      {
        label: "Mango",
        data: [{ x: 5, y: 80, r: 20 }], // May, 80 nutritional value, high availability
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Apple",
        data: [{ x: 9, y: 70, r: 15 }], // September, 70 nutritional value, moderate availability
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Pumpkin",
        data: [{ x: 10, y: 50, r: 25 }], // October, 50 nutritional value, very high availability
        backgroundColor: "rgba(255, 206, 86, 0.5)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1,
      },
      {
        label: "Spinach",
        data: [{ x: 2, y: 90, r: 18 }], // February, 90 nutritional value, high availability
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
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
        text: "Seasonal Food Availability",
        color: context?.theme === "dark" ? "white" : "black",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months (1 = January, 12 = December)",
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
      y: {
        title: {
          display: true,
          text: "Nutritional Value (Score)",
          color: context?.theme === "dark" ? "white" : "black",
        },
        beginAtZero: true,
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
      <Bubble data={data} options={options} width={chartDimensions.width} height={chartDimensions.height} />
    </div>
  )
}

export default SeasonalFoodChart

