import React, { Suspense, useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { Canvas, useFrame, extend } from '@react-three/fiber';

import Model from './components/Three/Wall';
import Painting1 from './components/Three/Painting1';
import Painting2 from './components/Three/Painting2';
import Book1 from './components/Three/Book1';
import Painting3 from './components/Three/Painting3';
import MusicBox from './components/Three/MusicBox';

const Room = () => {
  return(
    <>
        <ambientLight intensity={0.4}/>
        <Suspense fallback={null}>
          <Painting1 onClick={(e)=>{ e.stopPropagation(); alert('painting1')}} scale={[0.001, 0.001, 0.001]} position={[0, 1.4, 0.56]}/> 
          <Painting2 position={[2, 1.8, 0.34]} onClick={(e)=>{e.stopPropagation(); alert('painting2')}} /> 
          <Painting3 scale={[0.008, 0.006, 0.007]} position={[1.2, 1.8, 0.34]} onClick={(e)=>{e.stopPropagation(); alert('painting3')}} /> 
          <Book1 position={[1, 1, 3]} scale={[12, 12, 12]} onClick={(e)=>{e.stopPropagation(); alert('Book1')}}/>
          <MusicBox position={[0, 1, 2]} scale={[0.04, 0.04, 0.04]} onClick={(e)=>{e.stopPropagation(); alert('MusicBox')}}/>
          <Model scale={[0.03, 0.03, 0.03]}/>
          <Model position={[0, 0, 5.4]} scale={[0.03, 0.03, 0.03]}/>
          <Model rotation={[0, Math.PI / 2, 0]} position={[2.7, 0, 2.7]} scale={[0.03, 0.03, 0.03]}/>
          <Model rotation={[0, Math.PI / 2, 0]} position={[-2.7, 0, 2.7]} scale={[0.03, 0.03, 0.03]}/>
        </Suspense>
    </>
  )}


  export default Room;