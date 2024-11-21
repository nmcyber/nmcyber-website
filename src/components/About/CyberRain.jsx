import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'

const BinaryColumn = ({ position, speed, depth }) => {
  const ref = useRef()
  const characters = useMemo(() => {
    return Array.from({ length: 20 }, () => Math.random() > 0.5 ? '1' : '0')
  }, [])

  useFrame((state, delta) => {
    characters.forEach((char, i) => {
      const child = ref.current.children[i]
      child.position.y -= speed * delta
      if (child.position.y < -10) {
        child.position.y = 10
      }
      child.material.opacity = 1 - Math.abs(child.position.y) / 10
    })
  })

  return (
    <group ref={ref} position={position}>
      {characters.map((char, i) => (
        <Text
          key={i}
          color="#64cdf649"
          fontSize={0.5}
          maxWidth={0.5}
          lineHeight={1}
          letterSpacing={0.02}
          opacity={10}
          textAlign="center"
          // font={"'Menlo', Consolas, monospace"}
          anchorY="top"
          anchorX="center"

          position={[0, i - 10 + Math.random() * 20, 0]}
        >
          {char}
        </Text>
      ))}
    </group>
  )
}

const BinaryRain = () => {
  const columns = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 20,
        0,
        (Math.random() - 0.5) * 10
      ],
      speed: 2 + Math.random() * 2,
      depth: Math.random()
    }))
  }, [])

  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 75 }} className="w-full h-full bg-transparent gl={{ alpha: true }}">
      {/* <color attach="background" args={['#000']} /> */}
      {columns.map((column, i) => (
        <BinaryColumn key={i} {...column} />
      ))}
    </Canvas>
  )
}

export default BinaryRain