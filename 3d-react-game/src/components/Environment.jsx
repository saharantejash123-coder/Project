import React, { useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import useGameStore from '../store/useGameStore';
import * as THREE from 'three';

export default function Environment() {
  const { speed, gameState } = useGameStore();
  const count = 40;
  
  // Create static positions for pillars along the sides
  const pillars = useMemo(() => {
    const p = [];
    for (let i = 0; i < count; i++) {
      const side = Math.random() > 0.5 ? 1 : -1;
      p.push({
        x: (15 + Math.random() * 10) * side,
        z: -i * 10,
        height: 5 + Math.random() * 15,
        color: side === 1 ? '#00f2fe' : '#ff00ff'
      });
    }
    return p;
  }, []);

  const groupRef = React.useRef();

  useFrame((state, delta) => {
    if (gameState === 'playing' && groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        child.position.z += speed * delta;
        if (child.position.z > 20) {
          child.position.z = -((count - 1) * 10) + (child.position.z - 20);
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {pillars.map((p, i) => (
        <mesh key={i} position={[p.x, p.height / 2 - 0.5, p.z]}>
          <boxGeometry args={[1, p.height, 1]} />
          <meshStandardMaterial 
            color={p.color} 
            emissive={p.color} 
            emissiveIntensity={0.5} 
            transparent 
            opacity={0.3} 
          />
        </mesh>
      ))}
    </group>
  );
}
