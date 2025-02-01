import { cn } from "../../../lib/utils";
import React, { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";
import ThemeContext from "../../../contexts/theme/ThemeContext";
import { Link } from "react-router-dom";

const SidebarContext = createContext(undefined);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarProvider = ({ children, open: openProp, setOpen: setOpenProp, animate = true }) => {
  const [openState, setOpenState] = useState(false);

  const open = openProp ?? openState;
  const setOpen = setOpenProp ?? setOpenState;

  return (
    <SidebarContext.Provider value={{ open, setOpen, animate }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({
  children,
  open,
  setOpen,
  animate
}) => {
  return (
    (<SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </SidebarProvider>)
  );
};

export const SidebarBody = (props) => {
  return (<>
    <DesktopSidebar {...props} />
    <MobileSidebar {...(props)} />
  </>);
};

export const DesktopSidebar = ({
  className,
  children,
  ...props
}) => {
  const { open, setOpen, animate } = useSidebar();
  const contextTheme = useContext(ThemeContext);
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  return (
    <motion.div
      className={cn(
        `h-full w-[50%] fixed inset-0 z-30 px-4 py-4 hidden md:flex md:flex-col ${contextTheme.theme === 'light' ? 'bg-neutral-100' : 'bg-neutral-800'}`,
        className
      )}
      style={{ overflow: 'hidden' }} // Prevent overflow from spilling out
      animate={{
        width: animate ? (open ? "30vw" : "100px") : "30vw",
      }}
      onMouseEnter={() => {
        setOpen(true);
        setIsHovered(true); // Set hover state
      }}
      onMouseLeave={() => {
        setOpen(false);
        setIsHovered(false); // Reset hover state
      }}
      {...props}
    >
      <div className="flex-1">{children}</div>

      {/* Theme Switch positioned below all other content */}
      <motion.div
        className="mt-auto transition-all"
        animate={{
          opacity: isHovered ? 1 : 0, // Control visibility based on hover state
          pointerEvents: isHovered ? "auto" : "none",
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={contextTheme?.theme === 'dark'}
            onChange={contextTheme?.changeTheme}
          />
          <div
            className="w-11 h-6 bg-gray-300 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-500
              peer-focus:ring-2 peer-focus:ring-blue-300 peer-focus:outline-none 
              before:content-[''] before:absolute before:w-5 before:h-5 before:rounded-full 
              before:bg-white before:transition-all before:translate-x-1 peer-checked:before:translate-x-6"
          ></div>
          <span
            className={`ml-3 text-sm font-medium ${
              contextTheme.theme === "light" ? "text-black" : "text-white"
            } dark:text-gray-300`}
          >
            {contextTheme?.theme === "light" ? "Light Mode" : "Dark Mode"}
          </span>
        </label>
      </motion.div>
    </motion.div>
  );
};



  
  export const MobileSidebar = ({
    className,
    children,
    ...props
  }) => {
    const { open, setOpen } = useSidebar();
    const contextTheme = useContext(ThemeContext);
    return (
      <div
        className={cn(
          `fixed inset-0 z-40 flex flex-col md:hidden bg-transparent`
        )}
        {...props}
      >
        <div className="h-10 px-4 flex items-center justify-between">
          <IconMenu2
            className={`${contextTheme.theme === 'light' ? 'text-neutral-800' : 'text-neutral-100'}`}
            onClick={() => setOpen(!open)}
          />
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className={cn(
                `fixed inset-0 ${contextTheme.theme === 'light' ? 'bg-neutral-100' : 'bg-neutral-800'} p-10 z-[100] flex flex-col`,
                className
              )}
            >
              <div
                className={`absolute right-10 top-10 ${contextTheme.theme === 'light' ? 'text-neutral-800' : 'text-neutral-100'}`}
                onClick={() => setOpen(!open)}
              >
                <IconX />
              </div>
              {children}
              <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={contextTheme?.theme === 'dark'}
            onChange={contextTheme?.changeTheme}
          />
          <div
            className="w-11 h-6 bg-gray-300 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-500
              peer-focus:ring-2 peer-focus:ring-blue-300 peer-focus:outline-none 
              before:content-[''] before:absolute before:w-5 before:h-5 before:rounded-full 
              before:bg-white before:transition-all before:translate-x-1 peer-checked:before:translate-x-6"
          ></div>
          <span
            className={`ml-3 text-sm font-medium ${
              contextTheme.theme === "light" ? "text-black" : "text-white"
            } dark:text-gray-300`}
          >
            {contextTheme?.theme === "light" ? "Light Mode" : "Dark Mode"}
          </span>
        </label>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  export const SidebarLink = ({
    link,
    className,
    ...props
  }) => {
    const { open, animate } = useSidebar();
    const contextTheme = useContext(ThemeContext); // Access the theme context
    const textColor = contextTheme?.theme === "dark" ? "text-white" : "text-black"; // Determine color based on theme
  
    return (
      <Link
        to={link.href}
        className={cn(
          "flex items-center justify-start gap-2 group/sidebar py-2",
          className
        )}
        {...props}
        onClick={link.onclick}
      >
        {/* Apply dynamic color to the icon */}
        {React.cloneElement(link.icon, { className: cn("icon", textColor) })}
        <motion.span
          animate={{
            display: animate ? (open ? "inline-block" : "none") : "inline-block",
            opacity: animate ? (open ? 1 : 0) : 1,
          }}
          className={cn(
            "text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0",
            textColor // Apply dynamic color to text
          )}
        >
          {link.label}
        </motion.span>
      </Link>
    );
  };
  