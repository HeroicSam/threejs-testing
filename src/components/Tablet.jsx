import { Html } from "@react-three/drei"

export default function Tablet({ toTablet }){

    return (
        <Html
          position={[0.0765, 1.194, .835]}
          rotation-x={-Math.PI / 9}
          distanceFactor={.056}
          wrapperClass="tablet"
          occlude
          transform
        >
          {/* <div>
            <h1>BOOBEAR</h1>
          </div> */}
        </Html>
    )
}
