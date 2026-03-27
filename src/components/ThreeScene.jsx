import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus } from '@react-three/drei';

function GlowingSphere() {
  const meshRef = useRef();
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={meshRef} castShadow>
        <Sphere args={[1, 64, 64]}>
          <MeshDistortMaterial
            color="#00d4ff"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0}
            metalness={0.9}
            emissive="#00d4ff"
            emissiveIntensity={0.15}
          />
        </Sphere>
      </mesh>
    </Float>
  );
}

function OrbitRing() {
  const ringRef = useRef();
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 3;
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.4;
    }
  });
  return (
    <mesh ref={ringRef}>
      <Torus args={[1.7, 0.025, 16, 100]}>
        <meshStandardMaterial color="#7b2ff7" emissive="#7b2ff7" emissiveIntensity={0.8} />
      </Torus>
    </mesh>
  );
}

function OrbitRing2() {
  const ringRef = useRef();
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 6;
      ringRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });
  return (
    <mesh ref={ringRef}>
      <Torus args={[2.1, 0.015, 16, 100]}>
        <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.5} />
      </Torus>
    </mesh>
  );
}

export default function ThreeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#00d4ff" />
      <pointLight position={[-5, -5, -5]} intensity={1} color="#7b2ff7" />
      <pointLight position={[0, 5, 0]} intensity={0.8} color="#ffffff" />
      <GlowingSphere />
      <OrbitRing />
      <OrbitRing2 />
    </Canvas>
  );
}
