import { useState } from 'react'
import { Home, Calendar, Users, UserIcon as UserMd, MessageSquare, FlaskRoundIcon as Flask, CreditCard, Settings, Menu } from 'lucide-react'
import { cn } from '../../lib/utils'

interface NavItemProps {
  icon: React.ReactNode
  label: string
  active?: boolean
}

function NavItem({ icon, label, active }: NavItemProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 p-2 sm:p-4 hover:bg-gray-100 cursor-pointer",
        active && "text-teal-500"
      )}
    >
      {icon}
      <span className="hidden sm:inline text-xs">{label}</span>
    </div>
  )
}

export function SidebarNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="sm:hidden fixed top-4 left-4 z-20 p-2 bg-white rounded-md shadow-md"
      >
        <Menu size={24} />
      </button>
      <div className={cn(
        "fixed inset-y-0 left-0 transform -translate-x-full sm:translate-x-0 z-10 transition duration-200 ease-in-out",
        isOpen && "translate-x-0"
      )}>
        <div className="w-16 sm:w-24 bg-white border-r h-screen">
          <div className="p-4">
            <img src="/logo.svg" alt="ARGC UK" className="w-8 h-8 sm:w-16 sm:h-16" />
          </div>
          <nav className="flex flex-col">
            <NavItem icon={<Home size={24} />} label="Home" />
            <NavItem icon={<Calendar size={24} />} label="Appointments" />
            <NavItem icon={<Users size={24} />} label="Patients" active />
            <NavItem icon={<UserMd size={24} />} label="Doctors" />
            <NavItem icon={<MessageSquare size={24} />} label="Messages" />
            <NavItem icon={<Flask size={24} />} label="Lab Tests" />
            <NavItem icon={<CreditCard size={24} />} label="Billing" />
            <NavItem icon={<Settings size={24} />} label="Settings" />
          </nav>
        </div>
      </div>
    </>
  )
}

