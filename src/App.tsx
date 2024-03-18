import './App.css'
import {Canvas} from '@react-three/fiber'
import {Line, PivotControls} from "@react-three/drei"
import {Vector3} from "three"
import {initializePoints, right, up, forward} from "./draw.ts";

function App() {
  const points: Array<Vector3> = initializePoints();
  up(points, 1)
  right(points, 1);
  forward(points, -1);
  up(points, 1);
  forward(points, 1);
  right(points, -1);
  forward(points, -1);
  up(points, -1);

  return (
    <div className={"content"}>
      <h3>Plant Generator</h3>
      <Canvas id="canvas">
        <PivotControls
          scale={0.75}
          anchor={[0, -1, 0]}
          activeAxes={[true, false, true]}
        >
          <Line
            points={points}
            lineWidth={2}
            color={"black"}
            scale={1}
          />
        </PivotControls>
      </Canvas>
    </div>
  )
}

export default App
