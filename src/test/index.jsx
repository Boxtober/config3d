import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Canvas
        camera={ {
            fov: 45,
            near: 0.1,
            far: 200,
            position: [ - 4, 3, 6 ]
        } }
        onPointerMissed={ () => { console.log('You missed!') } }
    >
        <Experience />
    </Canvas>
  </React.StrictMode>,
)


