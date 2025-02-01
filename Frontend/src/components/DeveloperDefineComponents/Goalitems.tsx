import { Progress } from "../DeveloperDefineComponents/Progress"

interface GoalItemProps {
  title: string
  target: string
  current: string
  unit: string
}

export function GoalItem({ title, target, current, unit }: GoalItemProps) {
  const progress = Math.round((Number.parseInt(current) / Number.parseInt(target)) * 100)

  return (
    <div className="bg-card p-4 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-foreground">{title}</h3>
        <span className="text-sm text-muted-foreground">{unit}</span>
      </div>
      <div className="space-y-2">
        <Progress value={progress} className="w-full" />
        <div className="flex justify-between text-sm">
          <span className="font-semibold text-primary">{progress}%</span>
          <span className="text-muted-foreground">
            {current}/{target}
          </span>
        </div>
      </div>
    </div>
  )
}

