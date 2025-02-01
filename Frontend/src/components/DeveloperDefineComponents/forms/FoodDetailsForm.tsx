import type React from "react"
import { useState, type FormEvent } from "react"

interface FoodDetails {
  dietaryRestrictions: string[]
  dislikedFoods: string
  allergies: string
  favoriteFoods: string
  mealsPerDay: string
}

const FoodDetailsForm: React.FC = () => {
  const [formData, setFormData] = useState<FoodDetails>({
    dietaryRestrictions: [],
    dislikedFoods: "",
    allergies: "",
    favoriteFoods: "",
    mealsPerDay: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
      dietaryRestrictions: checked
        ? [...prevData.dietaryRestrictions, value]
        : prevData.dietaryRestrictions.filter((restriction) => restriction !== value),
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Food Details submitted:", formData)
    // Here you would typically send the data to your backend
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Food Details</h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Dietary Restrictions</label>
          <div className="flex flex-wrap">
            {["Vegetarian", "Vegan", "Gluten-Free", "Dairy-Free", "Keto", "Paleo"].map((restriction) => (
              <label key={restriction} className="inline-flex items-center mr-4 mb-2">
                <input
                  type="checkbox"
                  value={restriction.toLowerCase()}
                  checked={formData.dietaryRestrictions.includes(restriction.toLowerCase())}
                  onChange={handleCheckboxChange}
                  className="form-checkbox"
                />
                <span className="ml-2">{restriction}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dislikedFoods">
            Disliked Foods
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="dislikedFoods"
            name="dislikedFoods"
            value={formData.dislikedFoods}
            onChange={handleChange}
            placeholder="List foods you don't like"
            rows={3}
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="allergies">
            Food Allergies
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="allergies"
            name="allergies"
            value={formData.allergies}
            onChange={handleChange}
            placeholder="List any food allergies"
            rows={3}
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="favoriteFoods">
            Favorite Foods
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="favoriteFoods"
            name="favoriteFoods"
            value={formData.favoriteFoods}
            onChange={handleChange}
            placeholder="List your favorite foods"
            rows={3}
          ></textarea>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mealsPerDay">
            Meals Per Day
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="mealsPerDay"
            name="mealsPerDay"
            value={formData.mealsPerDay}
            onChange={handleChange}
            required
          >
            <option value="">Select number of meals</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6+">6 or more</option>
          </select>
        </div>

        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit Food Details
          </button>
        </div>
      </form>
    </div>
  )
}

export default FoodDetailsForm

