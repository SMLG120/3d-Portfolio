import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf')
  return (
    <primitive
      object={earth.scene}
      scale={3.5} // Increase uniform scaling
      position={[0, 0, 0]} // Keep it centered
      rotation={[0, Math.PI / 2, 0]} // Optional rotation
    />
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200, // Extend the far plane for large models
        position: [-4, 3, 6], // Move back to accommodate the larger model
      }}

    >
      <Suspense
        fallback={<CanvasLoader />}
      >
        <OrbitControls
          autoRotate
          enableZoom={false}
          rotateSpeed={0.01}  
          maxPolarAngle={Math.PI / 2} // Restrict vertical rotation
          minPolarAngle={Math.PI / 3}
        />
      </Suspense>

      <Earth />
      <Preload all />
    </Canvas>
  )
}
export default EarthCanvas