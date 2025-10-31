// src/components/AdvancedParticles.tsx
'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField() {
  const points = useRef<THREE.Points>(null!)
  const count = 5000

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      // Position
      const i3 = i * 3
      const radius = Math.random() * 10
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i3 + 2] = radius * Math.cos(phi)

      // Colors - gradient from primary to secondary
      colors[i3] = Math.random() > 0.5 ? 0 : 1      // R
      colors[i3 + 1] = Math.random() * 0.3 + 0.3    // G
      colors[i3 + 2] = Math.random() > 0.5 ? 1 : 0  // B
    }

    return [positions, colors]
  }, [count])

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
      points.current.rotation.y = state.clock.elapsedTime * 0.05
      points.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.08) * 0.05

      // Animate particles
      const positions = points.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < count; i++) {
        const i3 = i * 3
        positions[i3] += Math.sin(state.clock.elapsedTime + i) * 0.001
        positions[i3 + 1] += Math.cos(state.clock.elapsedTime + i) * 0.001
        positions[i3 + 2] += Math.sin(state.clock.elapsedTime * 2 + i) * 0.001
      }
      points.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <Points ref={points} positions={positions} colors={colors} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

export default ParticleField