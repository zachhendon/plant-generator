import './App.css'
import {Canvas} from '@react-three/fiber'
import {Line} from "@react-three/drei"
import {Vector2} from "three"
import {up} from "./draw.ts";


function App() {
  const points: Array<Vector2> = [];
  up(points, 2);


  return (
    <>
      <h1>Plant Generator</h1>
      <Canvas>
        <Line
          points={points}
          lineWidth={2}
        />
      </Canvas>
    </>
  )
}

export default App
