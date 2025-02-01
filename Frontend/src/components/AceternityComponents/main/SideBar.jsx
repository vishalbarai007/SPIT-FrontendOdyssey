import { useState, useContext } from "react";
import {
  FaUser,
  FaChartLine,
  FaBullseye,
  FaRunning,
  FaLightbulb,
  FaUsers,
  FaBell,
  FaAppleAlt,
  FaChartBar,
  FaRobot,
  FaBars,
  FaTimes,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ThemeContext from "../../../contexts/theme/ThemeContext";

const SidebarDemo = () => {
  const context = useContext(ThemeContext);
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("dashboard");
  const [userData] = useState({ name: "John Doe", category: "Professional" });

  const isDark = context.theme === 'dark';

  const menuItems = [
    { id: "/profile", icon: FaUser, label: "Profile" },
    { id: "/dashboard", icon: FaChartLine, label: "Dashboard" },
    { id: "/goals", icon: FaBullseye, label: "Health Goals" },
    { id: "/activity", icon: FaRunning, label: "Activity Summary" },
    { id: "/community", icon: FaUsers, label: "Community" },
    { id: "/reminders", icon: FaBell, label: "Reminders" },
    { id: "/nutrition", icon: FaAppleAlt, label: "Diet & Nutrition" },
    { id: "/progress", icon: FaChartBar, label: "Progress Reports" },
    { id: "/askai", icon: FaRobot, label: "Ask AI" },
  ];

  const ThemeToggle = () => (
    <div className="absolute bottom-6 left-0 right-0 px-6">
      <button
        onClick={() => context.changeTheme()}
        className={`w-full flex items-center justify-between space-x-3 px-4 py-3 rounded-lg transition-colors ${
          isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-50'
        }`}
      >
        <div className="flex items-center space-x-3">
          {isDark ? (
            <FaMoon className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`} />
          ) : (
            <FaSun className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`} />
          )}
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}">
            {isDark ? 'Dark Mode' : 'Light Mode'}
          </span>
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className={`w-8 h-4 flex items-center ${isDark ? 'bg-gray-600' : 'bg-gray-300'} rounded-full p-1 duration-300 ease-in-out`}>
            <div
              className={`${isDark ? 'bg-gray-300' : 'bg-white'} w-3 h-3 rounded-full shadow-md transform duration-300 ease-in-out ${
                isDark ? "translate-x-4" : "translate-x-0"
              }`}
            />
          </div>
        </div>
      </button>
    </div>
  );

  return (
    <div className="absolute">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className={`fixed top-4 left-4 z-50 lg:hidden ${isDark ? 'bg-gray-800' : 'bg-white'} p-2 rounded-lg shadow-md ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
        aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
      >
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Hover Area for Desktop */}
      <div className="hidden lg:block fixed inset-y-0 left-0 w-16 z-40 bg-transparent group hover:w-64 transition-all duration-300">
        {/* Sidebar */}
        <div className={`fixed inset-y-0 left-0 w-64 ${isDark ? 'bg-gray-900' : 'bg-white'} shadow-lg transition-transform duration-300 ease-in-out transform -translate-x-52 group-hover:translate-x-0`}>
          {/* Hamburger Icon for Non-hover State */}
          <div className="p-4 group-hover:opacity-0 transition-opacity duration-300">
            <FaBars className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`} />
          </div>
          
          <div className="p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center space-x-3 mb-8">
              <div className={`w-10 h-10 ${isDark ? 'bg-blue-900' : 'bg-blue-100'} rounded-full flex items-center justify-center`}>
                <FaUser className={`${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
              </div>
              <div>
                <h3 className={`font-semibold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{userData.name}</h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{userData.category}</p>
              </div>
            </div>

            <nav className="space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigate(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? isDark ? 'bg-blue-900 text-blue-400' : 'bg-blue-50 text-blue-600'
                      : isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <item.icon className="flex-shrink-0" />
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.label}
                  </span>
                </button>
              ))}
            </nav>
          </div>
          <ThemeToggle />
        </div>

        {/* Icon-only Sidebar for Non-hover State */}
        <div className={`fixed inset-y-0 left-0 w-12 ${isDark ? 'bg-gray-900' : 'bg-white'} shadow-lg group-hover:opacity-0 transition-opacity duration-300`}>
          <nav className="pt-16 space-y-4">
            {menuItems.map((item) => (
              <div key={item.id} className="flex justify-center">
                <item.icon className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`} />
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden fixed inset-y-0 left-0 z-40 w-64 ${isDark ? 'bg-gray-900' : 'bg-white'} shadow-lg transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-8">
            <div className={`w-10 h-10 ${isDark ? 'bg-blue-900' : 'bg-blue-100'} rounded-full flex items-center justify-center`}>
              <FaUser className={`${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
            </div>
            <div>
              <h3 className={`font-semibold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{userData.name}</h3>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{userData.category}</p>
            </div>
          </div>

          <nav className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeSection === item.id
                    ? isDark ? 'bg-blue-900 text-blue-400' : 'bg-blue-50 text-blue-600'
                    : isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <item.icon />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default SidebarDemo;