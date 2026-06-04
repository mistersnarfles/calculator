const buttonContainer = document.getElementById('button-container')
const header = document.querySelector('h1')
const clear = document.getElementById('clear')
const display = document.getElementById('display')
const results = document.getElementById('results')
const buttons = document.querySelectorAll('button')
const operatorButtons = document.getElementsByClassName('operator-buttons')
const equalSign = document.getElementById('equal-sign')
const decimal = document.getElementById('decimal')
let numberList = []
let equation = []
let firstNumber = []
let secondNumber
let currentOperator = []
let calculation = []

function add(a, b){
    return a + b
}

function subtract(a , b){
    return a - b
}

function multiply(a, b){
    return a * b
}

function divide(a, b){
    return a / b
}

function operate(operator, a, b){
    if (operator(a, b) % 1 == 0){
        return operator(a, b)
    } else {
        return operator(a, b).toFixed(2) 
    }
}

function equationByOperator(array, el, a, b){
    if (currentOperator[0] == 'add') {
        display.value = operate(add, Number(a), Number(b))
    } else if (currentOperator[0] == 'subtract') {
        display.value = operate(subtract, Number(a), Number(b))
    } else if (currentOperator[0] == 'multiply') {
        display.value = operate(multiply, Number(a), Number(b))
    } else if (currentOperator[0] == 'divide') {
        display.value = operate(divide, Number(a), Number(b))
    }
}

for (let i = 0; i < 10; i++){
    const button = document.createElement('button')
    button.textContent = i
    numberList.push(button.textContent)
    buttonContainer.appendChild(button)
    button.addEventListener('click', () => {
        firstNumber.push(i)
        display.value = firstNumber.join('')
    })
}

let decimalCounter = 0
decimal.addEventListener('click', () => {
    if (decimalCounter == 0){
        firstNumber.push(decimal.textContent)
        display.value = firstNumber.join('')
    }
    decimalCounter++
})

let operatorCount = 0
for (let i = 0; i < operatorButtons.length; i++){
        operatorButtons[i].addEventListener('click', () => {
            firstNumber = []
            currentOperator.push(operatorButtons[i].id)
            decimalCounter = 0
            equation.push(Number(display.value))
            if (equation.length > 1){
                equation.reduce((a, b) => {
                    if (currentOperator[0] == 'add') {
                        display.value = operate(add, Number(a), Number(b))
                    } else if (currentOperator[0] == 'subtract') {
                        display.value = operate(subtract, Number(a), Number(b))
                    } else if (currentOperator[0] == 'multiply') {
                        display.value = operate(multiply, Number(a), Number(b))
                    } else if (currentOperator[0] == 'divide') {
                        display.value = operate(divide, Number(a), Number(b))
                    }
                })
                equalOperator = currentOperator.shift()
                currentOperator.shift()
                equation = [Number(display.value)]
            }

            operatorCount++
            console.log(currentOperator)
            console.log(equation)
        })
}

let equalOperator
let equalCounter = 0
let lastValue = []
equalSign.addEventListener('click', () => {
    if (equalCounter == 0){
        display.value = equation[0] + Number(display.value)
    }

    lastValue.push(Number(display.value))
    if (equalOperator == 'add') {
        display.value = operate(add, lastValue[0], equation[0])
    } else if (equalOperator == 'subtract') {
        display.value = operate(subtract, lastValue[0], equation[0])
    } else if (equalOperator == 'multiply') {
        display.value = operate(multiply, lastValue[0], equation[0])
    } else if (equalOperator == 'divide') {
        display.value = operate(divide, lastValue[0], equation[0])
    }
        equalCounter++

})

clear.addEventListener('click', () => {
    firstNumber = []
    lastValue = []
    currentOperator = []
    equation = []
    equalCounter = 0
    display.value = ''
})


