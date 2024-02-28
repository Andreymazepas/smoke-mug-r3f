import * as React from 'react'
import { useLoader, useFrame, useThree, Canvas } from '@react-three/fiber'
import { useHelper, useAspect, useProgress, useTexture, OrbitControls } from '@react-three/drei'

function App() {
  return (
    <Canvas>
      {/* add geometries and shapes here*/}
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color='red' />
      </mesh>
      <ambientLight intensity={1} />
      <pointLight position={[1, 1, 1]} intensity={10} />
      <OrbitControls />
    </Canvas>
  )
}

export default App

