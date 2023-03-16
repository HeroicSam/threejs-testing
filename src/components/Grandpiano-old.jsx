/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 grandpiano.glb
*/

import React, { useRef } from 'react'
import { Sparkles, useGLTF } from '@react-three/drei'

export function Model({ materials, props }) {
  const { nodes } = useGLTF('/grandpiano.glb')
  return (
    <group castShadow dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Cube001.geometry} material={materials.whiteKeyMaterial} />
      <mesh castShadow receiveShadow geometry={nodes.Cube002.geometry} material={materials.whiteKeyMaterial} />
      <mesh castShadow receiveShadow geometry={nodes.blackkey.geometry} material={materials.blackKeyMaterial} />
      <mesh castShadow receiveShadow geometry={nodes.blackkey001.geometry} material={materials.blackKeyMaterial} />
      <mesh castShadow receiveShadow geometry={nodes.blackkey002.geometry} material={materials.blackKeyMaterial} />
      <mesh castShadow receiveShadow geometry={nodes.blackkey003.geometry} material={materials.blackKeyMaterial} />
      <mesh castShadow receiveShadow geometry={nodes.blackkey004.geometry} material={materials.blackKeyMaterial} />
      <mesh castShadow receiveShadow geometry={nodes.blackkey005.geometry} material={materials.blackKeyMaterial} />
      <mesh castShadow receiveShadow geometry={nodes.blackkey006.geometry} material={materials.blackKeyMaterial} />
      <mesh castShadow receiveShadow geometry={nodes.blackkey007.geometry} material={materials.blackKeyMaterial} />
      <mesh castShadow receiveShadow geometry={nodes.Cube004.geometry} material={materials.whiteKeyMaterial} />
      <mesh castShadow receiveShadow geometry={nodes.White_Keys01.geometry} material={materials.whiteKeyMaterial} />
      <mesh castShadow receiveShadow geometry={nodes.White_Keys002.geometry} material={materials.whiteKeyMaterial} />
      <mesh castShadow receiveShadow geometry={nodes.White_Keys003.geometry} material={materials.whiteKeyMaterial} />
      <mesh castShadow receiveShadow geometry={nodes.White_Keys004.geometry} material={materials.whiteKeyMaterial} />
      <mesh castShadow receiveShadow geometry={nodes.White_Keys005.geometry} material={materials.whiteKeyMaterial} />
      <mesh castShadow receiveShadow geometry={nodes.White_Keys006.geometry} material={materials.whiteKeyMaterial} />
      <mesh castShadow receiveShadow geometry={nodes.White_Keys007.geometry} material={materials.whiteKeyMaterial} />
      <mesh castShadow receiveShadow geometry={nodes.White_Keys008.geometry} material={materials.whiteKeyMaterial} />
      <mesh castShadow receiveShadow geometry={nodes.Cube.geometry} material={materials.brassMaterial} position={[0.05, 1.56, 0.6]} />
      <mesh castShadow receiveShadow geometry={nodes.BackBrassPiece.geometry} material={materials.brassMaterial} />
      <mesh castShadow receiveShadow geometry={nodes.Cube003.geometry} material={materials.brassMaterial} />
      <mesh castShadow receiveShadow geometry={nodes.Wires01.geometry} material={nodes.Wires01.material} />
      <mesh castShadow receiveShadow geometry={nodes.Wires02.geometry} material={nodes.Wires02.material} position={[-0.03, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Pegs.geometry} material={materials.redBarMaterial} position={[-0.01, 1.53, -0.27]} rotation={[0, -0.77, 0]} scale={0} />
      <mesh castShadow receiveShadow geometry={nodes.RedBar.geometry} material={materials.redBarMaterial} position={[0.05, 1.53, 0.535]} />
    </group>
  )
}

useGLTF.preload('/grandpiano.glb')
