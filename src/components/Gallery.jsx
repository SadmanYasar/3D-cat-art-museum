import { RigidBody } from '@react-three/rapier'
import { SpotLight } from '@react-three/drei'
import { TextureLoader, RepeatWrapping } from 'three'
import { useLoader } from '@react-three/fiber'
import texture from '../assets/texture.avif'

export function Gallery() {
  const marbleTexture = useLoader(TextureLoader, texture)
  marbleTexture.wrapS = marbleTexture.wrapT = RepeatWrapping
  marbleTexture.repeat.set(4, 4)

  return (
    <group>
      {/* Floor with marble texture */}
      <RigidBody type="fixed" position={[0, 0, 0]}>
        <mesh receiveShadow>
          <boxGeometry args={[20, 0.2, 20]} />
          <meshStandardMaterial
            map={marbleTexture}
            roughness={0.2}
            metalness={0.1}
          />
        </mesh>
      </RigidBody>

      {/* Back Wall */}
      <RigidBody type="fixed" position={[0, 2, -10]}>
        <mesh receiveShadow>
          <boxGeometry args={[20, 4, 0.2]} />
          <meshStandardMaterial
            color="#ffffff"
            roughness={0.3}
          />
        </mesh>
      </RigidBody>

      {/* Left Wall */}
      <RigidBody type="fixed" position={[-10, 2, 0]}>
        <mesh receiveShadow>
          <boxGeometry args={[0.2, 4, 20]} />
          <meshStandardMaterial
            color="#ffffff"
            roughness={0.3}
          />
        </mesh>
      </RigidBody>

      {/* Right Wall */}
      <RigidBody type="fixed" position={[10, 2, 0]}>
        <mesh receiveShadow>
          <boxGeometry args={[0.2, 4, 20]} />
          <meshStandardMaterial
            color="#ffffff"
            roughness={0.3}
          />
        </mesh>
      </RigidBody>

      {/* Front Wall */}
      <RigidBody type="fixed" position={[0, 2, 10]}>
        <mesh receiveShadow>
          <boxGeometry args={[20, 4, 0.2]} />
          <meshStandardMaterial
            color="#ffffff"
            roughness={0.3}
          />
        </mesh>
      </RigidBody>

      {/* Spotlights */}
      <SpotLight
        position={[-8, 3.5, -8]}
        angle={0.5}
        penumbra={0.5}
        intensity={1}
        castShadow
        color="#ffffff"
        distance={20}
      />
      <SpotLight
        position={[8, 3.5, -8]}
        angle={0.5}
        penumbra={0.5}
        intensity={1}
        castShadow
        color="#ffffff"
        distance={20}
      />
      <SpotLight
        position={[-8, 3.5, 8]}
        angle={0.5}
        penumbra={0.5}
        intensity={1}
        castShadow
        color="#ffffff"
        distance={20}
      />
      <SpotLight
        position={[8, 3.5, 8]}
        angle={0.5}
        penumbra={0.5}
        intensity={1}
        castShadow
        color="#ffffff"
        distance={20}
      />

      <mesh position={[0, 4, 0]} receiveShadow>
        <boxGeometry args={[20, 0, 2, 20]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* Ceiling (visual only, no collider) */}
      {/* <mesh position={[0, 4, 0]} renderOrder={1}>
        <boxGeometry args={[20, 0.2, 20]} />
        <meshPhysicalMaterial
          color="#ffffff"
          transparent={true}
          opacity={0.2}
          roughness={0.1}
          metalness={0.3}
          transmission={1}
          thickness={0.1}
          clearcoat={1}
          side={2}
          depthWrite={false}
        />
      </mesh> */}

    </group>
  )
}