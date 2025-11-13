"use client";
import React, { useRef, useMemo, useContext, createContext } from "react";
import { useGLTF, Merged } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const PenContext = createContext();

export function PenInstances({ children, ...props }) {
  const { nodes } = useGLTF("/models/scenee-transformed.glb");
  const instances = useMemo(
    () => ({
      Penblinn: nodes.pen_blinn4_0,
      Penlambert: nodes.pen_lambert3_0,
    }),
    [nodes]
  );
  return (
    <Merged meshes={instances} {...props}>
      {(merged) => (
        <PenContext.Provider value={merged}>{children}</PenContext.Provider>
      )}
    </Merged>
  );
}

const Pen = React.memo(function Pen(props) {
  const instances = useContext(PenContext);
  const modelRef = useRef();

  // Keep rotation animation like the staff
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.009;
    }
  });

  return (
    <group
      {...props}
      dispose={null}
      scale={[1.5, 1.5, 1.5]} // same scaling as staff
      position={[0, -2, 0]}
      ref={modelRef}
    >
      <group name="Sketchfab_Scene">
        <instances.Penblinn
          name="pen_blinn4_0"
          userData={{ name: "pen_blinn4_0" }}
        />
        <instances.Penlambert
          name="pen_lambert3_0"
          userData={{ name: "pen_lambert3_0" }}
        />
      </group>
    </group>
  );
});

export default function PenModelWrapper(props) {
  return (
    <PenInstances>
      <Pen {...props} />
    </PenInstances>
  );
}

useGLTF.preload("/models/scenee-transformed.glb");
