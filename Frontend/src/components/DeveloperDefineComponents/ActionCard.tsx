import { LucideIcon } from 'lucide-react'
import { cn } from '../../lib/utils'
import ThemeContext from '../../contexts/theme/ThemeContext';
import { useContext } from 'react'

interface ActionCardProps {
  icon: LucideIcon
  title: string
  className?: string
}

export function ActionCard({ icon: Icon, title, className }: ActionCardProps) {

  const contextTheme = useContext(ThemeContext);

  return (
    <div className={cn(
      "flex items-center w-44 gap-2 sm:gap-2 p-1 sm:p-3 overflow-hidden bg-white rounded-lg border hover:shadow-md transition-shadow cursor-pointer",
      className
    )}>
      <div className="p-1 sm:p-2 rounded-lg bg-gray-50">
        <Icon className="w-4 h-4 sm:w-6 sm:h-6" />
      </div>
      <span className={`text-sm sm:text-sm font-medium ${contextTheme?.theme === 'light' ? 'text-black' : 'text-white'}`}>{title}</span>
    </div>
  )
}

