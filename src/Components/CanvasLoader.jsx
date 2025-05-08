import React from 'react'
import { Html,useProgress } from '@react-three/drei'

const CanvasLoader = () => {
    const { progress } = useProgress()
  return (
    <Html 
    as="div"
    style={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
    }}
    center>
      <span className="canvas-loader">
        <p style={{fontSize:14,color:'#F1F1F1',fontWeight:800,marginTop:40}}>
            {progress !== 0 ? `${progress.toFixed(2)}%` : 'Loading...'}
        </p>
      </span>
    </Html>
  )
}

export default CanvasLoader