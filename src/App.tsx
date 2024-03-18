import './App.css'
import {Canvas} from '@react-three/fiber'
import {Line} from "@react-three/drei"
import {Vector2} from "three"
import {up} from "./draw.ts";


function App() {
  const points: Array<Vector2> = [];
  up(points, 1);

  return (
    <div className={"content"}>
      <h1>Plant Generator</h1>
      <Canvas>
        <Line
          points={points}
          lineWidth={2}
          color={"black"}
        />
      </Canvas>
    </div>
  )
}

export default App
