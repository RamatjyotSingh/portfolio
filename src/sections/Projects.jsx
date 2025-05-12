import { Canvas } from "@react-three/fiber";
import { myProjects } from "../constants"
import { useState, Suspense, useRef } from "react"
import { Center } from "@react-three/drei";
import DemoComputer from "../components/DemoComputer";
import CanvasLoader from "../components/CanvasLoader";
import { OrbitControls } from "@react-three/drei";
import { motion, AnimatePresence, useInView } from "framer-motion";

const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
    const currentProject = myProjects[selectedProjectIndex];
    const rotationDirection = useRef(null);
    
    // Refs for detecting when elements are in view
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const contentRef = useRef(null);
    const modelRef = useRef(null);
    
    // Only trigger animations once when elements come into view
    const isSectionInView = useInView(sectionRef, { once: true, amount: 0.1 });
    const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
    const isContentInView = useInView(contentRef, { once: true, amount: 0.2 });
    const isModelInView = useInView(modelRef, { once: true, amount: 0.2 });
    
    // Animation variants for container and staggered text
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };
    
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    const handleNavigation = (dir) => {
        if (dir === 'next') {
            setSelectedProjectIndex((prevIndex) => (prevIndex + 1) % myProjects.length);
        } else if (dir === 'prev') {
            setSelectedProjectIndex((prevIndex) => (prevIndex - 1 + myProjects.length) % myProjects.length);
        }
        rotationDirection.current = dir;
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
        <section ref={sectionRef} id="work" className="c-space my-20">
            <motion.p 
                ref={headingRef}
                initial={{ opacity: 0, y: 30 }}
                animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6 }}
                className="head-text"
            >
                My Work
            </motion.p>
            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
                <motion.div 
                    ref={contentRef}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isContentInView ? "visible" : "hidden"}
                    className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200"
                >
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={`spotlight-${selectedProjectIndex}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute top-0 right-0"
                        >
                            <img src={currentProject.spotlight} alt="Project Image" className="w-full h-96 object-cover rounded-xl" />
                        </motion.div>
                    </AnimatePresence>
                    
                    <motion.div 
                        variants={textVariants}
                        className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg z-10" 
                        style={currentProject.logoStyle}
                    >
                        <img src={currentProject.logo} alt="Project Logo" className="w-10 h-10 shadow-sm" />
                    </motion.div>
                    
                    <div className="flex flex-col gap-5 text-white-600 my-5">
                        <AnimatePresence mode="wait">
                            <motion.p 
                                key={`title-${selectedProjectIndex}`}
                                variants={textVariants}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                                className="text-white text-2xl font-semibold animatedText"
                            >
                                {currentProject.title}
                            </motion.p>
                        </AnimatePresence>

                        <AnimatePresence mode="wait">
                            <motion.p 
                                key={`desc-${selectedProjectIndex}`}
                                variants={textVariants}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                                className="animatedText"
                            >
                                {currentProject.desc}
                            </motion.p>
                        </AnimatePresence>

                        <AnimatePresence mode="wait">
                            <motion.p 
                                key={`subdesc-${selectedProjectIndex}`}
                                variants={textVariants}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                                className="animatedText"
                            >
                                {currentProject.subdesc}
                            </motion.p>
                        </AnimatePresence>
                    </div>

                    <motion.div 
                        variants={textVariants}
                        className="flex items-center justify-between flex-wrap gap-5"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div 
                                key={`tags-${selectedProjectIndex}`}
                                className="flex items-center gap-3"
                            >
                                {currentProject.tags.map((tech, index) => (
                                    <motion.div 
                                        key={index} 
                                        className="tech-logo"
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0 }}
                                        transition={{ duration: 0.3, delay: 0.1 * index }}
                                    >
                                        <img src={tech.path} alt="Tech Logo" />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>

                        <motion.a 
                            variants={textVariants}
                            className="flex z-10 items-center gap-2 cursor-pointer text-white-600 hover:text-white transition-colors" 
                            href={currentProject.href} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <span>Check out {mapExternalLinkText(currentProject.externalLink)}</span>
                            <img className="h-3 w-3 inline-block" src="/assets/arrow-up.png" alt="arrow" />
                        </motion.a>
                    </motion.div>
                    
                    <motion.div 
                        variants={textVariants}
                        className="flex justify-between items-center mt-7"
                    >
                        <button className="arrow-btn" onClick={() => handleNavigation('prev')}>
                            <img className="h-4 w-4" src="/assets/left-arrow.png" alt="arrow" />
                        </button>
                        <button className="arrow-btn" onClick={() => handleNavigation('next')}>
                            <img className="h-4 w-4" src="/assets/right-arrow.png" alt="arrow" />
                        </button>
                    </motion.div>
                </motion.div>
                
                <motion.div 
                    ref={modelRef}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isModelInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.7 }}
                    className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full"
                >
                    <Canvas>
                        <ambientLight intensity={Math.PI} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                        <Center>
                            <Suspense fallback={<CanvasLoader />}>
                                <group scale={2} position={[0,-3,0]} >
                                    <DemoComputer texture={currentProject.texture} direction={rotationDirection} />
                                </group>
                            </Suspense>
                        </Center>
                        <OrbitControls
                            enableZoom={false}
                            enablePan={false}
                            maxPolarAngle={Math.PI / 2}
                        />
                    </Canvas>
                </motion.div>
            </div>
        </section>
    )
}

export default Projects