export function TouchControls() {
  return (
    <div className="fixed bottom-8 left-8 touch-none">
      <div className="w-32 h-32 rounded-full border-2 border-white/50 bg-black/20">
        <div className="absolute w-16 h-16 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/50" />
      </div>
    </div>
  )
}