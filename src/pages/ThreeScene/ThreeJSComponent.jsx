import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";

const ThreeJSComponent = () => {
  const mountRef = useRef(null);
  const [controls, setControls] = useState(null);
  const [canJump, setCanJump] = useState(false);

  useEffect(() => {
    let camera, scene, renderer;
    let raycaster;
    let moveForward = false;
    let moveBackward = false;
    let moveLeft = false;
    let moveRight = false;
    const velocity = new THREE.Vector3();
    const direction = new THREE.Vector3();
    const vertex = new THREE.Vector3();
    const color = new THREE.Color();
    const objects = [];
    let prevTime = performance.now();
    const onKeyDown = (event) => {
      switch (event.code) {
        case "ArrowUp":
        case "KeyW":
          moveForward = true;
          break;
        case "ArrowLeft":
        case "KeyA":
          moveLeft = true;
          break;
        case "ArrowDown":
        case "KeyS":
          moveBackward = true;
          break;
        case "ArrowRight":
        case "KeyD":
          moveRight = true;
          break;
        case "Space":
          if (canJump) velocity.y += 350;
          setCanJump(false);
          break;
      }
    };

    const onKeyUp = (event) => {
      switch (event.code) {
        case "ArrowUp":
        case "KeyW":
          moveForward = false;
          break;
        case "ArrowLeft":
        case "KeyA":
          moveLeft = false;
          break;
        case "ArrowDown":
        case "KeyS":
          moveBackward = false;
          break;
        case "ArrowRight":
        case "KeyD":
          moveRight = false;
          break;
      }
    };
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const init = () => {
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        1,
        1000
      );
      camera.position.y = 10;

      scene = new THREE.Scene();
      scene.background = new THREE.Color(0xffffff);
      scene.fog = new THREE.Fog(0xffffff, 0, 750);

      const light = new THREE.HemisphereLight(0xeeeeff, 0x777788, 2.5);
      light.position.set(0.5, 1, 0.75);
      scene.add(light);

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setAnimationLoop(animate);
      mountRef.current.appendChild(renderer.domElement);

      // Controls
      const controls = new PointerLockControls(camera, renderer.domElement);
      setControls(controls);

      // Blocker and Instructions
      const blocker = document.createElement("div");
      blocker.style.position = "absolute";
      blocker.style.width = "100%";
      blocker.style.height = "100%";
      blocker.style.backgroundColor = "rgba(0,0,0,0.5)";
      mountRef.current.appendChild(blocker);

      const instructions = document.createElement("div");
      instructions.style.width = "100%";
      instructions.style.height = "100%";
      instructions.style.display = "flex";
      instructions.style.flexDirection = "column";
      instructions.style.justifyContent = "center";
      instructions.style.alignItems = "center";
      instructions.style.textAlign = "center";
      instructions.style.fontSize = "14px";
      instructions.style.cursor = "pointer";
      instructions.innerHTML = `
        <p style="font-size:36px">Click to play</p>
        <p>Move: WASD<br/>Jump: SPACE<br/>Look: MOUSE</p>
      `;
      blocker.appendChild(instructions);

      instructions.addEventListener("click", () => controls.lock());
      controls.addEventListener("lock", () => {
        instructions.style.display = "none";
        blocker.style.display = "none";
      });
      controls.addEventListener("unlock", () => {
        blocker.style.display = "block";
        instructions.style.display = "";
      });

      scene.add(controls.getObject());

      // Create floor
      let floorGeometry = new THREE.PlaneGeometry(2000, 2000, 100, 100);
      floorGeometry.rotateX(-Math.PI / 2);
      let position = floorGeometry.attributes.position;

      for (let i = 0, l = position.count; i < l; i++) {
        vertex.fromBufferAttribute(position, i);
        vertex.x += Math.random() * 20 - 10;
        vertex.y += Math.random() * 2;
        vertex.z += Math.random() * 20 - 10;
        position.setXYZ(i, vertex.x, vertex.y, vertex.z);
      }

      floorGeometry = floorGeometry.toNonIndexed();
      position = floorGeometry.attributes.position;
      const colorsFloor = [];

      for (let i = 0, l = position.count; i < l; i++) {
        color.setHSL(
          Math.random() * 0.3 + 0.5,
          0.75,
          Math.random() * 0.25 + 0.75
        );
        colorsFloor.push(color.r, color.g, color.b);
      }

      floorGeometry.setAttribute(
        "color",
        new THREE.Float32BufferAttribute(colorsFloor, 3)
      );
      const floorMaterial = new THREE.MeshBasicMaterial({ vertexColors: true });
      const floor = new THREE.Mesh(floorGeometry, floorMaterial);
      scene.add(floor);

      // Create objects
      const boxGeometry = new THREE.BoxGeometry(20, 20, 20).toNonIndexed();
      position = boxGeometry.attributes.position;
      const colorsBox = [];

      for (let i = 0, l = position.count; i < l; i++) {
        color.setHSL(
          Math.random() * 0.3 + 0.5,
          0.75,
          Math.random() * 0.25 + 0.75
        );
        colorsBox.push(color.r, color.g, color.b);
      }

      boxGeometry.setAttribute(
        "color",
        new THREE.Float32BufferAttribute(colorsBox, 3)
      );

      for (let i = 0; i < 500; i++) {
        const boxMaterial = new THREE.MeshPhongMaterial({
          specular: 0xffffff,
          flatShading: true,
          vertexColors: true,
        });
        boxMaterial.color.setHSL(
          Math.random() * 0.2 + 0.5,
          0.75,
          Math.random() * 0.25 + 0.75
        );
        const box = new THREE.Mesh(boxGeometry, boxMaterial);
        box.position.x = Math.floor(Math.random() * 20 - 10) * 20;
        box.position.y = Math.floor(Math.random() * 20) * 20 + 10;
        box.position.z = Math.floor(Math.random() * 20 - 10) * 20;
        scene.add(box);
        objects.push(box);
      }

      raycaster = new THREE.Raycaster(
        new THREE.Vector3(),
        new THREE.Vector3(0, -1, 0),
        0,
        10
      );

      document.addEventListener("keydown", onKeyDown);
      document.addEventListener("keyup", onKeyUp);

      window.addEventListener("resize", onWindowResize);

      // Define animate function
      function animate() {
        const time = performance.now();

        if (controls.isLocked) {
          raycaster.ray.origin.copy(controls.getObject().position);
          raycaster.ray.origin.y -= 10;
          const intersections = raycaster.intersectObjects(objects, false);
          const onObject = intersections.length > 0;
          const delta = (time - prevTime) / 1000;

          velocity.x -= velocity.x * 10.0 * delta;
          velocity.z -= velocity.z * 10.0 * delta;
          velocity.y -= 9.8 * 100.0 * delta;

          direction.z = Number(moveForward) - Number(moveBackward);
          direction.x = Number(moveRight) - Number(moveLeft);
          direction.normalize();

          if (moveForward || moveBackward)
            velocity.z -= direction.z * 400.0 * delta;
          if (moveLeft || moveRight) velocity.x -= direction.x * 400.0 * delta;

          if (onObject) {
            velocity.y = Math.max(0, velocity.y);
            setCanJump(true);
          }

          controls.moveRight(-velocity.x * delta);
          controls.moveForward(-velocity.z * delta);
          controls.getObject().position.y += velocity.y * delta;

          if (controls.getObject().position.y < 10) {
            velocity.y = 0;
            controls.getObject().position.y = 10;
            setCanJump(true);
          }
        }

        prevTime = time;
        renderer.render(scene, camera);
      }

      // Start animation loop
      renderer.setAnimationLoop(animate);
    };

    init();

    return () => {
      // Cleanup on component unmount
      if (controls) {
        controls.dispose();
      }
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("keyup", onKeyUp);
      window.removeEventListener("resize", onWindowResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [controls, canJump]);

  return <div ref={mountRef} style={{ width: "100%", height: "100vh" }} />;
};

export default ThreeJSComponent;
