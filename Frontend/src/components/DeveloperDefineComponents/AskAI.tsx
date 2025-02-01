"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { GoogleGenerativeAI } from "@google/generative-ai"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Send } from "lucide-react"

// Initialize the Gemini API client
const genAI = new GoogleGenerativeAI("AIzaSyActHIDPhabwh9qvxj7rIcES1kmUco0xhM")

interface Message {
  role: "user" | "ai"
  content: string
}

const AskAI: React.FC = () => {
  const [input, setInput] = useState<string>("")
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, []) // Updated dependency array

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" })
      const result = await model.generateContent(input)
      const aiMessage: Message = { role: "ai", content: result.response.text() }
      setMessages((prev) => [...prev, aiMessage])
    } catch (error) {
      console.error("Error calling Gemini API:", error)
      const errorMessage: Message = { role: "ai", content: "Sorry, there was an error processing your request." }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[70%] p-3 rounded-lg ${
                message.role === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex items-center space-x-2">
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask FitSync AI something..."
            className="flex-1"
          />
          <Button type="submit" disabled={isLoading} size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  )
}

export default AskAI

