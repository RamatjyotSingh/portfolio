import { useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"
import { easing } from "maath"

const HeroCamera = ({ children, isMobile }) => {
  const groupRef = useRef()
  const lastInteractionRef = useRef(Date.now())
  const returningRef = useRef(false)
  const [returnDelay] = useState(5000) // Wait 5 seconds after last interaction
  const pointerRef = useRef({ x: 0, y: 0 })
  const currentPointerRef = useRef({ x: 0, y: 0 })
 
  
  useFrame((state, delta) => {
    pointerRef.current.x = state.pointer.x
    pointerRef.current.y = state.pointer.y
    
    if (currentPointerRef.current.y !== pointerRef.current.y || currentPointerRef.current.x !== pointerRef.current.x) {
      // User is actively interacting - update last interaction time
       lastInteractionRef.current = Date.now()
      returningRef.current = false
      currentPointerRef.current.x = pointerRef.current.x
      currentPointerRef.current.y = pointerRef.current.y
     
      
    }
    

    
    // Calculate time since last interaction
    const timeSinceInteraction = Date.now() - lastInteractionRef.current
   
    // Return to original position after delay if needed
    if (!returningRef.current && 
        timeSinceInteraction > returnDelay ) {
      
      returningRef.current = true
 
    }

    if(returningRef.current) {
        easing.damp3(state.camera.position, [0, 0, 20], 3, delta)

    }

    // Handle rotation for non-mobile
    if (!isMobile) {
      easing.dampE(
        groupRef.current.rotation, 
        [-state.pointer.y / 3, state.pointer.x / 5, 0], 
        0.25, 
        delta
      )
    }
  })

  return (
    <group ref={groupRef} scale={isMobile ? 1 : 1.3}>{children}</group>
  )
}

export default HeroCamera