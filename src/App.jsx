import "./App.css";
import React, { Suspense } from "react";
import {
  CameraShake,
  Cloud,
  OrbitControls,
  Preload,
  Sky,
  SpotLight,
  Stars,
  useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Camera } from "three";

function SpinningSphere() {
  return (
    <>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      <ambientLight intensity={0.1} />
      <directionalLight color="purple" position={[0, 0, 20]} />
      <pointLight />
      <Stars />
      <mesh>
        <sphereGeometry args={[2, 64, 64]} />
        <meshPhysicalMaterial />
      </mesh>
    </>
  );
}

function App() {
  return (
    <>
      <div className="container">
        {/* <div className="left">Goodness Heavens, just work mann</div> */}
        <div id="canvas" className="right">
          <Suspense fallback={null}>
            <Canvas
              frameloop="demand"
              shadows
              gl={{ preserveDrawingBuffer: true }}
            >
              <SpinningSphere />

              <Preload all />
            </Canvas>
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default App;
