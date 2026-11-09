/* eslint-disable react/no-unknown-property */
import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { IcosahedronGeometry, MeshBasicMaterial, TorusGeometry } from "three";

import { COLORS } from "./workstationConfig";

// A few small wireframe "data nodes" around the desk. Geometry and materials
// are shared, so they add very little to the frame cost.
const ITEMS = [
  { shape: "node", tone: "violet", position: [-6.1, 4.2, -1.5], scale: 0.42, speed: 0.55, phase: 0 },
  { shape: "ring", tone: "cyan", position: [-4.2, 5, 0.5], scale: 0.34, speed: 0.42, phase: 1.7 },
  { shape: "node", tone: "cyan", position: [6.2, 4.5, -1], scale: 0.3, speed: 0.6, phase: 3.1 },
  { shape: "ring", tone: "violet", position: [4.4, 5.2, -2], scale: 0.42, speed: 0.38, phase: 4.4 },
];

const FloatingElements = ({ reducedMotion }) => {
  const refs = useRef([]);

  const resources = useMemo(
    () => ({
      node: new IcosahedronGeometry(1, 0),
      ring: new TorusGeometry(1, 0.06, 6, 24),
      violet: new MeshBasicMaterial({ color: COLORS.violet, wireframe: true, transparent: true, opacity: 0.55 }),
      cyan: new MeshBasicMaterial({ color: COLORS.cyan, wireframe: true, transparent: true, opacity: 0.4 }),
    }),
    []
  );

  useEffect(() => () => Object.values(resources).forEach((r) => r.dispose()), [resources]);

  useFrame(({ clock }) => {
    if (reducedMotion) return;
    const t = clock.elapsedTime;
    refs.current.forEach((mesh, i) => {
      if (!mesh) return;
      const { position, speed, phase } = ITEMS[i];
      mesh.position.y = position[1] + Math.sin(t * speed + phase) * 0.14;
      mesh.rotation.x = t * speed * 0.35 + phase;
      mesh.rotation.y = t * speed * 0.5;
    });
  });

  return ITEMS.map((item, i) => (
    <mesh
      key={i}
      ref={(el) => (refs.current[i] = el)}
      geometry={resources[item.shape]}
      material={resources[item.tone]}
      position={item.position}
      scale={item.scale}
      rotation={[item.phase, item.phase, 0]}
    />
  ));
};

export default FloatingElements;
