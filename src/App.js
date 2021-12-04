import React, { useEffect, useState, useRef, Suspense, useCallback } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Canvas, extend, useFrame, useLoader } from '@react-three/fiber';
import Room from './Room2';
import { OrbitControls, Loader} from '@react-three/drei';



function App() {
  return (
    <>
        <Canvas perspective camera={{position:[0,1.6, 5]}}>
          <Room /> 
          <OrbitControls />
        </Canvas>
        <Loader/>
    </>
  );
}

export default App;
