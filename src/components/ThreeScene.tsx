// src/components/ThreeScene.tsx - FIXED VERSION
'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { 
  Points, 
  PointMaterial, 
  Sphere
} from '@react-three/drei'
import * as THREE from 'three'
import { motion } from 'framer-motion'

function NeuralNetwork() {
  const points = useRef<THREE.Points>(null!)
  
  const particleCount = 2000
  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      // Create a spherical distribution of points
      const radius = 5 + Math.random() * 5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i3 + 2] = radius * Math.cos(phi)
    }
    return positions
  }, [])

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.05
      points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
      
      // Animate particles
      const positions = points.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3
        positions[i3] += Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.001
        positions[i3 + 1] += Math.cos(state.clock.elapsedTime * 0.3 + i) * 0.001
        positions[i3 + 2] += Math.sin(state.clock.elapsedTime * 0.7 + i) * 0.001
      }
      points.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <Points ref={points} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00d9ff"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

function FloatingOrbs() {
  const group = useRef<THREE.Group>(null!)
  
  const orbs = useMemo(() => [
    { color: '#00d9ff', position: [3, 2, 0], size: 0.3 },
    { color: '#ff2a6d', position: [-3, 1, 0], size: 0.4 },
    { color: '#8a2be2', position: [2, -2, 0], size: 0.35 },
    { color: '#00ff88', position: [-2, -1, 0], size: 0.25 }
  ], [])

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.1
      
      group.current.children.forEach((child, index) => {
        child.position.y = Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.2
      })
    }
  })

  return (
    <group ref={group}>
      {orbs.map((orb, index) => (
        <Sphere key={index} args={[orb.size, 16, 16]} position={orb.position as [number, number, number]}>
          <meshStandardMaterial
            color={orb.color}
            emissive={orb.color}
            emissiveIntensity={0.3}
            transparent
            opacity={0.8}
          />
        </Sphere>
      ))}
    </group>
  )
}

function AnimatedSphere() {
  const mesh = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.1
      mesh.current.rotation.y = state.clock.elapsedTime * 0.2
      mesh.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime) * 0.1)
    }
  })

  return (
    <Sphere ref={mesh} args={[2, 32, 32]} position={[0, 0, 0]}>
      <meshStandardMaterial
        color="#8a2be2"
        transparent
        opacity={0.1}
        wireframe
      />
    </Sphere>
  )
}

export default function ThreeScene() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="fixed inset-0 -z-10 pointer-events-none"
    >
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
      >
        <color attach="background" args={['#0a0a0a']} />
        
        {/* Enhanced Lighting */}
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00d9ff" />
        <pointLight position={[-10, -10, 5]} intensity={0.8} color="#ff2a6d" />
        <pointLight position={[0, 10, -10]} intensity={0.5} color="#8a2be2" />
        
        {/* Scene Elements */}
        <NeuralNetwork />
        <FloatingOrbs />
        <AnimatedSphere />
        
        {/* Fog for depth */}
        <fog attach="fog" args={['#0a0a0a', 5, 15]} />
      </Canvas>
    </motion.div>
  )
}