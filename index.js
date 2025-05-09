console.log('hello world!')
  

const add = function (firstNum, secondNum) {
    return firstNum + secondNum;
}

const subtract = function (firstNum,secondNum) {
    return firstNum - secondNum;
}

const multiply = function (firstNum,secondNum) {
    return firstNum * secondNum;
}

const divide = function (firstNum,secondNum) {
    return firstNum / secondNum;
}

const operate = function (firstNum, operator, secondNum) {
    let result;
    if(operator === "+") {
        result = add(firstNum, secondNum);
    }else if (operator === "-") {
        result = subtract(firstNum, secondNum);
    }else if (operator === "*") {
        result = multiply(firstNum, secondNum);
    }else {
        result = divide(firstNum, secondNum);
    }
    return result;
}

console.log(operate(2, "*", 5));
