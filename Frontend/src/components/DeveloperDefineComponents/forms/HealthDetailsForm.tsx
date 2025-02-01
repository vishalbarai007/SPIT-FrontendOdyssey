import type React from "react"
import { useState, type FormEvent } from "react"

interface HealthDetails {
  hasSevereIllness: string
  illnessDetails: string
  medications: string
  allergies: string
  bloodType: string
  smoker: string
  alcoholConsumption: string
}

const HealthDetailsForm: React.FC = () => {
  const [formData, setFormData] = useState<HealthDetails>({
    hasSevereIllness: "",
    illnessDetails: "",
    medications: "",
    allergies: "",
    bloodType: "",
    smoker: "",
    alcoholConsumption: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Health Details submitted:", formData)
    // Here you would typically send the data to your backend
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Health Details</h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Do you have any severe illness?</label>
          <div>
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                name="hasSevereIllness"
                value="yes"
                checked={formData.hasSevereIllness === "yes"}
                onChange={handleChange}
                className="form-radio"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="hasSevereIllness"
                value="no"
                checked={formData.hasSevereIllness === "no"}
                onChange={handleChange}
                className="form-radio"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>

        {formData.hasSevereIllness === "yes" && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="illnessDetails">
              Please provide details about your illness
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="illnessDetails"
              name="illnessDetails"
              value={formData.illnessDetails}
              onChange={handleChange}
              rows={3}
            ></textarea>
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="medications">
            Current Medications
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="medications"
            type="text"
            placeholder="List any current medications"
            name="medications"
            value={formData.medications}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="allergies">
            Allergies
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="allergies"
            type="text"
            placeholder="List any allergies"
            name="allergies"
            value={formData.allergies}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bloodType">
            Blood Type
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="bloodType"
            name="bloodType"
            value={formData.bloodType}
            onChange={handleChange}
          >
            <option value="">Select Blood Type</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Do you smoke?</label>
          <div>
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                name="smoker"
                value="yes"
                checked={formData.smoker === "yes"}
                onChange={handleChange}
                className="form-radio"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="smoker"
                value="no"
                checked={formData.smoker === "no"}
                onChange={handleChange}
                className="form-radio"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="alcoholConsumption">
            Alcohol Consumption
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="alcoholConsumption"
            name="alcoholConsumption"
            value={formData.alcoholConsumption}
            onChange={handleChange}
          >
            <option value="">Select Frequency</option>
            <option value="never">Never</option>
            <option value="rarely">Rarely</option>
            <option value="socially">Socially</option>
            <option value="regularly">Regularly</option>
          </select>
        </div>

        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit Health Details
          </button>
        </div>
      </form>
    </div>
  )
}

export default HealthDetailsForm

