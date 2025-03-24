import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import {
    Stats
} from '@react-three/drei'
import { FirstPersonController } from './FirstPersonController'
import { LoadingScreen } from './LoadingScreen'
import { ArtPiece } from './ArtPiece'
import { Gallery } from './Gallery'
import art2 from '../assets/art2.jpg'
import art3 from '../assets/art3.jpg'
import art4 from '../assets/art4.jpg'
import art5 from '../assets/art5.jpg'
import art6 from '../assets/art6.gif'
import art7 from '../assets/art7.jpg'
import art8 from '../assets/art8.gif'
import art9 from '../assets/art9.jpg'
import art10 from '../assets/art10.gif'
import art11 from '../assets/art11.gif'
import art12 from '../assets/art12.gif'
import art13 from '../assets/art13.gif'

const artworks = [
    // Back wall
    { id: 1, position: [-6, 2, -9.8], rotation: [0, 0, 0], url: art2 },
    { id: 2, position: [0, 2, -9.8], rotation: [0, 0, 0], url: art3 },
    { id: 3, position: [6, 2, -9.8], rotation: [0, 0, 0], url: art4 },

    // Right wall
    { id: 4, position: [9.8, 2, -6], rotation: [0, -Math.PI / 2, 0], url: art5 },
    { id: 5, position: [9.8, 2, 0], rotation: [0, -Math.PI / 2, 0], url: art6 },
    { id: 6, position: [9.8, 2, 6], rotation: [0, -Math.PI / 2, 0], url: art7 },

    // Front wall
    { id: 7, position: [6, 2, 9.8], rotation: [0, Math.PI, 0], url: art8 },
    { id: 8, position: [0, 2, 9.8], rotation: [0, Math.PI, 0], url: art9 },
    { id: 9, position: [-6, 2, 9.8], rotation: [0, Math.PI, 0], url: art10 },

    // Left wall
    { id: 10, position: [-9.8, 2, 6], rotation: [0, Math.PI / 2, 0], url: art11 },
    { id: 11, position: [-9.8, 2, 0], rotation: [0, Math.PI / 2, 0], url: art12 },
    { id: 12, position: [-9.8, 2, -6], rotation: [0, Math.PI / 2, 0], url: art13 }
]

export function ArtGallery() {

    return (
        <div className="overflow-hidden fixed inset-0 w-screen h-screen">
            <Suspense fallback={<LoadingScreen />}>
                <Canvas
                    shadows
                    camera={{ fov: 75, position: [0, 2, 5] }}
                >
                    <color attach="background" args={['#1e1e1e']} />
                    {/* <Sky sunPosition={[100, 20, 100]} /> */}
                    <ambientLight intensity={1.5} />
                    {/* <pointLight position={[10, 10, 10]} intensity={2} castShadow /> */}
                    {/* <directionalLight position={[0, 10, 0]} intensity={1.5} castShadow /> */}
                    {/* <Environment background preset="sunset" /> */}
                    <Physics timeStep="vary"> 
                        <FirstPersonController />
                        <Gallery />
                        {artworks.map((art) => (
                            <ArtPiece
                                key={art.id}
                                position={art.position}
                                rotation={art.rotation}
                                url={art.url}
                            />
                        ))}

                        {/* <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
                            <planeGeometry args={[100, 100]} />
                            <meshStandardMaterial color="#303030" />
                        </mesh> */}
                    </Physics>
                    {/* <Stars radius={100} depth={50} count={5000} factor={4} /> */}
                    <Stats />
                </Canvas>
            </Suspense>
        </div>
    )
}