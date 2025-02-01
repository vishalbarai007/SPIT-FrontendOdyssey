import React, { useState, useEffect } from 'react'
import { MoonIcon, SunIcon } from 'lucide-react'

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDarkMode)
    document.body.classList.toggle('dark', isDarkMode)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    document.body.classList.toggle('dark', newDarkMode)
    localStorage.setItem('darkMode', newDarkMode.toString())
  }

  return (
   
      <div className="relative inline-block w-16 mr-2 align-middle select-none transition duration-200 ease-in">
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
        <label
          htmlFor="toggle"
          className="toggle-label block overflow-hidden h-8 rounded-full bg-gray-300 cursor-pointer"
        >
          <span className="absolute left-1 top-1 text-yellow-400">
            <SunIcon size={16} />
          </span>
          <span className="absolute right-1 top-1 text-yellow-400">
            <MoonIcon size={16} />
          </span>
        </label>
      </div>
     
  )
}

export default DarkModeToggle

