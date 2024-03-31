let firstNumber;
let secondNumber;
let operator;
let displayValue = 0;

function add(a, b) {
    return a + b;
}

function subtrack(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(first, operator, second) {
    switch (operator) {
        case '+':
            return add(first, second);
        case '-':
            return subtrack(first, second);
        case 'x':
            return multiply(first, second);
        case '/':
            return divide(first, second);
        default:
            break;
    }
}

function handleClick(e) {
    let value = e.target.textContent;
    console.log(value);
    switch (value) {
        case '=':
            console.log('Działanie: ', firstNumber, operator, secondNumber)
            console.log(operate(firstNumber, operator, secondNumber))
            displayValue = operate(firstNumber, operator, secondNumber);
            setDisplayValue();
            clear();
            break;
        case 'CLR':
            clear();
            displayValue = 0;
            break;
        case '+':
        case '-':
        case '/':
        case 'x':
            operator = value;
            break;
        default:
            if(operator) {
                secondNumber = Number(value);
                displayValue = secondNumber;
            } else {
                firstNumber = Number(value);
                displayValue = firstNumber;
            }
            setDisplayValue();
            break;
    }
}
 
function clear() {
    firstNumber = null;
    secondNumber = null;
    operator = null;
}

function setDisplayValue() {
    const display = document.querySelector('#display');
    display.textContent = displayValue;
}

const keypad = document.querySelector('.keypad');
keypad.addEventListener('click', handleClick);

setDisplayValue();