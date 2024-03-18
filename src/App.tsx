import './App.css'
import {Canvas} from '@react-three/fiber'
import {Line} from "@react-three/drei"
import {Vector2} from "three"

function App() {
  const points: Array<Vector2> = [];
  points.push(new Vector2(0, 0))
  points.push(new Vector2(1, 0))
  points.push(new Vector2(1, 1))

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
