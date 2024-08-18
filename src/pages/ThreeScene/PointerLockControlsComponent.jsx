import React, { useEffect, useRef } from "react";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";
import { useThree, useFrame } from "@react-three/fiber";

function PointerLockControlsComponent() {
  const { camera, gl } = useThree();
  const controlsRef = useRef(null);
  const menuPanelRef = useRef(null);
  const startButtonRef = useRef(null);

  useEffect(() => {
    const controls = new PointerLockControls(camera, gl.domElement);
    controlsRef.current = controls;

    const menuPanel = menuPanelRef.current;
    const startButton = startButtonRef.current;

    if (startButton) {
      startButton.addEventListener("click", () => {
        controls.lock();
      });
    }

    if (menuPanel) {
      controls.addEventListener("lock", () => {
        menuPanel.style.display = "none";
      });
      controls.addEventListener("unlock", () => {
        menuPanel.style.display = "block";
      });
    }

    return () => {
      if (startButton) {
        startButton.removeEventListener("click", () => {
          controls.lock();
        });
      }

      if (menuPanel) {
        controls.removeEventListener("lock", () => {
          menuPanel.style.display = "none";
        });
        controls.removeEventListener("unlock", () => {
          menuPanel.style.display = "block";
        });
      }
    };
  }, [camera, gl]);

  useFrame(() => {
    if (controlsRef.current) {
      controlsRef.current.update();
    }
  });

  return (
    <>
      <div id="menuPanel" ref={menuPanelRef} style={{ display: "block" }}>
        Menu
      </div>
      <button id="startButton" ref={startButtonRef}>
        Start
      </button>
    </>
  );
}

export default PointerLockControlsComponent;
