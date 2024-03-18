import {Vector3} from "three"

export function initializePoints(): Array<Vector3> {
  const points: Array<Vector3> = [];
  points.push(new Vector3(0, -3, 0));
  return points;
}

export function right(points: Array<Vector3>, distance: number) {
  const prevPoint = points[points.length - 1];
  const x = prevPoint.x;
  const y = prevPoint.y;
  const z = prevPoint.z;

  points.push(new Vector3(x + distance, y, z));
}

export function up(points: Array<Vector3>, distance: number) {
  const prevPoint = points[points.length - 1];
  const x = prevPoint.x;
  const y = prevPoint.y;
  const z = prevPoint.z;

  points.push(new Vector3(x, y + distance, z));
}

export function forward(points: Array<Vector3>, distance: number) {
  const prevPoint = points[points.length - 1];
  const x = prevPoint.x;
  const y = prevPoint.y;
  const z = prevPoint.z;

  points.push(new Vector3(x, y, z + distance));
}
