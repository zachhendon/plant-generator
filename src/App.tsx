import './App.css'
import {useState, ChangeEvent} from "react";
import {Canvas} from '@react-three/fiber'
import {Line, PivotControls} from "@react-three/drei"
import {Vector3} from "three"
import {initializePoints, drawPoints} from "./draw.ts";

function App() {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setN(Math.max(0, e.target.valueAsNumber));
  }

  const [n, setN] = useState(0);

  let struct: string = "F-F-F-F";
  for (let i = 0; i < n; i++) {
    let newStruct = "";
    for (let j = 0; j < struct.length; j++) {
      switch (struct[j]) {
        case 'F':
          newStruct += "F-F+F+FF-F-F+F";
          break;
        case '-':
          newStruct += "-"
          break;
        case '+':
          newStruct += "+"
          break;
      }
    }
    struct = newStruct;
  }

  const points: Array<Vector3> = initializePoints();
  drawPoints(points, struct)

  return (
    <div className={"content"}>
      <div>
        <h3>Plant Generator</h3>
        <label>
          <p>n = </p>
        </label>
        <input className="input" type="number" value={n} onChange={handleChange}/>
      </div>
      <Canvas id="canvas">
        <PivotControls
          scale={0.7}
          anchor={[0, -1, 0]}
          activeAxes={[true, false, true]}
        >
          <Line
            points={points}
            lineWidth={2}
            color={"black"}
            linewidth={0.5}
          />
        </PivotControls>
      </Canvas>
    </div>
  )
}

export default App
