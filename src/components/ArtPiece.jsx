import { useEffect, useRef, useState } from 'react'
import { useThree, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { RigidBody } from '@react-three/rapier'
import { Html } from '@react-three/drei'

export function ArtPiece({ position, rotation, url, id }) {
  const texture = useLoader(TextureLoader, url)
  const meshRef = useRef()
  const [isSelected, setIsSelected] = useState(false)

  return (
    <RigidBody type="fixed" position={position} rotation={rotation}>
      <mesh
        ref={meshRef}
        onClick={() => setIsSelected(!isSelected)}
      >
        <planeGeometry args={[2, 3]} />
        <meshStandardMaterial map={texture} />
        {isSelected && (
          <Html
            position={[0, 0, 0.1]}
            style={{
              pointerEvents: 'none',
              userSelect: 'none'
            }}
          >
            <div className="bg-black/80 text-white p-4 rounded-lg">
              <h2 className="text-xl font-bold">Artwork Title</h2>
              <p className="mt-2">Description of the artwork goes here.</p>
            </div>
          </Html>
        )}
      </mesh>
    </RigidBody>
  )
}