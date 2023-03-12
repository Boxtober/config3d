
import { OrbitControls } from '@react-three/drei'


export default function Experience() {
 
    return <>
<ambientLight intensity={0.5} />
<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
<pointLight position={[-10, -10, -10]} />
 <OrbitControls />

 </>
}

/*import { useThree, extend, useFrame } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
extend({ OrbitControls })

export default function Experience() {
    const { camera, gl } = useThree()
    return <>
   
    <directionalLight position={[1, 2, 3]} intensity={1.5} />
    <ambientLight intensity={0.5} />
    
   
    <pointLight position={[-10, -10, -10]} />
    </>
}*/