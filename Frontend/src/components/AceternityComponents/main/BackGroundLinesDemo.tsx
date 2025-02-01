"use client";
import { BackgroundLines } from "../../AceternityComponents/support/background-lines";

const BackgroundLinesDemo: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (
        <div className="relative w-full flex flex-col items-center justify-center px-4 overflow-hidden">
            <BackgroundLines>
               
                {children}
            </BackgroundLines>
        </div>
    );
};

export default BackgroundLinesDemo;
