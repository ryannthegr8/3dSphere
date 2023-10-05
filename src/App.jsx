import "./App.css";

import * as THREE from "three";
import { OrbitControls, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <>
      <div className="container">
        <div className="left">Goodness Heavens, just work mann</div>
        <div id="canvas" className="right">
          <Canvas
            frameloop="demand"
            shadows
            gl={{ preserveDrawingBuffer: true }}
          >
            <ambientLight intensity={0.1} />
            <directionalLight color="purple" position={[0, 0, 20]} />
            <pointLight />
            <mesh>
              <sphereGeometry args={[2, 64, 64]} />
              <meshPhysicalMaterial />
            </mesh>
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </>
  );
}

export default App;
