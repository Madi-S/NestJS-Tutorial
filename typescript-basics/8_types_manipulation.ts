type Point22 = { x: number; y: number }
type P = keyof Point22 // union type of x and y

function myFunc() {
    return { a: 1 }
}

type myFuncType = () => { a: number }

type K = ReturnType<typeof myFunc> // {a: number}

const obj: K = { a: 42 }

const myArray = [{ name: 'Daur', age: 27 }]

type Person = typeof myArray[number]
type Age = typeof myArray[number]['age']

type MessageOf<T> = T extends { message: unknown } ? T['message'] : never

interface Email {
    message: string
}

interface Cat {
    color: string
}

type EmailMessageContents = MessageOf<Email> // string
type CatMessageContents = MessageOf<Cat> // never

interface Test54 {
    [key: string]: number
}

type OptionFlags<Type> = {
    [Property in keyof Type]: boolean
}

type world = 'world'
type Greeting = `Hello ${world}`
