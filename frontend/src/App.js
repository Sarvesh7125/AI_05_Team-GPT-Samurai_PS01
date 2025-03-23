import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Avatar() {
    const { scene } = useGLTF("/avatar.glb");
    return <primitive object={scene}/>;
}

function App() {
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <Canvas camera={{ position: [0, 0, 3] }}>
                <ambientLight intensity={0.5} />
                <Avatar />
                <OrbitControls />
            </Canvas>
        </div>
    );
}

export default App;
