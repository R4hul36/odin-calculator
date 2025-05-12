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

const percentage = function (firstNum) {
  return firstNum / 100
}

const operate = function (firstNum, operator, secondNum) {
  firstNum = Number(firstNum)
  secondNum = Number(secondNum)
  let result
  if (operator === '+') {
    result = add(firstNum, secondNum)
  } else if (operator === '-') {
    result = subtract(firstNum, secondNum)
  } else if (operator === 'x') {
    result = multiply(firstNum, secondNum)
  } else if (operator === '/') {
    result = divide(firstNum, secondNum)
  } else {
    result = percentage(firstNum)
  }
  return result
}

console.log(operate(2, 'x', 5))

let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
let symbols = ['/', 'x', '-', '+', '%']
let firstNum = ''
let operator = ''
let secondNum = ''
const buttons = document.querySelectorAll('.btn').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const btnText = btn.textContent
    let result = operate(firstNum, operator, secondNum)

    if (btnText === 'RESET') {
      firstNum = ''
      operator = ''
      secondNum = ''
    }

    if (btnText === 'DE') {
      deleteDisplayValue()
      return
    }

    if (
      (firstNum !== '' &&
        secondNum !== '' &&
        operator !== '' &&
        symbols.includes(btnText)) ||
      btnText === '='
    ) {
      displayContent(result)
      firstNum = String(result)
      secondNum = ''
      operator = btnText === '=' ? '' : btnText
    } else if (numbers.includes(btnText) && !operator) {
      if (!checkForDuplicateDecimals(firstNum, btnText)) {
        firstNum += btnText
      }
    } else if (symbols.includes(btnText) && firstNum !== '') {
      operator = btnText
    } else if (firstNum !== '' && operator !== '') {
      if (!checkForDuplicateDecimals(secondNum, btnText)) {
        secondNum += btnText
      }
    }
    if (btnText !== 'DE') {
      displayContent(`${firstNum} ${operator} ${secondNum}`)
    }

    console.log(firstNum, operator, secondNum)
  })
})

const checkForDuplicateDecimals = function (num, btnText) {
  return num.includes('.') && btnText === '.'
}

const deleteDisplayValue = function () {
  if (secondNum !== '') {
    secondNum = secondNum.slice(0, -1)
  } else if (operator !== '') {
    operator = ''
  } else if (firstNum !== '') {
    firstNum = firstNum.slice(0, -1)
    console.log(firstNum)
  }

  displayContent(`${firstNum} ${operator} ${secondNum}`)
}

const displayContent = function (num) {
  const displayContainer = document.querySelector('#display')
  displayContainer.textContent = num
}
