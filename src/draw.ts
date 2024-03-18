import {Vector2} from "three"

export function up(points: Array<Vector2>, distance: number) {
  if (points.length === 0) {
    points.push(new Vector2(0, 0))
  }

  const prevPoint = points[points.length - 1];
  const x = prevPoint.x;
  const y = prevPoint.y;

  points.push(new Vector2(x, y + distance));
}
