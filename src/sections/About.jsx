import Globe from 'react-globe.gl'
import Button from '../components/Button'
import { useState } from 'react'

const About = () => {
  const [isCopied, setIsCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText('ramatjyot13.ca@gmail.com')
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }
  return (
    <section id='about' className='c-space my-20'>
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid1.png" className="w-full sm:h-[276px] h-fit object-contain " alt="About" />
            <div>
              <p className="grid-headtext" >Hi! I'm Ramatjyot Singh</p>
              <p className="grid-subtext">A jack of all  that loves learning and building cool stuff. I am passionate about Problem solving and innovation.</p>

            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
            <div className="grid-container">
              <img src="/assets/grid2.png" alt="Grid 2" className='w-full sm:h-[276px] h-fit object-contain' />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className='grid-subtext'>I know java c c++ react node javascript python vue git android studio a lot of other stuff that I enjoy working with.</p>
            </div>

          </div>
      </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">

            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center ">
              <Globe
              height={326}
              width={326}
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
              bumpImageUrl={"//unpkg.com/three-globe/example/img/earth-topology.png"}
              backgroundColor='rgba(0, 0, 0, 0)'
              backgroundImageOpacity={0.5}

              showGraticules={true}
              showAtmosphere={true}
              
           
              
              />

            </div>
            <div >
              <p className="grid-headtext">I am flexile across different regions and timezones</p>
              <p className="grid-subtext">I am based in Winnipeg, With remote work availble</p>
              <Button name="Contact Me" isBeam containerClass=" w-full mt-10 " />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid3.png" alt="Grid 3" className="w-full sm:h-[266px] h-fit object-contain" />
            
            <div>
              <p className="grid-headtext">My Passion for Programming</p>
              <p className="grid-subtext">I love Solving Problems and find new Innovative solutions.</p>
            </div>

            
            
            </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img className =" w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" src="/assets/grid4.png" alt="Grid 4" />
            
            <div className='space-y-2'>
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={isCopied ? "/assets/tick.svg" : "/assets/copy.svg"} alt="" />
                <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient text-white'>ramatjyot13.ca@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About