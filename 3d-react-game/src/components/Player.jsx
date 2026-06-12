import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import useGameStore from '../store/useGameStore';
import * as THREE from 'three';

const Player = forwardRef((props, ref) => {
  const { gameState, touchLeft, touchRight } = useGameStore();
  const innerRef = useRef();
  
  // Combine refs
  const meshRef = (node) => {
    innerRef.current = node;
    if (typeof ref === 'function') ref(node);
    else if (ref) ref.current = node;
  };

  // Input state
  const keys = useRef({ left: false, right: false });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'ArrowLeft' || e.code === 'KeyA') keys.current.left = true;
      if (e.code === 'ArrowRight' || e.code === 'KeyD') keys.current.right = true;
    };
    const handleKeyUp = (e) => {
      if (e.code === 'ArrowLeft' || e.code === 'KeyA') keys.current.left = false;
      if (e.code === 'ArrowRight' || e.code === 'KeyD') keys.current.right = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useFrame((state, delta) => {
    if (gameState !== 'playing' || !innerRef.current) return;

    // Movement logic (keyboard + touch)
    const moveSpeed = 15;
    const goLeft = keys.current.left || touchLeft;
    const goRight = keys.current.right || touchRight;
    if (goLeft) {
      innerRef.current.position.x -= moveSpeed * delta;
    }
    if (goRight) {
      innerRef.current.position.x += moveSpeed * delta;
    }

    // Clamp position within the track bounds
    const maxBound = 8;
    innerRef.current.position.x = THREE.MathUtils.clamp(innerRef.current.position.x, -maxBound, maxBound);

    // Add cool tilting effect when moving
    const targetZ = goLeft ? 0.5 : goRight ? -0.5 : 0;
    innerRef.current.rotation.z = THREE.MathUtils.lerp(innerRef.current.rotation.z, targetZ, 0.1);
  });

  // Material setup for glowing effect
  return (
    <group>
      <pointLight position={[0, 0, 0]} intensity={1.5} color="#00f2fe" distance={10} />
      <mesh ref={meshRef} position={[0, 0.5, 5]} castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial 
          color="#aa00ff" 
          emissive="#00f2fe" 
          emissiveIntensity={2} 
          roughness={0.2} 
          metalness={0.8}
        />
      </mesh>
    </group>
  );
});

export default Player;
