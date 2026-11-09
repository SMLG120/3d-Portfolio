import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox } from "@react-three/drei";
import { MathUtils } from "three";

const ACCENT = "#915eff";

function Monitor({ onOpenProjects }) {
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "";
    return () => { document.body.style.cursor = ""; };
  }, [hovered]);

  return (
    <group position={[0, 1.25, -0.19]}>
      <mesh position={[0, -0.44, 0]} castShadow>
        <boxGeometry args={[0.11, 0.6, 0.1]} />
        <meshStandardMaterial color="#40415e" metalness={0.65} roughness={0.35} />
      </mesh>
      <mesh position={[0, -0.72, 0.06]} castShadow>
        <boxGeometry args={[0.62, 0.055, 0.32]} />
        <meshStandardMaterial color="#252538" metalness={0.6} roughness={0.35} />
      </mesh>
      <RoundedBox args={[2.25, 1.36, 0.12]} radius={0.07} smoothness={3} castShadow>
        <meshStandardMaterial color="#171724" metalness={0.45} roughness={0.4} />
      </RoundedBox>
      <mesh
        position={[0, 0, 0.071]}
        onPointerOver={(event) => { event.stopPropagation(); setHovered(true); }}
        onPointerOut={() => setHovered(false)}
        onClick={(event) => { event.stopPropagation(); onOpenProjects(); }}
      >
        <planeGeometry args={[2.08, 1.19]} />
        <meshBasicMaterial color={hovered ? "#292057" : "#10172a"} />
      </mesh>
      <mesh position={[-0.63, 0.35, 0.078]}>
        <planeGeometry args={[0.62, 0.06]} />
        <meshBasicMaterial color={ACCENT} />
      </mesh>
      <mesh position={[-0.32, 0.17, 0.079]}>
        <planeGeometry args={[1.25, 0.045]} />
        <meshBasicMaterial color="#33d5e8" />
      </mesh>
      <mesh position={[-0.53, 0.03, 0.079]}>
        <planeGeometry args={[0.83, 0.035]} />
        <meshBasicMaterial color="#7d74bd" />
      </mesh>
      <mesh position={[-0.69, -0.12, 0.079]}>
        <planeGeometry args={[0.48, 0.035]} />
        <meshBasicMaterial color="#a1a0b9" />
      </mesh>
      <mesh position={[0.59, -0.18, 0.079]}>
        <planeGeometry args={[0.48, 0.48]} />
        <meshBasicMaterial color={hovered ? "#663dc1" : "#30255e"} />
      </mesh>
    </group>
  );
}

function Workstation({ onOpenProjects, reducedMotion }) {
  const group = useRef();
  useFrame(({ pointer }, delta) => {
    if (!group.current || reducedMotion) return;
    group.current.rotation.y = MathUtils.damp(group.current.rotation.y, -0.22 + pointer.x * 0.12, 3, delta);
    group.current.rotation.x = MathUtils.damp(group.current.rotation.x, pointer.y * -0.045, 3, delta);
  });

  return (
    <group ref={group} rotation={[0, -0.22, 0]} position={[0, -0.35, 0]}>
      <RoundedBox args={[3.85, 0.16, 1.75]} position={[0, -0.04, 0]} radius={0.045} smoothness={2} receiveShadow castShadow>
        <meshStandardMaterial color="#25233b" roughness={0.48} metalness={0.3} />
      </RoundedBox>
      {[-1.55, 1.55].map((x) => [-0.61, 0.61].map((z) => (
        <mesh key={`${x}-${z}`} position={[x, -0.82, z]} castShadow>
          <boxGeometry args={[0.1, 1.5, 0.1]} />
          <meshStandardMaterial color="#35334c" metalness={0.55} roughness={0.45} />
        </mesh>
      )))}
      <Monitor onOpenProjects={onOpenProjects} />
      <group position={[-0.1, 0.12, 0.54]} rotation={[0, 0, 0]}>
        <RoundedBox args={[1.4, 0.075, 0.45]} radius={0.045} smoothness={2} castShadow>
          <meshStandardMaterial color="#141524" roughness={0.4} metalness={0.4} />
        </RoundedBox>
        {Array.from({ length: 11 }, (_, i) => (
          <mesh key={i} position={[-0.58 + i * 0.115, 0.044, 0]}>
            <boxGeometry args={[0.085, 0.007, 0.27]} />
            <meshBasicMaterial color={i % 3 === 0 ? ACCENT : "#56516e"} />
          </mesh>
        ))}
      </group>
      <mesh position={[1.04, 0.1, 0.53]} castShadow>
        <sphereGeometry args={[0.14, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#55516c" metalness={0.4} roughness={0.4} />
      </mesh>
      <Float speed={reducedMotion ? 0 : 1.1} rotationIntensity={reducedMotion ? 0 : 0.12} floatIntensity={reducedMotion ? 0 : 0.14}>
        <group position={[1.51, 1.13, 0.05]}>
          <mesh>
            <icosahedronGeometry args={[0.29, 1]} />
            <meshStandardMaterial color={ACCENT} emissive="#4d268c" emissiveIntensity={0.6} wireframe />
          </mesh>
        </group>
      </Float>
    </group>
  );
}

export default function WorkstationCanvas({ onOpenProjects, reducedMotion = false }) {
  const [available, setAvailable] = useState(true);
  return available ? (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [4.4, 2.5, 5.8], fov: 35, near: 0.1, far: 60 }}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      shadows={false}
      onCreated={({ gl }) => {
        gl.domElement.addEventListener("webglcontextlost", () => setAvailable(false), { once: true });
      }}
      aria-label="Interactive 3D developer workstation. Select the monitor to view projects."
    >
      <ambientLight intensity={1.3} />
      <directionalLight position={[4, 7, 5]} intensity={2.2} />
      <pointLight position={[-3, 2, 1]} color={ACCENT} intensity={10} distance={9} />
      <Suspense fallback={null}>
        <Workstation onOpenProjects={onOpenProjects} reducedMotion={reducedMotion} />
      </Suspense>
    </Canvas>
  ) : (
    <div className="flex h-full items-center justify-center text-sm text-[#aaa8c2]">
      Explore my projects using the button on the left.
    </div>
  );
}
