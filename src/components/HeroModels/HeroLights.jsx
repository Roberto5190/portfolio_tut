import React from "react";
import * as THREE from 'three';


const HeroLights = () => {
  return (
    <>

        <spotLight
            position={[5, 35, 24]}
            intensity={20000}
            penumbra={.2}
            color={"#ff5d00"}
        />
        
        <spotLight
            position={[45, 80, 90]}
            intensity={20000}
            penumbra={.2}
        />

        <primitive 
            object={new THREE.RectAreaLight('#A259FF', 10, 30, 2)}
            position={[-150, 25, 100]}
            intensity={2000}
        />

    </>
  );
};

export default HeroLights;
