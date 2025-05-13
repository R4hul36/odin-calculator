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
  } else if (operator === '%') {
    result = percentage(firstNum)
  } else {
    return firstNum
  }
  return result
}

let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
let symbols = ['/', 'x', '-', '+', '%']
let firstNum = ''
let operator = ''
let secondNum = ''
let equalClicked = ''
const buttons = document.querySelectorAll('.btn').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const btnText = btn.textContent

    // clears the display
    if (btnText === 'AC') {
      firstNum = ''
      operator = ''
      secondNum = ''
    }

    // removes single number or operator on click
    if (btnText === 'DE') {
      deleteDisplayValue(equalClicked)
      return
    }

    //checks if conditions are met to show the result and sets the current result to a variable in order to use if user wants to continue the calculation on the result
    if (btnText === '=') {
      if (firstNum === '' && operator === '' && secondNum === '') {
        return
      }
      let result = operate(firstNum, operator, secondNum)
      equalClicked = String(result)
      displayContent(String(result))
      firstNum = ''
      operator = ''
      secondNum = ''
      return
    }

    // After a calculation if user clicks a number then a new calculation is started
    if (equalClicked !== '' && numbers.includes(btnText)) {
      // This sets the first number to be the number user clicked
      firstNum = btnText === '.' ? '0.' : btnText
      operator = ''
      secondNum = ''
      equalClicked = ''
      displayContent(firstNum)
      return
    }

    //This condition is if user wants to continue the calculation with the previous result.
    if (equalClicked !== '' && symbols.includes(btnText)) {
      firstNum = equalClicked
      operator = btnText
      equalClicked = ''
      displayContent(`${firstNum} ${operator}`)
      return
    }

    if (
      (firstNum !== '' &&
        secondNum !== '' &&
        operator !== '' &&
        symbols.includes(btnText)) ||
      btnText === '='
    ) {
      result = operate(firstNum, operator, secondNum)
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
    console.log(`first: ${firstNum} ${operator} ${secondNum}`)
  })
})

// allows only one decimal per number
const checkForDuplicateDecimals = function (num, btnText) {
  return num.includes('.') && btnText === '.'
}

// removes single item from the display
const deleteDisplayValue = function () {
  if (secondNum !== '') {
    secondNum = secondNum.slice(0, -1)
  } else if (operator !== '') {
    operator = ''
  } else if (firstNum !== '') {
    firstNum = firstNum.slice(0, -1)
    console.log(firstNum)
  } else if (equalClicked !== '') {
    firstNum = equalClicked.slice(0, -1)
    equalClicked = ''
  }

  displayContent(`${firstNum} ${operator} ${secondNum}`)
}

const displayContent = function (num) {
  const displayContainer = document.querySelector('#display')
  displayContainer.textContent = num
}
