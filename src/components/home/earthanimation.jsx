'use client';

import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

// ParticleSphere component to create glowing earth effect
const ParticleSphere = ({ count = 5000, radius = 1 }) => {
  const ref = useRef();

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.cos(phi);
      const z = radius * Math.sin(phi) * Math.sin(theta);

      pos.set([x, y, z], i * 3);
    }
    return pos;
  }, [count, radius]);

  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.0008;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.01}
        color="#fcd34d"
        sizeAttenuation
        transparent
        depthWrite={false}
      />
    </points>
  );
};

// GlowingEarth component
const GlowingEarth = () => {
  return (
    <div className="w-full min-h-screen bg-black flex flex-row items-center justify-center text-white relative z-10">
      {/* Left side text */}
      <div className="w-2/5 p-6 ml-30">
      <p className="text-blue-400 text-lg font-bold mb-10">Global Scale</p>

        <h1 className="text-4xl font-bold mb-4">The backbone for global commerce</h1>
        <p className="text-lg leading-relaxed">
        Stripe makes moving money as easy and programmable as moving data. Our teams are based in offices around the world and we process hundreds of billions of dollars each year for ambitious businesses of all sizes.
        </p>
        <div className="text-white p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-20 mt-20">
      
      {/* Box 1 */}
      <div className="border-l-2 border-cyan-400 pl-4 max-w-xs">
        <h2 className="text-2xl font-bold mb-2">500M+</h2>
        <p className="text-gray-300">
          API requests per day, peaking at 13,000 requests a second.
        </p>
      </div>

      {/* Box 2 */}
      <div className="border-l-2 border-cyan-400 pl-4 max-w-xs">
        <h2 className="text-2xl font-bold mb-2">99.999%</h2>
        <p className="text-gray-300">
          historical uptime for <span className="text-cyan-400">Stripe services.</span>
        </p>
      </div>
    </div>
      </div>


      {/* Right side 3D Earth */}
      <div className="w-3/5 aspect-square max-h-[120vh]">
        <Canvas camera={{ position: [0, 0, 3] }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[2, 2, 2]} intensity={1.2} color="#ffcc80" />
          <Stars radius={100} depth={50} count={5000} factor={4} fade />
          <ParticleSphere />
          <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={false} />
        </Canvas>
      </div>
    </div>
  );
};

export default GlowingEarth;
