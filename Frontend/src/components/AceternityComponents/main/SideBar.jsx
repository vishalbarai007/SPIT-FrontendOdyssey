import { useState } from "react"
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
} from "react-icons/fa"

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("dashboard")
  const [userData] = useState({ name: "John Doe", category: "Professional" })

  const menuItems = [
    { id: "profile", icon: FaUser, label: "Profile" },
    { id: "dashboard", icon: FaChartLine, label: "Dashboard" },
    { id: "goals", icon: FaBullseye, label: "Health Goals" },
    { id: "activity", icon: FaRunning, label: "Activity Summary" },
    { id: "recommendations", icon: FaLightbulb, label: "Recommendations" },
    { id: "community", icon: FaUsers, label: "Community Forums" },
    { id: "reminders", icon: FaBell, label: "Reminders" },
    { id: "nutrition", icon: FaAppleAlt, label: "Diet & Nutrition" },
    { id: "progress", icon: FaChartBar, label: "Progress Reports" },
    { id: "ai", icon: FaRobot, label: "Ask AI" },
  ]

  return (
    <div>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden bg-white p-2 rounded-lg shadow-md"
        aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
      >
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <FaUser className="text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{userData.name}</h3>
              <p className="text-sm text-gray-500">{userData.category}</p>
            </div>
          </div>

          <nav className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeSection === item.id ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <item.icon />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

