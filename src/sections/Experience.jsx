import { Suspense, useState, useRef } from 'react'
import { workExperiences } from '../constants'
import CanvasLoader from '../components/CanvasLoader'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Me from '../components/Me'
import { motion, AnimatePresence, useInView } from "framer-motion";

const Experience = () => {
    const [animationName, setAnimationName] = useState("idle")
    
    // Refs for detecting when elements are in view
    const sectionRef = useRef(null)
    const titleRef = useRef(null)
    const contentRef = useRef(null)
    
    // Only trigger animations once when elements come into view
    const isSectionInView = useInView(sectionRef, { once: true, amount: 0.2 })
    const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 })
    const isContentInView = useInView(contentRef, { once: true, amount: 0.2 })
    
    // Animation variants for container and staggered children
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    }
    
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5 }
        }
    }
    
    return (
        <div ref={sectionRef} className="c-space my-20">
            <div className="w-full text-white-600">
                <motion.p 
                    ref={titleRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="head-text"
                >
                    My Work Experience
                </motion.p>
                <div className="work-container">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isSectionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.7 }}
                        className="work-canvas"
                    >
                        <Canvas>
                            <ambientLight intensity={7} />
                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                            <directionalLight position={[10, 10, 10]} intensity={1} />
                            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
                            <Suspense fallback={<CanvasLoader />}>
                                <Me position-y={-3} scale={3} animationName={animationName}/>
                            </Suspense>
                        </Canvas>
                    </motion.div>
                    
                    <motion.div 
                        ref={contentRef}
                        variants={containerVariants}
                        initial="hidden"
                        animate={isContentInView ? "visible" : "hidden"}
                        className="work-content"
                    >
                        <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                            <AnimatePresence>
                                {workExperiences.map(({id, name, pos, icon, duration, title, animation}, index) => (
                                    <motion.div 
                                        key={id} 
                                        variants={itemVariants}
                                        custom={index}
                                        className="work-content_container group" 
                                        onClick={() => setAnimationName(animation.toLowerCase())} 
                                        onPointerOver={() => setAnimationName(animation.toLowerCase())} 
                                        onPointerOut={() => setAnimationName("idle")}
                                    >
                                        <div className="flex flex-col h-full justify-start items-center py-2">
                                            <motion.div 
                                                className="work-content_logo"
                                                whileHover={{ scale: 1.1 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                <img src={icon} alt={name} className='h-full w-full'/>
                                            </motion.div>
                                            <motion.div 
                                                className="work-content_bar"
                                                initial={{ height: 0 }}
                                                animate={{ height: "100%" }}
                                                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                                            />
                                        </div>
                                        <div className="sm:p-5 px-2.5 py-5">
                                            <motion.p 
                                                className="font-bold text-white-800"
                                                variants={itemVariants}
                                            >
                                                {name}
                                            </motion.p>
                                            <motion.p 
                                                className="text-sm mb-5"
                                                variants={itemVariants}
                                            >
                                                {pos} -- {duration}
                                            </motion.p>
                                            <motion.p 
                                                className="group-hover:text-white transition ease-in-out duration-500"
                                                variants={itemVariants}
                                            >
                                                {title}
                                            </motion.p>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Experience