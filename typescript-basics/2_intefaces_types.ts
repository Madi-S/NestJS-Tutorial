type PointA = { x: number; y: number }

type PointB = PointA & { z: number }

type stringOrNumber = string | number

interface IPoint {
    x: number
    y: number
}

interface I3DPoint extends IPoint {
    z: number
}

const c3 = (point: IPoint) => {
    // inteface casting
    const d: I3DPoint = point as I3DPoint
}

// type casting
const myCanvas = document.getElementById('42') as HTMLCanvasElement

function print(coord: IPoint) {}

interface ITest {
    a: number
}

interface ITest {
    b: number
}
