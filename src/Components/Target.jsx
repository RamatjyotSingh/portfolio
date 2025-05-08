import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import { DOFMipMapShader } from 'three/examples/jsm/Addons.js'
import {gsap} from 'gsap'
import { useGSAP } from '@gsap/react'
const Target = (props) => {
    const {scene} = useGLTF('/models/target.gltf')
    const targetRef = useRef()
    useGSAP(() => {
        gsap.to(targetRef.current.position, {
            y: targetRef.current.position.y + 0.5,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
        })
    })

    return (

        <mesh {...props} ref={targetRef} rotation ={[0, Math.PI/5, 0]} scale={1.5}>
        
        
            <primitive object={scene} />
        </mesh>
    )
}
useGLTF.preload('/models/target.gltf')

export default Target