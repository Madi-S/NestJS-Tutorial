function logTime<T>(num: T): T {
    console.log(new Date())
    return num
}

function logTime2<T>(num: T): T {
    if (typeof num === 'string') {
        num.toLocaleLowerCase()
    }
    return num
}

logTime<string>('asdf')
// logTime<number>('42')
logTime<number>(42)

interface MyInterface {
    transform: <T, F>(a: T) => F
}

class MyGenClass<T> {
    value!: T
}

const a234 = new MyGenClass<number>()

interface TimeStamp {
    stamp: number
}

function logTimeStamp<T extends TimeStamp>(num: T): T {
    console.log(num.stamp)
    return num
}
