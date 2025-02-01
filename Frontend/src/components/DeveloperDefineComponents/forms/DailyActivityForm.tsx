import type React from "react"
import { useState, type FormEvent } from "react"

interface DailyActivity {
  averageSteps: string
  sleepHours: string
  exerciseFrequency: string
  exerciseTypes: string[]
  gymFrequency: string
  yogaFrequency: string
  meditationFrequency: string
}

const DailyActivityForm: React.FC = () => {
  const [formData, setFormData] = useState<DailyActivity>({
    averageSteps: "",
    sleepHours: "",
    exerciseFrequency: "",
    exerciseTypes: [],
    gymFrequency: "",
    yogaFrequency: "",
    meditationFrequency: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target
    setFormData((prevData) => ({
      ...prevData,
      exerciseTypes: checked
        ? [...prevData.exerciseTypes, value]
        : prevData.exerciseTypes.filter((type) => type !== value),
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Daily Activity Details submitted:", formData)
    // Here you would typically send the data to your backend
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Daily Activity Details</h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="averageSteps">
            Average Daily Steps
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="averageSteps"
            type="number"
            placeholder="e.g., 8000"
            name="averageSteps"
            value={formData.averageSteps}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sleepHours">
            Average Sleep Hours
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="sleepHours"
            type="number"
            placeholder="e.g., 7"
            name="sleepHours"
            value={formData.sleepHours}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="exerciseFrequency">
            Exercise Frequency
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="exerciseFrequency"
            name="exerciseFrequency"
            value={formData.exerciseFrequency}
            onChange={handleChange}
            required
          >
            <option value="">Select frequency</option>
            <option value="daily">Daily</option>
            <option value="4-6 times a week">4-6 times a week</option>
            <option value="2-3 times a week">2-3 times a week</option>
            <option value="once a week">Once a week</option>
            <option value="rarely">Rarely</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Types of Exercise</label>
          <div className="flex flex-wrap">
            {["Walking", "Running", "Cycling", "Swimming", "Weight Training", "Yoga", "Team Sports"].map((type) => (
              <label key={type} className="inline-flex items-center mr-4 mb-2">
                <input
                  type="checkbox"
                  value={type.toLowerCase()}
                  checked={formData.exerciseTypes.includes(type.toLowerCase())}
                  onChange={handleCheckboxChange}
                  className="form-checkbox"
                />
                <span className="ml-2">{type}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gymFrequency">
            Gym Frequency
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="gymFrequency"
            name="gymFrequency"
            value={formData.gymFrequency}
            onChange={handleChange}
            required
          >
            <option value="">Select frequency</option>
            <option value="daily">Daily</option>
            <option value="4-6 times a week">4-6 times a week</option>
            <option value="2-3 times a week">2-3 times a week</option>
            <option value="once a week">Once a week</option>
            <option value="rarely">Rarely</option>
            <option value="never">Never</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="yogaFrequency">
            Yoga Frequency
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="yogaFrequency"
            name="yogaFrequency"
            value={formData.yogaFrequency}
            onChange={handleChange}
            required
          >
            <option value="">Select frequency</option>
            <option value="daily">Daily</option>
            <option value="4-6 times a week">4-6 times a week</option>
            <option value="2-3 times a week">2-3 times a week</option>
            <option value="once a week">Once a week</option>
            <option value="rarely">Rarely</option>
            <option value="never">Never</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="meditationFrequency">
            Meditation Frequency
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="meditationFrequency"
            name="meditationFrequency"
            value={formData.meditationFrequency}
            onChange={handleChange}
            required
          >
            <option value="">Select frequency</option>
            <option value="daily">Daily</option>
            <option value="4-6 times a week">4-6 times a week</option>
            <option value="2-3 times a week">2-3 times a week</option>
            <option value="once a week">Once a week</option>
            <option value="rarely">Rarely</option>
            <option value="never">Never</option>
          </select>
        </div>

        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit Daily Activity Details
          </button>
        </div>
      </form>
    </div>
  )
}

export default DailyActivityForm

