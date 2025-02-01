// import Intro from "./pages/Intro"
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ThemeState from "./contexts/theme/ThemeState"
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SplashScreen from "./components/DeveloperDefineComponents/SplashScreen";
import DashBoard from "./pages/DashBoard";
import Graphs from "./pages/Graphs";
import AskAIMain from "./pages/AskAI";
import PersonalDetailsForm from "./components/DeveloperDefineComponents/forms/Personaldetails";
import HealthDetailsForm from "./components/DeveloperDefineComponents/forms/HealthDetailsForm";
import GoalDetailsForm from "./components/DeveloperDefineComponents/forms/GoalDetailsForm";
import FoodDetailsForm from "./components/DeveloperDefineComponents/forms/FoodDetailsForm";
import DailyActivityForm from "./components/DeveloperDefineComponents/forms/DailyActivityForm";
import HealthGoals from "./pages/HealthGoals";
import Index from "./components/DeveloperDefineComponents/dummyhome";

const App = () => {
  return (
    <ThemeState>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mainhome" element={<Home />} />
          <Route path="/featurehome" element={<Index />} />

          <Route path="/personaldetails" element={<PersonalDetailsForm />} />
          <Route path="/healthdetails" element={<HealthDetailsForm/>} />
          <Route path="/healthgoals" element={<HealthGoals/>} />

          <Route path="/goaldetails" element={<GoalDetailsForm />} />
          <Route path="/fooddetails" element={<FoodDetailsForm />} />
          <Route path="/dailyactivitydetails" element={<DailyActivityForm />} />

          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/graphs" element={<Graphs />} />
          <Route path='/askai' element={<AskAIMain/>} />
        </Routes>

      </BrowserRouter>
    </ThemeState>
  )
}

export default App;