import { useEffect, useRef } from 'react'
import { useThree } from '@react-three/fiber'
import Ecctrl from 'ecctrl'
import { KeyboardControls } from '@react-three/drei'

const keyboardMap = [
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "backward", keys: ["ArrowDown", "KeyS"] },
    { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
    { name: "rightward", keys: ["ArrowRight", "KeyD"] },
    { name: "jump", keys: ["Space"] },
    { name: "run", keys: ["Shift"] }
]

export function FirstPersonController({ speed = 5 }) {

    return (
        <KeyboardControls map={keyboardMap}>
            <Ecctrl
                camCollision={false} // disable camera collision detect (useless in FP mode)
                camInitDis={-0.01} // camera intial position
                camMinDis={-0.01} // camera zoom in closest position
                camFollowMult={1000} // give a big number here, so the camera follows the target (character) instantly
                camLerpMult={1000} // give a big number here, so the camera lerp to the followCam position instantly
                turnVelMultiplier={1} // Turning speed same as moving speed
                turnSpeed={100} // give it big turning speed to prevent turning wait time
                mode="CameraBasedMovement"
                floatHeight={1}
                // onPositionChange={(position) => {
                //     if (position.y < -5) {
                //         resetPosition()
                //     }
                // }}
            >
                <mesh castShadow visible={false} position={[2, 5, 2]}>
                    <capsuleGeometry args={[0.3, 1]} />
                    <meshStandardMaterial color="blue" />
                </mesh>
            </Ecctrl>
        </KeyboardControls>
    )
}