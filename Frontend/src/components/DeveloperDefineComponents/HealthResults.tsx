import { MoreVertical, Upload, UserIcon  as FilePdf } from 'lucide-react'
import { HealthResult } from "../../types/patients"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from 'react'
import ThemeContext from '../../contexts/theme/ThemeContext';
import { useContext } from 'react'

const HealthData: HealthResult = {
    HealthResults: [
        { name: "Height ", size: "2.7 MB", type: "pdf" },
        { name: "Weight ", size: "0.7 MB", type: "pdf" },
        { name: "Age ", size: "0.7 MB", type: "pdf" }
    ],
    name: '',
    size: '',
    type: ''
}


const HealthResults = () => {
  const contextTheme = useContext(ThemeContext);
  return (
    <div>
      <div className={`${contextTheme?.theme === 'light' ? 'bg-neutral-200' : 'bg-gray-900'} p-4 sm:p-6 rounded-lg shadow-input border-2 border-blue-500 shadow-blue-500/50 hover:shadow-[0_0_10px_5px_rgba(0,119,255,1)] hover:border-blue-500 transition-all duration-300`}>
      
            <div className="flex justify-between mb-4 sm:mb-6">
              <h2 className={`text-lg ${contextTheme?.theme === 'light' ? 'text-black' : 'text-white'} font-semibold`}>Health Results:</h2>
              <button className={`p-2 ${contextTheme?.theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-gray-700 text-teal-50'} rounded-lg`}>
                <MoreVertical className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {HealthData.HealthResults.map((result: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; size: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined }, index: Key | null | undefined) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="p-2 bg-orange-100 rounded">
                    <FilePdf className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <p className={`font-medium ${contextTheme?.theme === 'light' ? 'text-black' : 'text-white'}`}>{result.name}</p>
                    <p className="text-xs sm:text-sm text-gray-500">{result.size}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4 sm:mt-6">
              <button className="flex items-center justify-center gap-2 px-4 py-2 text-sm text-blue-500 hover:bg-teal-50 hover:text-black rounded-lg">
                <Upload className="w-4 h-4" />
                Upload Files
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-2 text-sm text-blue-500 hover:bg-teal-50 hover:text-black rounded-lg">
                View All
              </button>
            </div>

          </div>
    </div>
  )
}

export default HealthResults;
