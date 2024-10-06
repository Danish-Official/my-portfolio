import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./Loading";
import { easing } from "maath";

// eslint-disable-next-line react/prop-types
const Computers = ({ isMobile }) => {
  const computer = useGLTF("./models/desktop_pc/scene.gltf");
  const group = useRef();

  useFrame((state, delta) => {
    if (!isMobile) {
      easing.dampE(
        group.current.rotation,
        [-state.pointer.y / 8, state.pointer.x / 2, 0],
        0.25,
        delta
      );
    }
  });
  return (
    <group>
      <pointLight intensity={1.5} position={[1, 0, 0]} />
      <ambientLight intensity={1} />
      <directionalLight intensity={2} />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.7}
        position={isMobile ? [0, -3, -2.2] : [2, -2, -2]}
        rotation={[0, 0, 0]} // Adjust as needed
        ref={group}
      />

    </group>
  );
};

// eslint-disable-next-line react/prop-types
const ComputersCanvas = ({ isMobile }) => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 5, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
