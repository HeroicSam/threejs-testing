import { Html } from "@react-three/drei"
import { useThree } from "@react-three/fiber"

export default function Tablet({ toTablet }){

  const sizes = {
    x: 6.587353166110052,
    y: 5.092184473623991,
  }

  const {width, height} = useThree(state => state.viewport);

  console.log(width, sizes.x)

  const tabletPositions = {
    x: width / sizes.x * .11,
  }

    return (
        <Html
          occlude
          transform
          position={[0.0765, 1.194, .835]} 
          rotation-x={-Math.PI / 9}
          distanceFactor={.056}
          wrapperClass="tablet"
        >
          <div>
            <h1>BOOBEAR</h1>
          </div>
        </Html>
    )
}

// 
// calculatePosition={{width, height}} 