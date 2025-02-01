import type React from "react"
import { useState, type FormEvent } from "react"

interface GoalDetails {
  primaryGoal: string
  weightGoal: string
  targetWeight: string
  muscleGroups: string[]
  timeframe: string
}

const GoalDetailsForm: React.FC = () => {
  const [formData, setFormData] = useState<GoalDetails>({
    primaryGoal: "",
    weightGoal: "",
    targetWeight: "",
    muscleGroups: [],
    timeframe: "",
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
      muscleGroups: checked
        ? [...prevData.muscleGroups, value]
        : prevData.muscleGroups.filter((group) => group !== value),
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Goal Details submitted:", formData)
    // Here you would typically send the data to your backend
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Goal Details</h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="primaryGoal">
            Primary Goal
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="primaryGoal"
            name="primaryGoal"
            value={formData.primaryGoal}
            onChange={handleChange}
            required
          >
            <option value="">Select Primary Goal</option>
            <option value="weight-loss">Weight Loss</option>
            <option value="weight-gain">Weight Gain</option>
            <option value="muscle-building">Muscle Building</option>
            <option value="maintain-fitness">Maintain Fitness</option>
            <option value="improve-flexibility">Improve Flexibility</option>
          </select>
        </div>

        {(formData.primaryGoal === "weight-loss" || formData.primaryGoal === "weight-gain") && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="weightGoal">
              Weight Goal
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="weightGoal"
              type="number"
              placeholder="Target weight in kg"
              name="weightGoal"
              value={formData.weightGoal}
              onChange={handleChange}
              required
            />
          </div>
        )}

        {formData.primaryGoal === "muscle-building" && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Target Muscle Groups</label>
            <div className="flex flex-wrap">
              {["Arms", "Legs", "Chest", "Back", "Shoulders", "Core"].map((group) => (
                <label key={group} className="inline-flex items-center mr-4 mb-2">
                  <input
                    type="checkbox"
                    value={group.toLowerCase()}
                    checked={formData.muscleGroups.includes(group.toLowerCase())}
                    onChange={handleCheckboxChange}
                    className="form-checkbox"
                  />
                  <span className="ml-2">{group}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="timeframe">
            Goal Timeframe
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="timeframe"
            name="timeframe"
            value={formData.timeframe}
            onChange={handleChange}
            required
          >
            <option value="">Select Timeframe</option>
            <option value="1-month">1 Month</option>
            <option value="3-months">3 Months</option>
            <option value="6-months">6 Months</option>
            <option value="1-year">1 Year</option>
          </select>
        </div>

        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit Goal Details
          </button>
        </div>
      </form>
    </div>
  )
}

export default GoalDetailsForm

