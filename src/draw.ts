import {Vector3} from "three"

export function initializePoints(): Array<Vector3> {
  const points: Array<Vector3> = [];
  points.push(new Vector3(0, 0, 0));
  return points;
}

export interface Scales {
  xScale: number,
  yScale: number,
  zScale: number
}

function getScaleFactor(points: Array<Vector3>, desiredScales: Scales): number {
  const curScales: Scales = {xScale: 0, yScale: 0, zScale: 0}
  const startPos = points[0];

  let xDist: number;
  let yDist: number;
  let zDist: number;
  for (let i = 0; i < points.length; i++) {
    xDist = Math.abs(points[i].x - startPos.x);
    yDist = Math.abs(points[i].y - startPos.y);
    zDist = Math.abs(points[i].z - startPos.z);

    curScales.xScale = Math.max(curScales.xScale, xDist)
    curScales.yScale = Math.max(curScales.yScale, yDist)
    curScales.zScale = Math.max(curScales.zScale, zDist)
  }

  return Math.max(
    curScales.xScale / desiredScales.xScale,
    curScales.yScale / desiredScales.yScale,
    curScales.zScale / desiredScales.zScale)
}

export function scalePoints(points: Array<Vector3>) {
  const scaleFactor: number = getScaleFactor(points, {xScale: 100, yScale: 5, zScale: 3})
  for (let i = 0; i < points.length; i++) {
    points[i].x /= scaleFactor;
    points[i].y /= scaleFactor;
    points[i].z /= scaleFactor;
  }
}

interface Ranges {
  xMin: number,
  xMax: number,
  yMin: number,
  yMax: number,
  zMin: number,
  zMax: number
}

function getRanges(points: Array<Vector3>): Ranges {
  const ranges: Ranges = {
    xMin: Number.POSITIVE_INFINITY, xMax: Number.NEGATIVE_INFINITY,
    yMin: Number.POSITIVE_INFINITY, yMax: Number.NEGATIVE_INFINITY,
    zMin: Number.POSITIVE_INFINITY, zMax: Number.NEGATIVE_INFINITY,
  }

  for (let i = 0; i < points.length; i++) {
    ranges.xMin = Math.min(ranges.xMin, points[i].x)
    ranges.xMax = Math.max(ranges.xMax, points[i].x)
    ranges.yMin = Math.min(ranges.yMin, points[i].y)
    ranges.yMax = Math.max(ranges.yMax, points[i].y)
    ranges.zMin = Math.min(ranges.zMin, points[i].z)
    ranges.zMax = Math.max(ranges.zMax, points[i].z)
  }

  return ranges;
}

export function centerPoints(points: Array<Vector3>) {
  const ranges: Ranges = getRanges(points);
  const scales: Scales = {
    xScale: (ranges.xMin + ranges.xMax) / 2,
    yScale: (ranges.yMin + ranges.yMax) / 2,
    zScale: (ranges.zMin + ranges.zMax) / 2,
  }

  for (let i = 0; i < points.length; i++) {
    points[i].x -= scales.xScale;
    points[i].y -= scales.yScale;
    points[i].z -= scales.zScale;
  }
}

export function drawPoints(points: Array<Vector3>, struct: string) {
  let rot: number = 0;
  for (let i = 0; i < struct.length; i++) {
    const prevPoint = points[points.length - 1]
    switch (struct[i]) {
      case 'F':
        points.push(new Vector3(prevPoint.x + Math.cos(rot), prevPoint.y + Math.sin(rot), 0))
        break;
      case '-':
        rot += Math.PI / 2;
        break;
      case '+':
        rot -= Math.PI / 2;
        break;
    }
  }
  scalePoints(points)
  centerPoints(points)
}
