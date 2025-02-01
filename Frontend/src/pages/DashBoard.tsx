import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import SidebarDemo from "../components/AceternityComponents/main/SideBar";
import PatientInfo from "../components/DeveloperDefineComponents/PatientInfo"
import ThemeContext from '../contexts/theme/ThemeContext';
import { useContext } from 'react';
import NutrientDistribution from "../components/ChartComponents/NutrientDistribution";
import MealTimingChart from "../components/ChartComponents/MealTime";
import WeightProgressChart from "../components/ChartComponents/WeightProgress";
import NutrientExcess from "../components/ChartComponents/NutrientExcess&Deficiencies";
import SeasonalFoodChart from "../components/ChartComponents/SeasonalFood";

const DashBoard = () => {
  const contextTheme = useContext(ThemeContext);
  const textColorClass = contextTheme?.theme === 'light' ? 'text-black' : 'text-white';

  return (
    <div className={`flex-1 p-4 sm:p-6 lg:p-8 ml-0 sm:ml-10 ${contextTheme?.theme==='dark'?'bg-black':'bg-white'}`}>
      <SidebarDemo />
      {/* Header */}
      <div className='flex items-center gap-4 mb-6 sm:mb-8'>
        <Link to='/login'>
          <button className={`p-2 mt-5 ${contextTheme?.theme === 'light' ? 'hover:bg-gray-200' : 'hover:bg-gray-600'} rounded-lg`}>
            <ArrowLeft className={`w-5 h-5 sm:w-6 sm:h-6 ${textColorClass}`} />
          </button>
        </Link>
        <h1 className={`text-xl mt-5 sm:text-2xl font-bold ${textColorClass}`}>DashBoard</h1>
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        <div>
          <PatientInfo />
        </div>

        <div>
        </div>

        <div></div>

        <div>
          <NutrientDistribution />
        </div>

        <div>
          <MealTimingChart />
        </div>

        <div>
          <WeightProgressChart />
        </div>

        <div>
          <NutrientExcess />
        </div>

        <div>
          <SeasonalFoodChart />
        </div>


      </div>
    </div>
  )
}

export default DashBoard