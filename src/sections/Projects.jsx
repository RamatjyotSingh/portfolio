import { Canvas } from "@react-three/fiber";
import { myProjects } from "../constants"
import { useState, Suspense, useRef } from "react"
import { Center } from "@react-three/drei";
import DemoComputer from "../components/DemoComputer";
import CanvasLoader from "../components/CanvasLoader";
import  {OrbitControls}  from "@react-three/drei";
const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
    const currentProject = myProjects[selectedProjectIndex]; // Update to use selectedProjectIndex
    const rotationDirection= useRef(null); // Initialize direction
    const handleNavigation=(dir)=>{

        if (dir === 'next') {
            setSelectedProjectIndex((prevIndex) => (prevIndex + 1) % myProjects.length);
        } else if (dir === 'prev') {
            setSelectedProjectIndex((prevIndex) => (prevIndex - 1 + myProjects.length) % myProjects.length);
        }
        rotationDirection.current = dir; // Update direction ref
    }

    const mapExternalLinkText = (externalLink) => {
        const linkMap = {

            "github": "GitHub repo",
            "website": "live site",
            "youtube": "YouTube Demo",
            
        };

        return linkMap[externalLink] || "link";
    }

    return (
        <section id = "work" className="c-space my-20">
            <p className="head-text">My Work</p>
            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
                <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
                    <div className="absolute top-0 right-0">
                        <img src={currentProject.spotlight} alt="Project Image" className="w-full h-96 object-cover rounded-xl" /></div>
                    <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
                        <img src={currentProject.logo} alt="Project Logo" className="w-10 h-10 shadow-sm" />
                    </div>
                    <div className="flex flex-col gap-5 text-white-600 my-5">
                        <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>
                        <p className="animatedText">{currentProject.desc}</p>
                        <p className="animatedText">{currentProject.subdesc}</p>
                    </div>

                    <div className="flex items-center justify-between flex-wrap gap-5">
                        <div className="flex items-center gap-3">
                            {currentProject.tags.map((tech, index) => (
                                <div key={index} className="tech-logo">
                                    <img src={tech.path} alt="Tech Logo" />
                                </div>
                            ))}
                        </div>
                        <a 
                          className="flex z-10 items-center gap-2 cursor-pointer text-white-600 hover:text-white transition-colors" 
                          href={currentProject.href} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <span>Check out {mapExternalLinkText(currentProject.externalLink)}</span>
                          <img className="h-3 w-3 inline-block" src="/assets/arrow-up.png" alt="arrow" />
                        </a>
                    </div>
                    <div className="flex justify-between items-center mt-7">
                        <button className="arrow-btn" onClick={() => handleNavigation('prev')}>
                            <img className ="h-4 w-4" src="/assets/left-arrow.png" alt="arrow" />
                        </button>
                        <button className="arrow-btn" onClick={() => handleNavigation('next')}>
                            <img className ="h-4 w-4" src="/assets/right-arrow.png" alt="arrow" />
                        </button>
                    </div>

                </div>
                <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
                    <Canvas>
                        <ambientLight intensity={Math.PI} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />

                        <Center>
                            <Suspense fallback={<CanvasLoader />}>
                                <group scale={2} position={[0,-3,0]} rotation={[0,-0.1,0]}>
                                    <DemoComputer texture = {currentProject.texture} direction = {rotationDirection}  />
                                </group>
                            </Suspense>
                        </Center>

                        <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        maxPolarAngle={Math.PI / 2}
                           />
                    </Canvas>


                </div>
            </div>

        </section>
    )
}

export default Projects