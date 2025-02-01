"use client";

// import Image from "next/image";
import { Tabs } from "../support/Tabs";
import MealTimingChart from "../../ChartComponents/MealTime";
import NutrientPieDonutChart from "../../ChartComponents/NutrientDistribution";
// import NutrientExcess from "../../ChartComponents/NutrientExcess&Deficiencies";
import SeasonalFoodChart from "../../ChartComponents/SeasonalFood";
import WeightProgressChart from "../../ChartComponents/WeightProgress";

export function TabsDemo() {
    const tabs = [
        {
            title: "MealTime Graph",
            value: "MealTime",
            content: (
                // <div className="w-full overflow-hidden relative h-fit text-xl md:text-4xl font-bold text-white rounded-lg  ">
                    <MealTimingChart />
                // </div>
            ),
        },
        {
            title: "Nutrition Excess Graph",
            value: "Nutrition Excess",
            content: (
                // <div className="w-full overflow-hidden relative h-fit text-xl md:text-4xl font-bold text-white rounded-lg  ">
                    // <NutrientExcess />
                    <MealTimingChart />

                // </div>
            ),
        },
        {
            title: "Nutrition Distribution Graph",
            value: "Nutrition Distribution ",
            content: (
                // <div className="w-full overflow-hidden relative h-fit text-xl md:text-4xl font-bold text-white rounded-lg  ">
                    <NutrientPieDonutChart />
                // </div>
            ),
        },
        {
            title: "Seasonal Foods Graph",
            value: "Seasonal Foods",
            content: (
                // <div className="w-full overflow-hidden relative h-fit text-xl md:text-4xl font-bold text-white rounded-lg  ">
                    <SeasonalFoodChart />
                // </div>
            ),
        },
        {
            title: "Weight Progress Graph",
            value: "Weight Progress",
            content: (
                // <div className="w-full overflow-hidden relative h-fit text-xl md:text-4xl font-bold text-white rounded-lg ">
                    <WeightProgressChart />
                // </div>
            ),
        },
    ];

    return (
        <div className="max-h-fit md:h-[50rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start pt-10">
            <Tabs tabs={tabs} />
        </div>
    );
}
