import { useState } from 'react'
import { Canvas } from '@react-three/fiber'

import Editor from './src/components/Editor.jsx';
import Drop from './src/components/Drop.jsx';
import Experience from './src/components/Experience.jsx';

import { CustomObject } from './src/components/CustomObject.jsx';
import { SketchPicker } from 'react-color';

export default function App() {

  const [color, setColor] = useState();
  return ( 
    <>
      <div className="container">
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [0, 0, 6]
          }}
          style={{
            width: 800,
            height: 300,
            backgroundColor: 'black'
          }}
        >
            <CustomObject color={color}/>
            <Experience />
        </Canvas>
        <SketchPicker
                color={color}
                onChange={(color) => {
                  setColor(color.hex);
                }}
              /> 

</div>

        <Editor />   

       


    </>
  )
}



/*

import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

import Editor from './src/components/Editor.jsx';
import Drop from './src/components/Drop.jsx';
import Experience from './src/components/Experience.jsx';
import { CustomObject } from './src/components/CustomObject.jsx';
import { SketchPicker } from 'react-color';

export default function App() {
const [color, setColor] = useState();

  return ( 
    <>
        <Canvas
        camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [0, 0, 6]
            }}
            style={{
                width: 800,
                height: 300,
                backgroundColor: 'black'
              }}
        >
            <CustomObject color={color}/>
            <Experience />
        </Canvas>
        
        <Editor />   
        <SketchPicker
         color={color}
         onChange={(color) => {
           setColor(color.hex);
         }}
      /> <Drop />

    </>
  )
}

*/
/*import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import ColorPicker from './src/components/ColorPicker.jsx';
import Editor from './src/components/Editor.jsx';
import Experience from './src/components/Experience.jsx';


//import Button from './button.jsx';
import * as THREE from 'three';
import { CustomObject } from './src/components/CustomObject.jsx';


export default function App() {
  return ( 
    <>
        <Canvas
        camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [0, 0, 6]
            }}
            style={{
                width: 800,
                height: 300
              }}
        >
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Experience />
            <CustomObject />
            
            <OrbitControls />
        </Canvas>
        <ColorPicker />
        <Editor /> 
        
    </>
  )
}
*/