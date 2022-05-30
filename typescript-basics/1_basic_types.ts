let a: number = 4
let b: string = 'bobaba'
let c = true

// a = 'boba'

let d: string[] = ['a', 'b', 'c']

let e: any = 3
e = 'boba'

function test(a: string): number | string {
    return a || 42
}

const test2 = (a: number): number => {
    return a * 2
}

d = d.map(x => x.toLowerCase())
d = d.map((x: string) => x.toLowerCase())

function countCoord(coord: { lat: number; long?: number }) {
    return ''
}

function printIt(id: number | string): void {
    // console.log(id.toUpperCase())

    if (typeof id === 'number') {
        console.log(id.toString())
    } else {
        console.log(id.toUpperCase())
    }
}

function getSum(a: number | number[]) {
    if (Array.isArray(a)) {
    }
}

const x: undefined = undefined
const z: null = null
