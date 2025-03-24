import { Suspense } from 'react'
import { ArtGallery } from './components/ArtGallery'
import { LoadingScreen } from './components/LoadingScreen'
// import { KeyboardControls } from '@react-three/drei'

// const controls = {
//   forward: 'forward',
//   back: 'back',
//   left: 'left',
//   right: 'right',
//   jump: 'jump',
// }

function App() {
  return (
    // <KeyboardControls
    //   map={[
    //     { name: controls.forward, keys: ['ArrowUp', 'KeyW'] },
    //     { name: controls.back, keys: ['ArrowDown', 'KeyS'] },
    //     { name: controls.left, keys: ['ArrowLeft', 'KeyA'] },
    //     { name: controls.right, keys: ['ArrowRight', 'KeyD'] },
    //     { name: controls.jump, keys: ['Space'] },
    //   ]}
    // >
      <main className="w-full h-screen overflow-hidden bg-black">
        <Suspense fallback={<LoadingScreen />}>
          <ArtGallery />
        </Suspense>
      </main>
    // </KeyboardControls>
  )
}

export default App
