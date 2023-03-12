import React from 'react';
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import ColorPicker from './src/components/ColorPicker.jsx';

import * as THREE from 'three';

const Button = (props) => {


const [clicked, click] = useState(false)
const ref = useRef()
const colorPik = document.querySelector('#idDeLaDivDuColorPicker')
const cupColor = new THREE.Color(colorPik.style.backgroundColor)

    return (
        <button
          {...props} 
          className="button"
      ref={ref}
      onClick={(event) => click(!clicked)}
      onPointerOut={(event) => click(false)}>
        
        
            Generate Countdown
        </button>
    )
}

export default Button;