import React, { forwardRef, useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import useGameStore from '../store/useGameStore';
import * as THREE from 'three';

const POOL_SIZE = 30;

const Obstacles = forwardRef((props, ref) => {
  const { gameState, speed } = useGameStore();
  const groupRef = useRef();
  
  // Custom obstacle instances
  const obstaclesDataRef = useRef([]);
  const spawnTimer = useRef(0);
  const meshRefs = useRef(new Array(POOL_SIZE).fill(null));

  // Sync ref to parent for collision checking
  useEffect(() => {
    if (ref) {
      ref.current = meshRefs.current;
    }
  }, [ref]);

  // Initialize pool
  useEffect(() => {
    const initialData = [];
    for (let i = 0; i < POOL_SIZE; i++) {
        initialData.push({
            active: false,
            x: 0,
            y: -100, // hidden
            z: -100,
            rotationX: 0,
            rotationY: 0,
            size: 1,
            passed: false,
            type: Math.random() > 0.5 ? 'box' : 'cone'
        });
    }
    obstaclesDataRef.current = initialData;
    
    if (gameState === 'start') {
        // Reset pool
        obstaclesDataRef.current.forEach(obs => {
            obs.active = false;
            obs.passed = false;
            obs.y = -100;
        });
    }
  }, [gameState]);

  useFrame((state, delta) => {
    if (gameState !== 'playing') return;

    let scoreGained = 0;
    const data = obstaclesDataRef.current;

    for (let i = 0; i < POOL_SIZE; i++) {
      const obs = data[i];
      const mesh = meshRefs.current[i];
      
      if (!obs.active || !mesh) continue;

      obs.z += speed * delta;
      
      // Rotate for visual effect
      obs.rotationX += delta;
      obs.rotationY += delta * 0.5;

      // Update mesh transforms
      mesh.position.set(obs.x, obs.y + (obs.size/2) - 0.5, obs.z);
      mesh.rotation.set(obs.rotationX, obs.rotationY, 0);
      mesh.visible = true;

      // Obstacle passed the player
      if (obs.z > 8 && !obs.passed) {
        obs.passed = true;
        scoreGained++;
      }

      // Despawn
      if (obs.z > 20) {
        obs.active = false;
        mesh.visible = false;
        // Move it away safely
        mesh.position.y = -100;
      }
    }

    if (scoreGained > 0) {
        // useGameStore.getState().incrementScore(scoreGained * 10);
        // Direct method call avoids re-renders in useFrame loop
        useGameStore.setState((prev) => ({ 
            score: prev.score + scoreGained * 10,
            speed: Math.min(prev.speed + 0.2, 40)
        }));
    }

    // Spawn new obstacles
    spawnTimer.current -= delta;
    if (spawnTimer.current <= 0) {
        // Find inactive obstacle
        const inactiveIdx = data.findIndex(o => !o.active);
        if (inactiveIdx !== -1) {
            const newObs = data[inactiveIdx];
            newObs.active = true;
            newObs.x = (Math.random() - 0.5) * 16;
            newObs.z = -100; // Spawn far away
            newObs.y = 0.5;
            newObs.rotationX = Math.random() * Math.PI;
            newObs.rotationY = Math.random() * Math.PI;
            newObs.size = 1 + Math.random() * 1.5;
            newObs.passed = false;
        }
      
        // Faster spawn rate as speed increases
        spawnTimer.current = Math.max(0.1, 1.5 - (speed / 50));
    }
  });

  return (
    <group ref={groupRef}>
      {Array(POOL_SIZE).fill().map((_, index) => (
        <mesh 
          key={index} 
          position={[0, -100, 0]} 
          ref={(el) => (meshRefs.current[index] = el)}
          visible={false}
          castShadow
          receiveShadow
        >
          {obstaclesDataRef.current[index]?.type === 'box' ? (
            <boxGeometry args={[1, 1, 1]} /> // Updated size via scaling if needed later, but simplified for performance
          ) : (
             <coneGeometry args={[0.5, 1, 4]} />
          )}
          <meshStandardMaterial 
            color="#ff0844" 
            emissive="#ff0844" 
            emissiveIntensity={0.5} 
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
      ))}
    </group>
  );
});

export default Obstacles;
