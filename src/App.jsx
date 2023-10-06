import "./App.css";
import React from "react";
import * as THREE from "three";
import { OrbitControls, Preload, Stars } from "@react-three/drei";
import { Canvas, extend } from "@react-three/fiber";

// extend({ anotherOne });

// const anotherOne = () => {
//   return (
//     <mesh
//       visible
//       userData={{ hello: "world" }}
//       position={[1, 2, 3]}
//       rotation={[Math.PI / 2, 0, 0]}
//     >
//       <sphereGeometry args={[1, 16, 16]} />
//       <meshStandardMaterial color="hotpink" transparent />
//     </mesh>
//   );
// };

function App() {
  return (
    <>
      <div className="container">
        {/* <div className="left">Goodness Heavens, just work mann</div> */}
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
            {/* <anotherOne /> */}
            <OrbitControls enableZoom={false} />

            <Preload all />
          </Canvas>
        </div>
      </div>
    </>
  );
}

export default App;
