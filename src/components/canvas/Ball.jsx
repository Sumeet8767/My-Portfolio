import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import * as THREE from 'three'

const AnimatedSphere = () => {
  const meshRef = useRef()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    meshRef.current.rotation.x = t * 0.2
    meshRef.current.rotation.y = t * 0.3
    meshRef.current.position.y = Math.sin(t * 0.8) * 0.15
  })

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[2, 20]} />
      <meshStandardMaterial
        color="#915EFF"
        emissive="#5a2fcf"
        emissiveIntensity={0.4}
        roughness={0.1}
        metalness={0.9}
        wireframe={false}
      />
    </mesh>
  )
}

const Ring = () => {
  const ringRef = useRef()

  useFrame(({ clock }) => {
    ringRef.current.rotation.x = clock.getElapsedTime() * 0.15
    ringRef.current.rotation.z = clock.getElapsedTime() * 0.1
  })

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[3.2, 0.08, 16, 100]} />
      <meshStandardMaterial
        color="#915EFF"
        emissive="#915EFF"
        emissiveIntensity={0.6}
        roughness={0}
        metalness={1}
      />
    </mesh>
  )
}

const BallCanvas = () => {
  return (
    <Canvas
      frameloop="always"
      dpr={[1, 2]}
      camera={{ fov: 45, near: 0.1, far: 200, position: [0, 0, 8] }}
      gl={{ antialias: true }}
    >
      <Suspense fallback={null}>
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <pointLight position={[-5, -5, -5]} color="#915EFF" intensity={3} />
        <pointLight position={[0, 0, 5]} color="#ffffff" intensity={1} />

        {/* Stars */}
        <Stars
          radius={100}
          depth={50}
          count={4000}
          factor={4}
          saturation={0}
          fade
          speed={0.5}
        />

        {/* Sphere */}
        <AnimatedSphere />

        {/* Orbit ring around sphere */}
        <Ring />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Suspense>
    </Canvas>
  )
}

export default BallCanvas