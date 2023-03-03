import React, { useEffect, useRef } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import { motion } from "framer-motion-3d";

const Experience = ({ loading }) => {
  const holeRef = useRef();
  const cameraRef = useRef();
  const vec = new THREE.Vector3();

  const variants = {
    hidden: { x: 5, y: -1, z: -3 },
    visible: {
      x: 0,
      y: -1,
      z: 0,
      transition: { duration: 10, ease: "easeOut" },
    },
  };

  const deg_rad = (degrees) => {
    const pi = Math.PI;
    return degrees * (pi / 180);
  };

  useEffect(() => {}, []);

  useFrame((state) => {});

  const gltf = useLoader(
    GLTFLoader,
    "./gltf/mike_sully_faceswap_meme/scene.gltf"
  );
  return (
    <>
      <PerspectiveCamera makeDefault ref={cameraRef} position={[0, 0, 5]} />

      <OrbitControls />

      <motion.pointLight intensity={0.2} position={[0, 2, 5]} />
      <ambientLight intensity={0.05} />
      <motion.primitive
        initial="hidden"
        animate="visible"
        variants={variants}
        rotation={[0, deg_rad(270), 0]}
        ref={holeRef}
        object={gltf.scene}
      ></motion.primitive>
    </>
  );
};

export default Experience;
