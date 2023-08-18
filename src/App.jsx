import React,{Suspense, useRef } from "react";
import {Canvas, useFrame } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";
import Model from "./Model.jsx";


const Scene = () => {
  const boxRef = useRef();
  useFrame((state, delta) => {
    boxRef.current.rotation.y += 0.02;
  });
  return (
    <>
      <Box ref={boxRef} args={[1, 1, 1]} rotation={[0.5, 0, 0]}>
      <Suspense fallback ={null}>
        <Model />
      </Suspense>
      {/*REPLACE THIS LIGHT AS NEEDED IT'S A GOOD START*/}
      <ambientLight />
    </>
  );
};


const App = () => {
  return (
    <Canvas gl={{ physicallyCorrectLights: true, toneMappingExposure:.005 }}>
        {/* REMOVE ORBIT CONTROLS TO FORCE THE CAMERA VIEW*/}
    <OrbitControls/>
      <Scene />
    </Canvas>
  );
};

export default App;
