import { useState, useRef } from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button'
import Tiles from '../components/Tiles'
import { motion } from 'framer-motion'

const About = () => {
  const [isCopied, setIsCopied] = useState(false)
  const [showWinnipeg, setShowWinnipeg] = useState(false)
  const globeRef = useRef(null)
  
  // Winnipeg coordinates
  const winnipegCoordinates = {
    lat: 49.8951,
    lng: -97.1384,
    name: "Winnipeg"
  }
  
  const handleCopy = () => {
    navigator.clipboard.writeText('ramatjyot13.ca@gmail.com')
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }
  
  const handleFindMe = () => {
    setShowWinnipeg(true);
    if (globeRef.current) {
      // Stop auto-rotation when finding Winnipeg
      globeRef.current.controls().autoRotate = false;
      
      // Then navigate to Winnipeg
      setTimeout(() => {
        globeRef.current.pointOfView({
          lat: winnipegCoordinates.lat,
          lng: winnipegCoordinates.lng,
          altitude: 0.5
        }, 1000);
      }, 100);
      
      // Hide the marker after 5 seconds
   
      
      // Resume auto-rotation after 8 seconds (after viewing Winnipeg)
      setTimeout(() => {
        // Zoom out a bit for a better view
        globeRef.current.pointOfView({
          lat: 0,
          lng: 0,
          altitude: 2.5
        }, 2000);
        
        // Restart rotation
        setTimeout(() => {
          globeRef.current.controls().autoRotate = true;
          globeRef.current.controls().autoRotateSpeed = 0.8;
        }, 2000);
      }, 8000);
    }
  }
  
  return (
    <section id='about' className='c-space my-20'>
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* Introduction Card */}
        <motion.div 
          className="col-span-1 xl:row-span-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="grid-container">
            <img src="/assets/grid1.png" className="w-full sm:h-[276px] h-fit object-contain" alt="Portrait of Ramatjyot Singh" />
            <div>
              <p className="grid-headtext">Hi! I'm Ramatjyot Singh</p>
              <p className="grid-subtext">A versatile developer passionate about problem solving and innovation. I thrive on learning new technologies and building impactful solutions.</p>
            </div>
          </div>
        </motion.div>

        {/* Programming Passion Card */}
        <motion.div 
          className="col-span-1 xl:row-span-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="grid-container">
            <img src="/assets/grid3.png" alt="Programming visualization" className="w-full sm:h-[266px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">My Passion for Programming</p>
              <p className="grid-subtext">I'm driven by the challenge of solving complex problems and creating elegant, efficient solutions that make a difference.</p>
            </div>
          </div>
        </motion.div>

        {/* Global Availability Card */}
        <motion.div 
          className="col-span-1 xl:row-span-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                ref={globeRef}
                height={326}
                width={326}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl={"//unpkg.com/three-globe/example/img/earth-topology.png"}
                backgroundColor='rgba(0, 0, 0, 0)'
                backgroundImageOpacity={0.5}
                showGraticules={true}
                showAtmosphere={true}
                pointsData={showWinnipeg ? [winnipegCoordinates] : []}
                pointColor={() => 'red'}
                pointAltitude={0.07}
                pointRadius={0.5}
                pointLabel={point => point.name}
                onGlobeReady={() => {
                  // Start auto-rotation when globe loads
                  if (globeRef.current ) {
                    globeRef.current.controls().autoRotate = true;
                    globeRef.current.controls().autoRotateSpeed = 0.8;
                  }
                }}
              />
            </div>
            <div>
              <p className="grid-headtext">Flexible Across Regions & Timezones</p>
              <p className="grid-subtext">Based in Winnipeg, Canada, I'm available for remote work and can adapt to various time zones for seamless collaboration.</p>
              <Button name="Find Me" isBeam containerClass="w-full mt-8" onClick={handleFindMe} />
            </div>
          </div>
        </motion.div>

        {/* Tech Stack Card */}
        <motion.div 
          className="xl:col-span-2 xl:row-span-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid-container 2xl:flex-row-reverse flex-col">
            <Tiles />
            <div className='flex flex-col justify-center'>
              <p className="grid-headtext">Technical Expertise</p>
              <p className='grid-subtext'>My diverse technical background spans multiple languages and frameworks, allowing me to approach problems from different angles and select the right tools for each project.</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Card */}
        <motion.div 
          className="xl:col-span-1 xl:row-span-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid-container">
            <img 
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" 
              src="/assets/grid4.png" 
              alt="Contact visualization" 
            />
            <div className='space-y-2'>
              <p className="grid-headtext text-center">Let's Connect</p>
              <div 
                className="copy-container group  transition-all duration-300" 
                onClick={handleCopy}
              >
                <img 
                  src={isCopied ? "/assets/tick.svg" : "/assets/copy.svg"} 
                  alt={isCopied ? "Copied" : "Copy email"} 
                  className="group-hover:scale-110 transition-transform duration-300"
                />
                <p className='lg:text-2xl md:text-xl font-medium text-white/60 group-hover:text-white transition-colors duration-300'>
                  {isCopied ? "Email copied!" : "ramatjyot13.ca@gmail.com"}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About