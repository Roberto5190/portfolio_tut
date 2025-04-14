import { useGLTF } from "@react-three/drei";

export function Room(props) {
  const { nodes, materials } = useGLTF("/models/hacker_room.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.computer_computer_mat_0.geometry}
        material={materials.computer_mat}
      />
      <mesh
        geometry={nodes.server_server_mat_0.geometry}
        material={materials.server_mat}
      />
      <mesh
        geometry={nodes.vhs_vhsPlayer_mat_0.geometry}
        material={materials.vhsPlayer_mat}
      />
      <mesh
        geometry={nodes.shelf_stand_mat_0.geometry}
        material={materials.stand_mat}
      />
      <mesh
        geometry={nodes.keyboard_mat_mat_mat_0.geometry}
        material={materials.mat_mat}
      />
      <mesh
        geometry={nodes.arm_arm_mat_0.geometry}
        material={materials.arm_mat}
      />
      <mesh geometry={nodes.Tv_tv_mat_0.geometry} material={materials.tv_mat} />
      <mesh
        geometry={nodes.table_table_mat_0.geometry}
        material={materials.table_mat}
      />
      <mesh
        geometry={nodes.Cables_cables_mat_0.geometry}
        material={materials.cables_mat}
      />
      <mesh
        geometry={nodes.props_props_mat_0.geometry}
        material={materials.props_mat}
      />
      <mesh
        geometry={nodes.screen_screens_0.geometry}
        material={materials.screens}
      />
      <mesh
        geometry={nodes.screen_glass_glass_0.geometry}
        material={materials.glass}
      />
      <mesh
        geometry={nodes.Ground_ground_mat_0.geometry}
        material={materials.ground_mat}
      />
      <mesh
        geometry={nodes.peripherals_key_mat_0.geometry}
        material={materials.key_mat}
      />
    </group>
  );
}

useGLTF.preload("/models/hacker_room.glb");
