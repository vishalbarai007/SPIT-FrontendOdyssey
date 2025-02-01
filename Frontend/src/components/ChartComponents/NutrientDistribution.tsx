"use client";

import React from "react";
import { PieChart, Pie, Cell, Label, Tooltip } from "recharts";
import { useContext } from "react";
import ThemeContext from "../../contexts/theme/ThemeContext";

const chartData = [
  { nutrient: "Proteins", value: 40, color: "rgba(255, 87, 51, 0.3)", border: "rgba(255, 87, 51, 0.8)" }, // Semi-transparent Orange
  { nutrient: "Carbohydrates", value: 35, color: "rgba(51, 255, 87, 0.3)", border: "rgba(51, 255, 87, 0.8)" }, // Semi-transparent Green
  { nutrient: "Fats", value: 15, color: "rgba(51, 87, 255, 0.3)", border: "rgba(51, 87, 255, 0.8)" }, // Semi-transparent Blue
  { nutrient: "Vitamins", value: 5, color: "rgba(255, 215, 0, 0.3)", border: "rgba(255, 215, 0, 0.8)" }, // Semi-transparent Yellow
  { nutrient: "Minerals", value: 5, color: "rgba(255, 51, 161, 0.3)", border: "rgba(255, 51, 161, 0.8)" }, // Semi-transparent Pink
];

export default function NutrientPieDonutChart() {
  const contextTheme = useContext(ThemeContext);
  const totalNutrients = React.useMemo(
    () => chartData.reduce((acc, curr) => acc + curr.value, 0),
    []
  );

  return (
    <div className={`flex flex-col items-center gap-4 p-4 ${contextTheme?.theme === 'dark' ? 'bg-gray-900' : 'bg-white'} rounded-lg
    shadow-input
    border-2
    border-blue-500
    shadow-blue-500/50
    hover:shadow-[0_0_10px_5px_rgba(0,119,255,1)]
    hover:border-blue-500
    transition-all
    duration-300`}>
      {/* Header */}
      <div className="text-center">
        <h3 className={`text-lg ${contextTheme?.theme === 'dark' ? 'text-teal-50' : 'text-black'} font-semibold`}>Nutrient Distribution</h3>
        <p className={`text-sm ${contextTheme?.theme === 'dark' ? 'text-gray-400' : 'text-black'}`}>Monthly Dietary Intake - December 2024</p>
      </div>

      {/* Body */}
      <div className="flex justify-center">
        <PieChart width={300} height={300}>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="nutrient"
            innerRadius={80}
            outerRadius={120}
            stroke="none"
            isAnimationActive={true}
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                stroke={entry.border} // Border color matches segment color
                strokeWidth={2} // Set border thickness
              />
            ))}
            <Label
              position="center"
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className={`${contextTheme?.theme === 'dark' ? 'fill-teal-50' : 'fill-black'} text-xl font-semibold`}
                      >
                        {totalNutrients}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 20}
                        className={`${contextTheme?.theme === 'dark' ? 'fill-gray-400' : 'fill-black'} text-sm`}
                      >
                        Nutrients
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </Pie>
          <Tooltip
            contentStyle={{ backgroundColor: "#333", border: "1px dotted white" }}
            itemStyle={{ color: "#fff" }}
            formatter={(value: number, name: string) => [`${value}%`, name]}
          />
        </PieChart>
      </div>

      {/* Footer */}
      <div className={`text-center text-sm ${contextTheme?.theme === 'dark' ? 'text-gray-400' : 'text-black'}`}>
        Nutrient breakdown for an average daily diet.
      </div>
    </div>
  );
}
