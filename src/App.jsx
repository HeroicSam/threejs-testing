import { useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { Sky, Environment, OrbitControls } from '@react-three/drei'
import { Model } from './components/Grandpiano'

import * as THREE from 'three'
import { EffectComposer, Noise, Bloom, Vignette, DepthOfField, Outline } from '@react-three/postprocessing'

function App() {

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
      redBarMaterial: new THREE.MeshToonMaterial({
        color: new THREE.Color('red')
      }),
      brassMaterial: new THREE.MeshStandardMaterial({
        // color: new THREE.Color('#E1C16E'),
        color: new THREE.Color('#b9853c'),

      })
    }
  })



  return (
    <Canvas shadows>
      <OrbitControls target={[0, 1, 0]} />
      <color attach="background" args={["#FFDFD3"]} />
      {/* <Environment preset='sunset' /> */}
      <pointLight position={[0,5,4]} castShadow intensity={.5}/>
      <ambientLight intensity={.6} />
      <Model castshadow materials={materials} />
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
