import React from "react";
import * as THREE from "three";
import { OrbitControls, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "./Loader";

// let scene, camera, render, controls, pointLight;

function Sphere() {
  //   //Scene
  //   scene = new THREE.scene();

  //   //Rendering
  //   render = new THREE.WebGL1Renderer({ alpha: true, antialias: true });
  //   render.setSize(window.innerWidth, window.innerHeight);
  //   document.body.appendChild(render.domElement);

  //   //Camera
  //   camera = new THREE.PerspectiveCamera(
  //     50,
  //     window.innerWidth / innerHeight,
  //     1,
  //     1000
  //   );
  //   camera.position.set(0, 0, 500);

  //   //Controls
  //   controls = new OrbitControls(camera, renderer.domElement);

  //   pointLight = new THREE.pointLight(0xffffff, 1);
  //   pointLight.position.set(200, 200, 200);

  //   //adding the point light to the scene
  //   scene.add(pointLight);

  //   //Sphere
  //   const ballGeo = new THREE.SphereGeometry(100, 64, 64);
  //   const ballMat = new THREE.MeshPhysicalMaterial();
  //   const ballMesh = new THREE.Mesh(ballGeo, ballMat);

  //   //Adding the sphere mesh to scene
  //   scene.add(ballMesh);

  //   animate();

  //   function animate() {
  //     controls.update();
  //     renderer.render(scene, camera);
  //     requestAnimationFrame(animate);
  //   }

  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  );
}

export default Sphere;
