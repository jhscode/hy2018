// console.log(process.argv)
const num1 = parseInt(process.argv[2])
const operator = process.argv[3]
const num2 = parseInt(process.argv[4])

function math(num1, num2, operator) {
  switch(operator) {
    case "+": {
      return num1 + num2
    }
    case "-": {
      return num1 - num2
    }
    case "*": {
      return num1 * num2
    }
    case "/": {
      return num1 / num2
    }
    default: {
      throw new Error('Nope')
    }
  }
}

result = math(num1, num2, operator)

console.log(result)