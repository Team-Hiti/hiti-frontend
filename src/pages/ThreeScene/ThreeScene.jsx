import React, { useState, useEffect } from "react";
import { Canvas, useLoader, extend, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, Text } from "@react-three/drei";
import * as THREE from "three";
import "./ThreeScene.css";

// Extend the THREE namespace to include PlaneGeometry
extend({ PlaneGeometry: THREE.PlaneGeometry });

function Model({ path, scale, position, rotation }) {
  const { scene } = useGLTF(path);
  return (
    <primitive
      object={scene}
      scale={scale}
      position={position}
      rotation={rotation}
    />
  );
}

function Card({ textureSrc, position, rotation }) {
  const texture = useLoader(THREE.TextureLoader, textureSrc);
  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[40, 25]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}

function ThreeScene() {
  const [objToRender, setObjToRender] = useState("eye"); // Change this to 'eye' or 'dino' as per your model

  return (
    <Canvas camera={{ position: [14, -2, -22], fov: 100, near: 0.1, far: 1000 }}>
      <ambientLight intensity={1} />
      <pointLight position={[100, 100, 100]} intensity={1} />
      <pointLight position={[-100, -100, 100]} intensity={1} />
      <pointLight position={[0, 0, 300]} intensity={1} />

      <Model
        path={`/models/${objToRender}/scene-v2.gltf`}
        scale={[10, 10, 10]}
        position={[0, 10, 0]}
        rotation={[0, 0, 0]}
      />

      <Text
        position={[-29, 40, -80]}
        fontSize={5}
        color="yellow"
        bevelEnabled
        bevelThickness={0.5}
        bevelSize={0.3}
        bevelSegments={5}
      >
        S T O R I E S O F P A T A N
      </Text>

      <Card
        textureSrc="/js/card1.jpg"
        position={[-29, 25, -80]}
        rotation={[-Math.PI / 10, 0, 0]}
      />
      <Card
        textureSrc="/js/card2.jpg"
        position={[15, 25, -80]}
        rotation={[-Math.PI / 10, 0, 0]}
      />
      <Card
        textureSrc="/js/card3.jpg"
        position={[59, 25, -80]}
        rotation={[-Math.PI / 10, 0, 0]}
      />
      <Card
        textureSrc="/js/card4.jpg"
        position={[-94, 27, -80]}
        rotation={[0, Math.PI / 4, 0]}
      />
      <Card
        textureSrc="/js/card3.jpg"
        position={[124, 25, -80]}
        rotation={[0, -Math.PI / 4, 0]}
      />

      <OrbitControls
        enablePan={true}  // Enable panning
        enableZoom={true} // Enable zooming
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.5}
        target={[0, 0, 0]} // Adjust target to better suit the scene
      />
    </Canvas>
  );
}

export default ThreeScene;
