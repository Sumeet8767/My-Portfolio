import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import * as THREE from 'three'

const AnimatedSphere = () => {
  const meshRef = useRef()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    meshRef.current.rotation.x = t * 0.15
    meshRef.current.rotation.y = t * 0.2
    meshRef.current.position.y = Math.sin(t * 0.6) * 0.12
  })

  return (
    <group ref={meshRef}>

      {/* 🔥 INNER CORE (FIXED COLOR) */}
      <mesh>
        <icosahedronGeometry args={[2, 20]} />
        <meshStandardMaterial
          color="#4C1D95"
          emissive="#7C3AED"
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.85}
        />
      </mesh>

      {/* ✨ GLASS LAYER */}
      <mesh>
        <icosahedronGeometry args={[2.15, 20]} />
        <meshPhysicalMaterial
          color="#ffffff"
          transparent
          opacity={0.08}
          roughness={0}
          metalness={0}
          transmission={1}
          thickness={0.5}
          clearcoat={1}
        />
      </mesh>

    </group>
  )
}

const Ring = () => {
  const ringRef = useRef()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    ringRef.current.rotation.x = t * 0.12
    ringRef.current.rotation.z = t * 0.08
  })

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[3.2, 0.06, 16, 100]} />
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

        {/* 🔥 LIGHTING (IMPROVED FOR HIGHLIGHT) */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />

        {/* White highlight (like your image) */}
        <pointLight position={[2, 2, 3]} intensity={2} color="#ffffff" />

        {/* Purple glow */}
        <pointLight position={[0, 0, 5]} color="#915EFF" intensity={1.5} />

        {/* 🌌 CLEAN STARS */}
        <Stars
          radius={80}
          depth={40}
          count={2500}
          factor={3}
          fade
          speed={0.3}
        />

        {/* Sphere */}
        <AnimatedSphere />

        {/* Ring */}
        <Ring />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.2}
        />

      </Suspense>
    </Canvas>
  )
}

export default BallCanvas