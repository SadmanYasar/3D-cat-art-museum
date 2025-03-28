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

export function FirstPersonController() {

    return (
        <KeyboardControls map={keyboardMap}>
            <Ecctrl
                camCollision={true} // disable camera collision detect (useless in FP mode)
                camInitDis={-1} // camera intial position
                camMinDis={-1} // camera zoom in closest position
                // camFollowMult={500} // give a big number here, so the camera follows the target (character) instantly
                // camLerpMult={500} // give a big number here, so the camera lerp to the followCam position instantly
                // turnVelMultiplier={1} // Turning speed same as moving speed
                // turnSpeed={50} // give it big turning speed to prevent turning wait time
                mode="CameraBasedMovement"
                floatHeight={0.2}
                autoBalance={false}
                // onPositionChange={(position) => {
                //     if (position.y < -5) {
                //         resetPosition()
                //     }
                // }}
            >
                <mesh castShadow visible={false} position={[2, 2, 2]}>
                    <capsuleGeometry args={[0.3, 1]} />
                    <meshStandardMaterial color="blue" />
                </mesh>
            </Ecctrl>
        </KeyboardControls>
    )
}