const buttonContainer = document.getElementById('button-container')
const header = document.querySelector('h1')
const clear = document.getElementById('clear')
const display = document.getElementById('display')
const results = document.getElementById('results')
const buttons = document.querySelectorAll('button')
const operatorButtons = document.getElementsByClassName('operator-buttons')
const equalSign = document.getElementById('equal-sign')
const decimal = document.getElementById('decimal')
const numbers = document.getElementsByClassName('numbers')
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
    if (array[el] == 'divide' && Number(b) == 0){
        return display.value = 'NICE TRY'
    }

    if (array[el] == 'add') {
        return display.value = operate(add, Number(a), Number(b))
    } else if (array[el] == 'subtract') {
        return display.value = operate(subtract, Number(a), Number(b))
    } else if (array[el] == 'multiply') {
        return display.value = operate(multiply, Number(a), Number(b))
    } else if (array[el] == 'divide') {
        return display.value = operate(divide, Number(a), Number(b))
    }
}

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', () => {
        numberList.push(numbers[i].textContent)
        firstNumber.push(numbers[i].textContent)
        display.value = firstNumber.join('')
        operatorCount = 0
        if (operatorCount == 0) {
            for (elem of operatorButtons) {
                elem.disabled = false
            }
        }
        console.log(operatorCount)
        console.log(firstNumber)
    })
}
/*
for (let i = 0; i < 10; i++){
    const button = document.createElement('button')
    button.classList.add('numbers')
    button.textContent = i
    numberList.push(button.textContent)
    buttonContainer.appendChild(button)

    button.addEventListener('click', () => {
        firstNumber.push(i)
        display.value = firstNumber.join('')
        operatorCount = 0
        if (operatorCount == 0) {
            for (elem of operatorButtons) {
                elem.disabled = false
            }
        }
        console.log(operatorCount)
    })
}
*/
let decimalCounter = 0
decimal.addEventListener('click', () => {
    if (decimalCounter == 0){
        firstNumber.push(decimal.textContent)
        display.value = firstNumber.join('')
    }
    console.log(decimalCounter)
    if (decimal.id == 'decimal') {
        decimalCounter++
    }
})

let operatorCount = 0


for (let i = 0; i < operatorButtons.length; i++){
        operatorButtons[i].addEventListener('click', () => {
            decimalCounter = 0
            operatorCount++
            if (operatorCount == 1) {
                for (elem of operatorButtons) {
                    elem.disabled = true
                }
            }


            firstNumber = []
            currentOperator.push(operatorButtons[i].id)
            equation.push(Number(display.value))
            if (equation.length > 1){
                equation.reduce((a, b) => {
                    equationByOperator(currentOperator, 0, a, b)
                })
                currentOperator.shift()
                equation = [Number(display.value)]
            }

            console.log(operatorCount)
            console.log(currentOperator)
            console.log(equation)
        })
}

equalSign.addEventListener('click', () => {
    operatorCount++
    if (operatorCount == 1) {
        for (elem of operatorButtons) {
            elem.disabled = true
        }
    }
    equation.push(Number(display.value))

    if (equation.length > 1){
        equation.reduce((a, b) => {
            equationByOperator(currentOperator, 0, a, b)
        })
        currentOperator.shift()
        equation = [Number(display.value)]
    }   
})

clear.addEventListener('click', () => {
    firstNumber = []
    lastValue = []
    currentOperator = []
    equation = []
    equalCounter = 0
    display.value = ''
    equalSign.disabled = false
    operatorCount = 0
    decimalCounter = 0
})



