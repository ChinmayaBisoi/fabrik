/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    node_id30: THREE.Mesh;
  };
  materials: {
    ["405"]: THREE.MeshStandardMaterial;
  };
};

export function Model5(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/xbox.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.node_id30.geometry}
        material={materials["405"]}
        position={[0, -0.25, 0.29]}
        rotation={[0, -1.57, 0]}
        scale={0.05}
      />
    </group>
  );
}

useGLTF.preload("/xbox.glb");
