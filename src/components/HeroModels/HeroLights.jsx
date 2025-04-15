import React from "react";
import * as THREE from 'three';
import { useMediaQuery } from 'react-responsive'


const HeroLights = () => {

  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <>

        <spotLight
            position={isMobile ? [5, 35, 24] : [5, 60, 40]}
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
