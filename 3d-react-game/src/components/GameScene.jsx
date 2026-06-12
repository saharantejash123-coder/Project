import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import useGameStore from '../store/useGameStore';
import * as THREE from 'three';

// Moving synthwave grid floor
function MovingGrid() {
  const gridRef = useRef();
  const { gameState, speed } = useGameStore();

  useFrame((state, delta) => {
    if (gameState === 'playing' && gridRef.current) {
      gridRef.current.position.z = (gridRef.current.position.z + speed * delta) % 10;
    }
  });

  return (
    <group ref={gridRef}>
      <gridHelper args={[100, 100, '#ff00ff', '#00f2fe']} position={[0, -0.5, 0]} />
    </group>
  );
}

import Player from './Player';
import Obstacles from './Obstacles';
import Environment from './Environment';

export default function GameScene() {
  const playerRef = useRef();
  const obstaclesRef = useRef([]);
  const { gameState, gameOver } = useGameStore();

  // Collision detection
  useFrame(() => {
    if (gameState !== 'playing' || !playerRef.current) return;

    const playerBox = new THREE.Box3().setFromObject(playerRef.current);
    
    // Check collision against all active obstacles
    let hit = false;
    for (const obs of obstaclesRef.current) {
      if (!obs) continue;
      const obsBox = new THREE.Box3().setFromObject(obs);
      // Reduce hitbox size slightly to make the game feel fairer
      obsBox.expandByScalar(-0.2); 
      playerBox.expandByScalar(-0.1);
      
      if (playerBox.intersectsBox(obsBox)) {
        hit = true;
        break;
      }
    }

    if (hit) {
      gameOver();
    }
  });

  return (
    <>
      <MovingGrid />
      <Environment />
      
      {gameState !== 'start' && (
        <>
          <Player ref={playerRef} />
          <Obstacles ref={obstaclesRef} />
        </>
      )}
    </>
  );
}
