import Intro from "./pages/Intro"
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ThemeState from "./contexts/theme/ThemeState"
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SplashScreen from "./components/DeveloperDefineComponents/SplashScreen";
import DashBoard from "./pages/DashBoard";
import Graphs from "./pages/Graphs";

const App = () => {
  return (
    <ThemeState>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/graphs" element={<Graphs />} />
        </Routes>

      </BrowserRouter>
    </ThemeState>
  )
}

export default App;