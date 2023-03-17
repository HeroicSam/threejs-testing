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
        <Html occlude transform scale={.0055} position={[tabletPositions.x, 1.215, .828]} rotation={[-Math.PI / 9, 0, 0]} >
            <div className='tablet-container' onClick={() => toTablet()}>
                Hello
            </div>
        </Html>
    )
}

// 
// calculatePosition={{width, height}} 