enum Direction {
    // Up = 1,
    // Down,   // 2
    // Left,   // 3
    // Right   // 4
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}

enum Decision {
    Yes = 1,
    // No = 'NO'
    No = calcEnum()
}

function calcEnum() {
    // return 'NO'
    return 2
}

function runEnum(obj: { Up: string }) {}

runEnum(Direction)

enum Test {
    A
}

let nameA = Test[Test.A] // A

const enum Enum123 {
    A, 
    B
}

let c123 = Enum123.A


enum Dice {
    One = 1,
    Two,
    Three
}

function kzDice(dice: Dice) {
    switch(dice) {
        case Dice.One:
            return 'bir'
        case Dice.Two:
            return 'eki'
        case Dice.Three:
            return 'ush'
        default:
            const a: never = dice
    }
}
