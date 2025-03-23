// Avatar.jsx
import React, { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

function AvatarModel() {
  const { scene } = useGLTF("/Avatar.glb");
  const ref = useRef();

  useEffect(() => {
    // Avatar ko correct position pe set karo
    scene.scale.set(2.5, 2.5, 2.5); // Avatar ko bada karo
    scene.position.set(0, -1.5, 0); // Thoda neeche position
    scene.rotation.y = Math.PI; // Front-facing karo
  }, [scene]);

  useFrame(() => {
    // Rotation ko smooth karne ke liye (agar required ho)
    if (ref.current) {
      ref.current.rotation.y += 0.001; // Slight auto-rotate (optional)
    }
  });

  return <primitive ref={ref} object={scene} />;
}

function Avatar() {
  return (
    <Canvas className="avatar-canvas">
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 5]} />
      <AvatarModel />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}

export default Avatar;
