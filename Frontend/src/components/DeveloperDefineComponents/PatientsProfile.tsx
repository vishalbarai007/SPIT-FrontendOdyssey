import { ArrowLeft } from 'lucide-react';
import HealthResults from './HealthResults';
import PatientProfileActionCard from './PatientProfileActionCard';
import OverView from './OverView';
import ThemeContext from '../../contexts/theme/ThemeContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import PatientInfo from './PatientInfo';

export default function PatientProfile() {
  const contextTheme = useContext(ThemeContext);


  const textColorClass = contextTheme?.theme === 'light' ? 'text-black' : 'text-white';

  return (
    <div className={`min-h-screen ${contextTheme?.theme === 'light' ? 'bg-white' : 'bg-black'} flex`}>
      <div className="flex-1 p-4 sm:p-6 lg:p-8 ml-0 sm:ml-24">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6 sm:mb-8">
          <Link to='/home'>
            <button className={`p-2 mt-5 ${contextTheme?.theme === 'light' ? 'hover:bg-gray-200' : 'hover:bg-gray-600'} rounded-lg`}>
              <ArrowLeft className={`w-5 h-5 sm:w-6 sm:h-6 ${textColorClass}`} />
            </button>
          </Link>
          <h1 className={`text-xl mt-5 sm:text-2xl font-bold ${textColorClass}`}>Profile</h1>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">

          {/* Patient Info Card */}
          <div className="w-full">
            <PatientInfo />
          </div>


          {/* Overview Card */}
          <div className="w-full">
            <OverView />
          </div>


          {/* Lab Results Card */}
          <div className="w-full">
            <HealthResults />
          </div>


          {/* Action Cards Grid */}
          <div className="w-full">
            <PatientProfileActionCard />
          </div>
          
        </div>
      </div>
    </div>
  );
}