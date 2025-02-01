"use client";
import { BackgroundBeams } from "../support/background-beams";

const BackgroundBeamsDemo: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (
        <div className="h-screen relative w-full overflow-hidden bg-neutral-950 flex flex-col items-center justify-center rounded-md antialiased">
            <div className="absolute inset-0 w-full h-full bg-neutral-950 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            <BackgroundBeams />
            {children}
        </div>
    );
};

export default BackgroundBeamsDemo;
