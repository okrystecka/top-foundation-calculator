let firstNumber = '';
let secondNumber = '';
let operator = '';
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
            displayValue = operate(+firstNumber, operator, +secondNumber);
            setDisplayValue();
            clear();
            break;
        case 'CLR':
            clear();
            displayValue = 0;
            setDisplayValue();
            break;
        case '+':
        case '-':
        case '/':
        case 'x':
            operator = value;
            break;
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
            if(operator) {
                secondNumber += value;
                displayValue = secondNumber;
            } else {
                firstNumber += value;
                displayValue = firstNumber;
            }
            setDisplayValue();
            break;
        default:
            break;
    }
}
 
function clear() {
    firstNumber = '';
    secondNumber = '';
    operator = '';
}

function setDisplayValue() {
    const display = document.querySelector('#display');
    display.textContent = displayValue;
}

const keypad = document.querySelector('.keypad');
keypad.addEventListener('click', handleClick);

setDisplayValue();