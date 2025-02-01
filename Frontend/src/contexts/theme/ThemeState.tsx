import { useState, ReactNode } from "react";
import ThemeContext from "./ThemeContext";

interface ThemeStateProps {
  children: ReactNode; // The children passed to this component
}

const ThemeState = ({ children }: ThemeStateProps) => {
  const [theme, setTheme] = useState<string>("dark");

  const changeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeState;