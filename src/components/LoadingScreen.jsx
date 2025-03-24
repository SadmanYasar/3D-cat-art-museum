import { useProgress } from '@react-three/drei'

export function LoadingScreen() {
  const { progress } = useProgress()
  
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black">
      <div className="text-white text-2xl">
        Loading... {progress.toFixed(0)}%
      </div>
    </div>
  )
}