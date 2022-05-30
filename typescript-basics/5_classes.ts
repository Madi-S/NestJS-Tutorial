class Point1 {
    private x: number
    readonly y: number

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }

    func() {
        // this.y = 10
        this.x = 10
    }

    private func2() {}

    protected func3() {}
}

const point = new Point1(2, 5)
console.log(point.y)

point.func()
// point.func2()

class My3DPoint extends Point1 {
    z: number
    constructor(x: number, y: number, z: number) {
        super(x, y)
        this.z = z
        // this.func2() inaccessible
        this.func3()
    }

    // overriding
    func(name?: string) {
        console.log('bobababa')
    }
}

const point42 = new My3DPoint(2, 1, 5)
point42.func()
// point42.func3()
// point42.x

class StaticTest {
    static c = 'lksdfj'

    static test() {
        return 'sadfasdf'
    }
}

const var123 = StaticTest.c
const var234 = StaticTest.test
var234()

abstract class Test3 {
    myMethod() {}
}

class Test4 extends Test3 {
    myMethod() {
        return 'baodsaf'
    }
}

// const t32 = new Test3()
const t32 = new Test4()

interface C {
    test: (a: number) => string
    prop: string
}

class D implements C {
    test(a: number) {
        return a.toString()
    }
    prop = 'test'
}
