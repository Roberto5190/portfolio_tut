import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import { Room } from './Room'
import HeroLights from './HeroLights'
const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <Canvas camera={{ position: [100, 180, 280], fov: 45}}>

        <OrbitControls
            enablePan={false}
            enableZoom={!isTablet}
            maxDistance={500}
            minDistance={5}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI / 2}
            enableRotate={true}
        />

        <HeroLights />

        <group 
            scale={isMobile ? 0.9 : 1.4}
            position={[0, -80, 0]}
            rotation={[ 0, Math.PI /1 - 0.3, 0]}
        >
            <Room />
        </group>
        


    </Canvas>
  )
}

export default HeroExperience