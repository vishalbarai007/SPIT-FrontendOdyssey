import React, { useState, useContext } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../support/sidebar";
import { IconArrowLeft, IconBrandTabler, IconBrain, IconUserBolt } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { cn } from "../../../lib/utils";
import ThemeContext from "../../../contexts/theme/ThemeContext";
// import { Logout } from "../../../../firebase";

export function SidebarDemo() {
  const links = [
    { label: "Dashboard", href: "/dashboard", icon: <IconBrandTabler className="icon" /> },
    { label: "Profile", href: "/profile", icon: <IconUserBolt className="icon" /> },
    { label: "Ask AI", href: "/home", icon: <IconBrain className="icon" /> },
    { label: "Logout", href: "/login", icon: <IconArrowLeft className="icon" /> },
  ];
  const [open, setOpen] = useState(false);
  const contextTheme = useContext(ThemeContext);

  return (
    <div className="flex">
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody open={open} setOpen={setOpen} className="justify-between gap-10">
          <div className="overflow-x-hidden flex flex-col flex-1 overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      {/* <Dashboard /> */}
    </div>
  );
}

export const Logo = () => {
  const contextTheme = useContext(ThemeContext); // Access the theme context
  const textColor = contextTheme?.theme === "dark" ? "text-white" : "text-black"; // Determine color based on theme

  return (
    <a href="#" className="logo">
      <div className="logo-icon" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={cn("text-lg font-bold", textColor)} // Apply dynamic text color
      >
        DIE-ATE Planner
      </motion.span>
    </a>
  );
};


export const LogoIcon = () => (
  <a href="#" className="logo-icon-container">
    <div className="logo-icon" />
  </a>
);
