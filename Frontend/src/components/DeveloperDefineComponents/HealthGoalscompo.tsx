"use client"

import type React from "react"
import { useState } from "react"
import { GoalItem } from "./Goalitems"
import { Input } from "../AceternityComponents/support/input"
import { Button } from "../DeveloperDefineComponents/ui/button"
import { PlusCircle } from "lucide-react"

interface Goal {
  id: number
  title: string
  target: string
  current: string
  unit: string
}

export function HealthGoals() {
  const [goals, setGoals] = useState<Goal[]>([
    { id: 1, title: "Daily Steps", target: "10000", current: "7500", unit: "steps" },
    { id: 2, title: "Weekly Exercise", target: "5", current: "3", unit: "days" },
    { id: 3, title: "Sleep", target: "8", current: "7", unit: "hours" },
    { id: 4, title: "Water Intake", target: "8", current: "5", unit: "glasses" },
  ])

  const [newGoal, setNewGoal] = useState<Omit<Goal, "id" | "current">>({ title: "", target: "", unit: "" })

  const addGoal = (e: React.FormEvent) => {
    e.preventDefault()
    if (newGoal.title && newGoal.target && newGoal.unit) {
      setGoals((prev) => [
        ...prev,
        {
          id: Date.now(),
          ...newGoal,
          current: "0",
        },
      ])
      setNewGoal({ title: "", target: "", unit: "" })
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-8">
      <h2 className="text-3xl font-bold text-foreground">Health Goals</h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {goals.map((goal) => (
          <GoalItem key={goal.id} {...goal} />
        ))}
      </div>

      <form onSubmit={addGoal} className="space-y-4">
        <h3 className="text-xl font-semibold text-foreground">Add New Goal</h3>
        <div className="grid gap-4 sm:grid-cols-3">
          <Input
            type="text"
            placeholder="Goal Title"
            value={newGoal.title}
            onChange={(e) => setNewGoal((prev) => ({ ...prev, title: e.target.value }))}
            required
          />
          <Input
            type="number"
            placeholder="Target"
            value={newGoal.target}
            onChange={(e) => setNewGoal((prev) => ({ ...prev, target: e.target.value }))}
            required
          />
          <Input
            type="text"
            placeholder="Unit (e.g., steps, hours)"
            value={newGoal.unit}
            onChange={(e) => setNewGoal((prev) => ({ ...prev, unit: e.target.value }))}
            required
          />
        </div>
        <Button type="submit" className="w-full sm:w-auto">
          <PlusCircle className="mr-2 h-4 w-4" /> Add Goal
        </Button>
      </form>
    </div>
  )
}

