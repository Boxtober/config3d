


import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';


export function CustomObject({color}) {
  const objLoader = useLoader(OBJLoader, './src/assets/cup.obj');
  const canvasTexture = document.querySelector('#myCanvas')
  const imgTexture = new THREE.CanvasTexture(canvasTexture)

  return (
<>
    <mesh
      >
        <meshStandardMaterial color={color} />
        <primitive object={objLoader}/>
    </mesh>
    <mesh 
        geometry={objLoader.children[0].geometry}>
        <meshStandardMaterial 
        metalness= {0.25}
        roughness= {0.07}
        color={color} 
    />
    </mesh>

    <mesh 
      geometry={objLoader.children[0].geometry}>
          <meshStandardMaterial 
          map={imgTexture}
          side={THREE.DoubleSide}
          transparent= {true}
          metalness= {0.25}
          roughness= {0.07}
          refractionRatio= {0.98}
          />
    </mesh> 

    <mesh
      geometry={objLoader.children[1].geometry}>
          <meshStandardMaterial 
          metalness= {0.25}
          roughness= {0.07}
          color={color} 
      />
    </mesh> 

</>
  )
}


/*  --- CODE V1 POUR LE DOSSIER 

import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

export function CustomObject() {

  const objLoader = useLoader(OBJLoader, './src/assets/cup.obj');
  const canvasTexture = document.querySelector('#myCanvas')
  const imgTexture = new THREE.CanvasTexture(canvasTexture)

  return (
  <>
    <mesh    
      geometry={objLoader.children[0].geometry}>
        <meshStandardMaterial/>
    </mesh>

    <mesh 
      geometry={objLoader.children[0].geometry}>
        <meshStandardMaterial 
        map={imgTexture}
        side={THREE.DoubleSide}
        transparent= {true}
        metalness= {0.25}
        roughness= {0.07}
        refractionRatio= {0.98}
        />
    </mesh> 

    <mesh
      geometry={objLoader.children[1].geometry}>
        <meshStandardMaterial 
        metalness= {0.25}
        roughness= {0.07}
        color={'red'} 
    />
    </mesh> 
  </>
  )
}

*/


/*   V E R S I O N    I N I T I A L


import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

import ColorPicker from './ColorPicker.jsx';


export function CustomObject(props) {

    const objLoader = useLoader(OBJLoader, './src/assets/cup.obj');
    const object = new THREE.Object3D(objLoader);

    const canvasTexture = document.querySelector('#myCanvas')
    const imgTexture = new THREE.CanvasTexture(canvasTexture)


  const ref = useRef()
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  //useFrame((state, delta) => (ref.current.rotation.x += delta))
  const colorPik = document.querySelector('#idDeLaDivDuColorPicker')
  const cupColor = new THREE.Color(colorPik.style.backgroundColor)

  return (

<>
    <mesh 
      {...props}
      ref={ref}
      onClick={(event) => click(!clicked)}
      onPointerOut={(event) => click(false)}
      >

        <primitive object={objLoader}/>
    </mesh>


    <mesh 
        {...props}
        
        
        geometry={objLoader.children[0].geometry}>
        <meshStandardMaterial 
        metalness= {0.25}
        roughness= {0.07}
        color={cupColor} 
    />
    </mesh>

    <mesh geometry={objLoader.children[0].geometry}>
        <meshStandardMaterial 
        map={imgTexture}
        side={THREE.DoubleSide}
        transparent= {true}
        metalness= {0.25}
        roughness= {0.07}
        refractionRatio= {0.98}
        />
    </mesh> 

    <mesh {...props}
    
    
    geometry={objLoader.children[1].geometry}>
        <meshStandardMaterial 
        metalness= {0.25}
        roughness= {0.07}
        color={cupColor} 
    />
    </mesh> 
</>
  )
}

*/

/*
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import ColorPicker from './ColorPicker.jsx';
//import Button from './button.jsx';
import * as THREE from 'three';

export function CustomObject(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += delta))
  // Return the view, these are regular Threejs elements expressed in JSX

  const colorPik = document.querySelector('#idDeLaDivDuColorPicker')
  const cupColor = new THREE.Color(colorPik.style.backgroundColor)

  return (
    <mesh
      {...props}
      ref={ref}
      onClick={(event) => click(!clicked)}
      onPointerOut={(event) => click(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={ cupColor } />
    </mesh>
  )
}
*/