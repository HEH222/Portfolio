"use client";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Text } from "@react-three/drei";

export default function Wizard(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/sscene-transformed.glb");

  // Rotate continuously
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.003;
    }
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={[0.01, 0.01, 0.01]}
      position={[0, 0, 1]}
    >
      {/* Laptop Body */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004_Auto_01_0.geometry}
        material={materials.Auto_01}
        position={[0, -25.593, 7.313]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_Auto_04_0.geometry}
        material={materials.Auto_04}
        position={[0, 50.454, -8.888]}
        rotation={[-1.943, 0, -Math.PI / 2]}
        scale={100}
      />

      {/* Text on the Screen */}
      <Text
        fontSize={18} // size of text
        color="white"
        anchorX="center"
        anchorY="middle"
        position={[0, 60, -9]} // adjust to match screen position
      >
        HEH
      </Text>
    </group>
  );
}

useGLTF.preload("/models/sscene-transformed.glb");
