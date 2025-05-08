import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import HackerRoom from '../Components/HackerRoom'
import CanvasLoader from '../Components/CanvasLoader'
import { calculateSizes } from '../constants'
import Rings from '../Components/Rings'
import ReactLogo from '../Components/ReactLogo'
import Target from '../Components/Target'
import Cube from '../Components/Cube'
import HeroCamera from '../Components/HeroCamera'
import { useMediaQuery } from 'react-responsive'
import Button from '../Components/Button'

const Hero = () => {
    const sizes = calculateSizes()
    const isMobile = useMediaQuery({ maxWidth: 768 })
    console.log(isMobile)
  return (
   <section className="min-h-screen flex w-full flex-col relative">
    <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">Hello There, I am Ramat <span className="waving-hand">👋</span></p>
        <p className="hero_tag text-gray_gradient">Building Fun Projects</p>
    </div>
    <div className="w-full h-full absolute inset-0">
        <Canvas className="h-full w-full">
            <PerspectiveCamera makeDefault position={isMobile?[0,0,20]:[0, 5, 2]}  />
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
            <HeroCamera isMobile={isMobile}>
                <HackerRoom
                scale={sizes.deskScale}
                rotation={[0,-Math.PI, 0]}
                position={sizes.deskPosition} />
            </HeroCamera>
            <group>
                <Rings position={sizes.ringPosition} />
                <Target position ={sizes.targetPosition} />
                <ReactLogo position={sizes.reactLogoPosition} />
                <Cube position={sizes.cubePosition} />
            </group>
            <OrbitControls   />
        </Canvas>
    </div>
    <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space sm:flex justify-center items-center">
        <a className='w-fit' href="#about">
            <Button name="Hope On!" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
        </a>
    </div>
   </section>
  )
}

export default Hero