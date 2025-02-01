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
            <FaMoon className="text-gray-300" />
          ) : (
            <FaSun className="text-gray-600" />
          )}
          <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            {isDark ? 'Dark Mode' : 'Light Mode'}
          </span>
        </div>
        <div>
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
    <div className="absolute min-h-screen">
      {/* Hamburger Menu Button - Now visible at all screen sizes */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className={`fixed top-4 left-4 z-50 ${isDark ? 'bg-gray-800' : 'bg-white'} p-2 rounded-lg shadow-md ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
        aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
      >
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar - Now uses same component for all screen sizes */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 ${isDark ? 'bg-gray-900' : 'bg-white'} shadow-lg transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 pt-16"> {/* Added pt-16 to account for hamburger button */}
          <div className="flex items-center space-x-3 mb-8">
            <div className={`w-10 h-10 ${isDark ? 'bg-blue-900' : 'bg-blue-100'} rounded-full flex items-center justify-center`}>
              <FaUser className={`${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
            </div>
            <div>
              <h3 className={`font-semibold ${context.theme==='dark'?'text-white':'text-black'}`}>{userData.name}</h3>
              <p className={`text-sm ${context.theme==='dark'?'text-white':'text-black'}`}>{userData.category}</p>
            </div>
          </div>

          <nav className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  navigate(item.id);
                  setActiveSection(item.id);
                  setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeSection === item.id
                    ? isDark ? 'bg-blue-900 text-blue-400' : 'bg-blue-50 text-blue-600'
                    : isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <item.icon className="flex-shrink-0" />
                <span className={`${context.theme==='dark'?'text-white':'text-black'}`}>{item.label}</span>
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