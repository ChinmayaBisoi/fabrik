import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Mesh } from "three";
import { Model } from "./P1";

const Main = () => {
  return (
    <div className="min-h-screen bg-[#c2c2c2] flex justify-center items-center">
      <div className="border border-[#e10000] w-full h-[100vh]">
        <Canvas camera={{ fov: 70, position: [0, 0, 105] }}>
          <Suspense fallback={null}>
            <ambientLight />
            <directionalLight intensity={2} position={[0, 0, 50]} />
            <Model />
            <OrbitControls
              enablePan={true}
              enableRotate={true}
              enableZoom={true}
            />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Main;
