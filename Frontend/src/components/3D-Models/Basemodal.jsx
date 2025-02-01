import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { NavigationMenuDemo } from "../components/Shadcn/main/navigationmenudemo";

const Box = () => {
  const ref = useRef();

  // Rotating animation
  useFrame((state, delta) => {
    ref.current.rotation.y += delta;
    ref.current.rotation.x += delta * 0.5; // Slightly tilt in X-axis
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};
const Basemodal = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-5">
          {/* <NavigationMenuDemo/> */}
          {/* 3D Canvas */}
          <div className="w-[400px] h-[400px]">
            <Canvas camera={{ position: [2, 2, 2] }}>
              {/* Lights */}
              <ambientLight intensity={0.5} /> {/* Soft global lighting */}
              <pointLight position={[3, 3, 3]} intensity={1} /> {/* Adds depth */}
              
              {/* 3D Object */}
              <Box />
              
              {/* Controls */}
              <OrbitControls enableZoom={false} /> {/* Allow rotation but no zoom */}
            </Canvas>
          </div>
    
    
    
          {/* Heading Below */}
          <h1 className="mt-5 text-2xl font-bold text-center">🌟 3D Box Model with Lights & Controls 🌟</h1>
        </div>
      );
}

export default Basemodal
