/* eslint-disable react/no-unknown-property, react/prop-types */
import { useEffect, useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";

import { ASSETS, MODEL } from "./workstationConfig";

const WorkstationModel = ({ screenMaterialRef, onLoaded, children }) => {
  const { scene, materials } = useGLTF(ASSETS.model);

  useLayoutEffect(() => {
    const screen = materials[MODEL.screenMaterial];
    screenMaterialRef.current = screen;
    return () => {
      screenMaterialRef.current = null;
    };
  }, [materials, screenMaterialRef]);

  useEffect(() => {
    onLoaded?.();
  }, [onLoaded]);

  return (
    <group position={[-MODEL.center[0], -MODEL.center[1], -MODEL.center[2]]}>
      <group rotation-y={MODEL.rotationY}>
        <primitive object={scene} />
        {children}
      </group>
    </group>
  );
};

useGLTF.preload(ASSETS.model);

export default WorkstationModel;
