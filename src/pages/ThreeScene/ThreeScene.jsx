import React, { useEffect, useState, useRef } from "react";
import {
  Canvas,
  useLoader,
  extend,
  useThree,
  useFrame,
} from "@react-three/fiber";
import { OrbitControls, useGLTF, Text } from "@react-three/drei";
import * as THREE from "three";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";
import "./ThreeScene.css";
import { control } from "leaflet";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import AudioControl from "../../components/AudioControl/AudioControl";

// Extend the THREE namespace to include PointerLockControls
extend({ PointerLockControls });

function Model({ path, scale, position, rotation, setModelLoading }) {
  const { scene, camera, gl } = useThree();
  const [model, setModel] = useState(null);

  const controlsRef = useRef(null);
  const moveForward = useRef(false);
  const moveBackward = useRef(false);
  const moveLeft = useRef(false);
  const moveRight = useRef(false);
  const canJump = useRef(false);
  const prevTime = useRef(performance.now());
  const velocity = useRef(new THREE.Vector3());
  const direction = useRef(new THREE.Vector3());
  const raycaster = useRef(
    new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(0, -1, 0), 0, 10)
  );

  useEffect(() => {
    camera.position.set(15, 10, 10);
    const loader = new GLTFLoader();
    loader.load(
      path,
      (gltf) => {
        setModel(gltf.scene);
        setModelLoading(false);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      (error) => {
        console.error("An error happened", error);
      }
    );

    if (!controlsRef.current) {
      const controls = new PointerLockControls(camera, gl.domElement);
      controlsRef.current = controls;

      const blocker = document.getElementById("blocker");
      const instructions = document.querySelector(".enterExhibition");

      instructions.addEventListener("click", function () {
        controls.lock();
      });

      controls.addEventListener("lock", function () {
        instructions.style.display = "none";
        blocker.style.display = "none";
      });

      controls.addEventListener("unlock", function () {
        blocker.style.display = "block";
        instructions.style.display = "";
      });

      controls.getObject().position.set(85, 30, 50);
      controls.getObject().rotation.y = 0;
      scene.add(controls.getObject());

      const onKeyDown = function (event) {
        switch (event.code) {
          case "ArrowUp":
          case "KeyW":
            moveForward.current = true;
            break;
          case "ArrowLeft":
          case "KeyA":
            moveLeft.current = true;
            break;
          case "ArrowDown":
          case "KeyS":
            moveBackward.current = true;
            break;
          case "ArrowRight":
          case "KeyD":
            moveRight.current = true;
            break;
          case "Space":
            if (canJump.current) velocity.current.y += 350;
            canJump.current = false;
            break;
        }
      };

      const onKeyUp = function (event) {
        switch (event.code) {
          case "ArrowUp":
          case "KeyW":
            moveForward.current = false;
            break;
          case "ArrowLeft":
          case "KeyA":
            moveLeft.current = false;
            break;
          case "ArrowDown":
          case "KeyS":
            moveBackward.current = false;
            break;
          case "ArrowRight":
          case "KeyD":
            moveRight.current = false;
            break;
        }
      };

      document.addEventListener("keydown", onKeyDown);
      document.addEventListener("keyup", onKeyUp);

      window.addEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        gl.setSize(window.innerWidth, window.innerHeight);
      });

      return () => {
        document.removeEventListener("keydown", onKeyDown);
        document.removeEventListener("keyup", onKeyUp);
        scene.remove(controls.getObject());
      };
    }
  }, [camera, scene, gl, path, setModelLoading]);

  useFrame(() => {
    const time = performance.now();
    const controls = controlsRef.current;

    if (controls && controls.isLocked) {
      raycaster.current.ray.origin.copy(controls.getObject().position);
      raycaster.current.ray.origin.y -= 10;

      const intersections = raycaster.current.intersectObjects(
        scene.children,
        false
      );
      const onObject = intersections.length > 0;

      const delta = (time - prevTime.current) / 1000;

      velocity.current.x -= velocity.current.x * 10.0 * delta;
      velocity.current.z -= velocity.current.z * 10.0 * delta;
      velocity.current.y -= 9.8 * 100.0 * delta; // 100.0 = mass

      direction.current.z =
        Number(moveForward.current) - Number(moveBackward.current);
      direction.current.x =
        Number(moveRight.current) - Number(moveLeft.current);
      direction.current.normalize(); // this ensures consistent movements in all directions

      if (moveForward.current || moveBackward.current)
        velocity.current.z -= direction.current.z * 400.0 * delta;
      if (moveLeft.current || moveRight.current)
        velocity.current.x -= direction.current.x * 400.0 * delta;

      if (onObject) {
        velocity.current.y = Math.max(0, velocity.current.y);
        canJump.current = true;
      }

      controls.moveRight(-velocity.current.x * delta);
      controls.moveForward(-velocity.current.z * delta);
      controls.getObject().position.y += velocity.current.y * delta;

      if (controls.getObject().position.y < 30) {
        velocity.current.y = 0;
        controls.getObject().position.y = 30;
        canJump.current = true;
      }
    }

    prevTime.current = time;
  });

  if (!model) {
    return null;
  }

  return (
    <primitive
      object={model}
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
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        console.error("Failed to play audio:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };
  const audioRef = useRef(null);

  return (
    <div className="threeScene">
      <div id="blocker">
        {/* <div className="overlay"></div> */}
        <div id="instructions">
          {/* <AudioControl
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            togglePlay={togglePlay}
            audioRef={audioRef}
          /> */}
          <h1 style={{ fontSize: "36px" }}>WELCOME TO THE EXHIBITION</h1>
          <p>
            Move: WASD
            <br />
            Jump: SPACE
            <br />
            Look: MOUSE
          </p>
          <p className="enterExhibition">Click here to begin</p>
        </div>
      </div>
      <Canvas
        camera={{ position: [15, 0, 10], fov: 110, near: 0.01, far: 1000 }}
      >
        <ambientLight intensity={1} />
        <pointLight position={[100, 100, 100]} intensity={1} />
        <pointLight position={[-100, -100, 100]} intensity={1} />
        <pointLight position={[0, 0, 300]} intensity={1} />

        <Model
          path={`/models/exhibition_hall.glb`}
          scale={[10, 10, 10]}
          position={[15, 0, 10]}
          rotation={[0, 0, 0]}
        />

        {/* <Text
          position={[14, 45, -80]}
          fontSize={5}
          color="yellow"
          bevelEnabled
          bevelThickness={0.5}
          bevelSize={0.3}
          bevelSegments={5}
        >
          S T O R I E S O F P A T A N
        </Text> */}

        <Card
          textureSrc="/js/card1.jpg"
          position={[-50, 21.5, -90]}
          rotation={[0, 0, 0]}
        />
        <Card
          textureSrc="/js/card2.jpg"
          position={[45, 21.5, -90]}
          rotation={[0, 0, 0]}
        />
        <Card
          textureSrc="/js/card3.jpg"
          position={[-130, 21.5, -90]}
          rotation={[0, 0, 0]}
        />
        <Card
          textureSrc="/js/card4.jpg"
          position={[94, 21.5, -90]}
          rotation={[0, 0, 0]}
        />
      </Canvas>
    </div>
  );
}

export default ThreeScene;
