import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ActionCard } from './ActionCard';

import { 
  Calendar, 
  UserIcon as UserMd, 
  Clipboard, 
  Heart, 
  User, 
  CreditCard, 
  FileText 
} from 'lucide-react';
import ThemeContext from '../../contexts/theme/ThemeContext';

const PatientProfileActionCard = () => {
  const contextTheme = useContext(ThemeContext);
  const navigate = useNavigate(); 
  const cardClassName = `
    w-full
    ${contextTheme?.theme === 'light' ? 'bg-neutral-200' : 'bg-gray-900'}
    shadow-input border-2 border-blue-500 shadow-blue-500/50 hover:shadow-[0_0_10px_5px_rgba(0,119,255,1)] hover:border-blue-500 transition-all duration-300 
    p-4
  `;

  const actions = [
    { icon: Calendar, title: "Personal Details", route: "/personaldetails" },
    { icon: UserMd, title: "Health Details", route: "/healthdetails" },
    { icon: Clipboard, title: "Goal Details", route: "/goaldetails" },
    { icon: FileText, title: "Food Details", route: "/fooddetails" },
    { icon: Heart, title: "Daily Activity Details", route: "/dailyactivitydetails" },
    { icon: User, title: "AI Diet Plans", route:"/aidietplans" },
    { icon: CreditCard, title: "Graph Representation", route:"/graphs" },
    { icon: FileText, title: "ETC.", route:"/etc" }
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
        {actions.map((action, index) => (
          <div
            key={index}
            className="w-full"
            onClick={() => navigate(action.route)} 
          >
            <ActionCard
              icon={action.icon}
              title={action.title}
              className={cardClassName}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientProfileActionCard;
