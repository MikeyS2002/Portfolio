import React, { useEffect, useRef } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

const Experience = ({ loading }) => {
  const holeRef = useRef();
  const cameraRef = useRef();
  const vec = new THREE.Vector3();

  useEffect(() => {
    setTimeout(() => {
      cameraRef.current.rotation.x = -0.1;
      cameraRef.current.rotation.y = -0.4;
    }, 5000);
  }, []);

  useFrame((state) => {
    if (!loading) {
      holeRef.current.rotation.y += 0.002;
      cameraRef.current.position.lerp(vec.set(-2, 0, 8), 0.005);
      cameraRef.current.rotation.x = state.mouse.x * 0.005;
      cameraRef.current.rotation.y = state.mouse.y * 0.005;
      cameraRef.current.updateProjectionMatrix();
    }
    return null;
  });

  const gltf = useLoader(
    GLTFLoader,
    "./gltf/wormhole_black_hole_galaxy/scene.gltf"
  );
  return (
    <>
      <PerspectiveCamera makeDefault ref={cameraRef} position={[-13, 5, 23]} />
      {/* intensity, from 0.1 to 1 */}
      <pointLight position={[0, 20, 10]} intensity={0.1} />
      <primitive
        ref={holeRef}
        position-x={-2}
        position-y={0}
        position-z={-5}
        rotation-x={8}
        object={gltf.scene}
      ></primitive>
    </>
  );
};

export default Experience;
