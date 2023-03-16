import { useState, useMemo, useRef } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { EffectComposer, Noise, Bloom, Vignette, DepthOfField, Outline } from '@react-three/postprocessing'

import { Model } from './components/Grandpiano'

function App() {

  const [orbitEnabled, setOrbitEnabled] = useState(true)
  const orbitRef = useRef()
  console.log('hello', orbitRef)

  function CameraControls(props){
    const camera = useThree((state) => state.camera)
    console.log(props)
    camera.lookAt(0, 1.5, 0)

    function toTablet(){
      
      gsap.to(
        camera.position,
        {
          x: .09,
          y: 1.91,
          z: 1.1,
          duration: 2,
          ease: 'power3.inOut',
          onComplete: () => {
            setOrbitEnabled(!orbitEnabled)
            camera.lookAt(.1, 1.79, 1)
          }
        }
      )
    }

      return (
        <>
          <Model castshadow materials={materials} toTablet={toTablet} />
        </>
      )
  } 

  function resize() {

    const container = renderer.domElement.parentNode;
  
    if( container ) {
  
      const width = container.offsetWidth;
      const height = container.offsetHeight;
  
      renderer.setSize( width, height );
  
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
  
    }
  
  }
  
  window.addEventListener( 'resize', resize );

  const materials = useMemo(() => {
    return {
      pianoMaterial: new THREE.MeshToonMaterial({
        color: new THREE.Color('#dfdfdf')
      }),
      blackKeyMaterial: new THREE.MeshToonMaterial({
        color: new THREE.Color('black')
      }),
      whiteKeyMaterial: new THREE.MeshLambertMaterial({
        color: new THREE.Color('#ffffff')
      }),
      redMaterial: new THREE.MeshToonMaterial({
        color: new THREE.Color('#f62c2f')
      }),
      brassMaterial: new THREE.MeshStandardMaterial({
        // color: new THREE.Color('#E1C16E'),
        color: new THREE.Color('#b9853c'),

      }),
      woodMaterial: new THREE.MeshStandardMaterial({
        color: new THREE.Color('#a45724')
      })
    }
  })

  return (
    <Canvas shadows camera={{ position: [1.6, 1.9, 2.2] }}>
      <OrbitControls ref={orbitRef} target={[.1, 1.83, 1]} enabled={orbitEnabled} />
      <CameraControls materials={materials} />
      <color attach="background" args={["#FFDFD3"]} />
      {/* <Environment preset='sunset' /> */}
      <pointLight position={[0,5,4]} castShadow intensity={.5}/>
      <ambientLight intensity={.6} />
      <mesh position={[0, .62, 0]} rotation={[-Math.PI / 2   , 0, 0]} receiveShadow>
        <planeGeometry args={[10, 10, 10]} />
        <shadowMaterial color='#FFDFD3' />
      </mesh>
      <EffectComposer>
        {/* <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} /> */}
        <Bloom luminanceThreshold={.75} luminanceSmoothing={0.1} height={300} />
        <Noise opacity={0.20} />
        {/* <Vignette eskil={false} offset={0.01} darkness={1.1} /> */}
        {/* <Outline blur edgeStrength={100} /> */}
      </EffectComposer>
    </Canvas>
  )
}

export default App
