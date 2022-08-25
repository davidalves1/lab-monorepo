const mathOperations = require('@davidalves1/math-operations')

const a = 10
const b = 8

const bootstrap = () => {
    console.log(`${a} + ${b} = ${mathOperations.sum(a, b)}`)
    console.log(`${a} - ${b} = ${mathOperations.subtraction(a, b)}`)
    console.log(`${a} * ${b} = ${mathOperations.multiplication(a, b)}`)
    console.log(`${a} / ${b} = ${mathOperations.division(a, b)}`)
}

bootstrap()
