let firstNumber
let operator
let secondNumber

const buttonContainer = document.getElementById('button-container')
const header = document.querySelector('h1')
const clear = document.getElementById('clear')
const display = document.getElementById('display')
const results = document.getElementById('results')
const buttons = document.querySelectorAll('button')
const operatorButtons = document.getElementsByClassName('operator-buttons')
const equalSign = document.getElementById('equal-sign')
let numberList = []
let first = 0
let second = 0
let currentOperator = ''

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
    return operator(a, b)
}

for (let i = 0; i < 10; i++){
    const button = document.createElement('button')
    button.textContent = i
    numberList.push(button.textContent)
    buttonContainer.appendChild(button)
    button.addEventListener('click', () => {
        display.value += i
    })
}

for (button of operatorButtons){
    button.addEventListener('click', () => {
        display.value = ''
    })
}

/*
for (button of buttons){
    button.addEventListener('click', () => {
        
    })
}
*/ 

clear.addEventListener('click', () => {
    display.value = ''
})


