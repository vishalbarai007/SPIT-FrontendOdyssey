"use client"

import { useState } from "react"
import AskAI from "../components/DeveloperDefineComponents/AskAI"
import { Button } from "../components/DeveloperDefineComponents/ui/button"
import { PlusCircle } from "lucide-react"
import SidebarDemo from "../components/AceternityComponents/main/SideBar"

export default function AskAIMain() {
  const [conversations, setConversations] = useState<string[]>(["New chat"])

  const addNewConversation = () => {
    setConversations((prev) => ["New chat", ...prev])
  }

  return (
    <div className="flex h-screen ml-10 bg-gray-300">
      {/* Sidebar */}
      <SidebarDemo/>
      <div className="w-64 bg-gray-100 p-4 flex flex-col">
        <Button onClick={addNewConversation} className="mb-4 flex items-center justify-center">
          <PlusCircle className="mr-2 h-4 w-4" /> New chat
        </Button>
        <div className="flex-1 overflow-y-auto">
          {conversations.map((conv, index) => (
            <div key={index} className="py-2 px-3 rounded-lg hover:bg-gray-200 cursor-pointer mb-1">
              {conv}
            </div>
          ))}
        </div>
      </div>

      {/* Main chat area */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b p-4">
          <h1 className="text-xl font-semibold">FitSync AI Assistant</h1>
        </header>
        <main className="flex-1 overflow-hidden mb-10">
          <AskAI />
        </main>
      </div>
    </div>
  )
}

