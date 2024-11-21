import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text3D, OrbitControls, Stars } from '@react-three/drei'
import * as THREE from 'three'

const Word = ({ children, ...props }) => {
  const color = new THREE.Color()
  const fontProps = { fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false, fontFamily: 'Arial, sans-serif' }
  const ref = useRef()
  const [hovered, setHovered] = React.useState(false)
  const over = (e) => (e.stopPropagation(), setHovered(true))
  const out = () => setHovered(false)
  
  useFrame(({ camera }) => {
    ref.current.quaternion.copy(camera.quaternion)
    ref.current.material.color.lerp(color.set(hovered ? '#fa2720' : 'white'), 0.1)
  })
  
  return (
    <Text3D ref={ref} onPointerOver={over} onPointerOut={out} {...props} {...fontProps}>
      {children}
      <meshNormalMaterial />
    </Text3D>
  )
}

function AnimatedStars() {
  const ref = useRef()
  
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })
  
  return (
    <group ref={ref}>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </group>
  )
}

const ThreeAnimation = () => {
  return (
    <Canvas camera={{ position: [0, 0, 35] }} className="h-[400px]">
      <OrbitControls enableZoom={false} />
      <AnimatedStars />
      <Word position={[-12, 6, 0]}>DISCOVER</Word>
      <Word position={[-10, 0, 0]}>TRANSFORM</Word>
      <Word position={[-6, -6, 0]}>THRIVE</Word>
    </Canvas>
  )
}

export default ThreeAnimation