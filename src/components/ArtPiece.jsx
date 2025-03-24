import { useRef, useState } from 'react'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { Html } from '@react-three/drei'

export function ArtPiece({ position, rotation, url }) {
  const texture = useLoader(TextureLoader, url)
  const meshRef = useRef()
  const [isSelected, setIsSelected] = useState(false)

  return (
      <mesh
        ref={meshRef}
        onClick={() => setIsSelected(!isSelected)}
        position={position} rotation={rotation}
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
            <div className="p-4 text-white rounded-lg bg-black/80">
              <h2 className="text-xl font-bold">Artwork Title</h2>
              <p className="mt-2">Description of the artwork goes here.</p>
            </div>
          </Html>
        )}
      </mesh>
  )
}