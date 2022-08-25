const sum = (a, b) => a + b
const subtraction = (a, b) => a - b
const multiplication = (a, b) => a * b
const division = (a, b) => b === 0 ? Error('Not exists division by 0') : a / b

module.exports = { sum, subtraction, multiplication, division }
