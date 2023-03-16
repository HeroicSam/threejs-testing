import { Html } from "@react-three/drei"

export default function Tablet({ toTablet }){

    return (
        <Html occlude transform scale={.0055} position={[.12, 1.851, .822]} rotation={[-Math.PI / 9, 0, 0]}>
            <div className='tablet-container' onClick={() => toTablet()}>
                Hello
            </div>
        </Html>
    )
}