import {Suspense, useEffect, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, meshBounds, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader'
const Computers = ({isMobile}) => {
  const computer = useGLTF('./om_nom/scene.gltf') 

  return (
    <mesh>
      <hemisphereLight intensity={2.00} groundColor='black'/>
      <pointLight  position={[0, 1, 2]} intensity={1}/>
      <pointLight  position={[0, -5, 1]} intensity={2}/>
      <pointLight  position={[0, 1, 1]} intensity={1}/>
      <pointLight  position={[0, -3, 0]} intensity={0.5}/>
      <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={4} castShadow shadow-mapSize = {1024}/>
      <primitive object={computer.scene} scale={ isMobile ? 0.060 : 0.10} position={isMobile ? [0, -1.5, 0] : [0, -1.6, 0]} rotation={[0, 1.3, 0]} />
    </mesh>
  )
}

const ComputersCanvas = () => 
{
  const [isMobile, setIsMobile] = useState(false); 
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return() => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  },[])
  return(
    <Canvas frameloop='demand' shadows camera={{position: [20, 3,5], fov: 25 }} gl={{preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls enablePan={false} enableZoom = {false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2}/>
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}
export default ComputersCanvas