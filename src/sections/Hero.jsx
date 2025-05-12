import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import HackerRoom from '../components/HackerRoom'
import CanvasLoader from '../components/CanvasLoader'
import { calculateSizes } from '../constants'
import Rings from '../components/Rings'
import ReactLogo from '../components/ReactLogo'
import Target from '../components/Target'
import Cube from '../components/Cube'
import HeroCamera from '../components/HeroCamera'
import { useMediaQuery } from 'react-responsive'
import Button from '../components/Button'

const Hero = () => {

    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section id = "home"className="min-h-screen flex w-full flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">Hello There, I am Ramat <span className="waving-hand">👋</span></p>
                <p className="hero_tag text-gray_gradient">Building Fun Projects</p>
            </div>
            <div className="w-full h-full absolute inset-0">
                <Canvas className="h-full w-full">
                    <PerspectiveCamera makeDefault position={isMobile ? [0, 0, 20] : [0, 0, 20]} />
                    <ambientLight intensity={1} />
                    <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    <HeroCamera isMobile={isMobile}>
                        <HackerRoom
                            scale={sizes.deskScale}
                            rotation={[0, -Math.PI, 0]}
                            position={sizes.deskPosition} />
                    </HeroCamera>
                    <group>
                        <Rings position={sizes.ringPosition} />
                        <Target position={sizes.targetPosition} />
                        <ReactLogo position={sizes.reactLogoPosition} />
                        <Cube position={sizes.cubePosition} />
                    </group>
                 
                </Canvas>
            </div>
            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space sm:flex justify-center items-center">
                <a className='w-fit' href="#about">
                    <Button name="Hop On!" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                </a>
            </div>
        </section>
    )
}

export default Hero