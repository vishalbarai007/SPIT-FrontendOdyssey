"use client"

import type React from "react"
import { useState } from "react"
import { GoogleGenerativeAI } from "@google/generative-ai"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

// Initialize the Gemini API client
const genAI = new GoogleGenerativeAI('AIzaSyActHIDPhabwh9qvxj7rIcES1kmUco0xhM')

const AskAI: React.FC = () => {
  const [input, setInput] = useState<string>("")
  const [response, setResponse] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" })
      const result = await model.generateContent(input)
      const text = result.response.text()
      setResponse(text)
    } catch (error) {
      console.error("Error calling Gemini API:", error)
      setResponse("Sorry, there was an error processing your request.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Gemini AI something..."
          className="w-full"
        />
        <Button type="submit" disabled={isLoading} className="w-full">
          {isLoading ? "Thinking..." : "Ask AI"}
        </Button>
      </form>
      {response && (
        <div className="mt-6 p-4 bg-gray-100 rounded-md">
          <h2 className="text-lg font-semibold mb-2">AI Response:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  )
}

export default AskAI

