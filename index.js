console.log('hello world!')

const add = function (firstNum, secondNum) {
  return firstNum + secondNum
}

const subtract = function (firstNum, secondNum) {
  return firstNum - secondNum
}

const multiply = function (firstNum, secondNum) {
  return firstNum * secondNum
}

const divide = function (firstNum, secondNum) {
  return firstNum / secondNum
}

const operate = function (firstNum, operator, secondNum) {
  let result
  if (operator === '+') {
    result = add(firstNum, secondNum)
  } else if (operator === '-') {
    result = subtract(firstNum, secondNum)
  } else if (operator === 'x') {
    result = multiply(firstNum, secondNum)
  } else {
    result = divide(firstNum, secondNum)
  }
  return result
}

console.log(operate(2, '*', 5))

let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ',']
let symbols = ['/', 'x', '-', '+']
let firstNum = ''
let operator = ''
let secondNum = ''
const buttons = document.querySelectorAll('.btn').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    // console.log(typeof btn.textContent)
    if (
      firstNum &&
      secondNum &&
      operator &&
      symbols.includes(btn.textContent)
    ) {
      let result = operate(Number(firstNum), operator, Number(secondNum))
      console.log(firstNum, operator, secondNum)
      console.log(result)
    } else if (numbers.includes(btn.textContent) && !operator) {
      firstNum += btn.textContent
    } else if (symbols.includes(btn.textContent)) {
      operator = btn.textContent
    } else if (firstNum && operator) {
      secondNum += btn.textContent
    }
    // console.log(firstNum, operator, secondNum)
    displayContent(btn.textContent)
  })
})

const displayContent = function (num) {
  const displayContainer = document.querySelector('#display')
  displayContainer.textContent = num
}
