// document.addEventListener('DOMContentLoaded', function () {
//     const keys = document.querySelector('.calculatorkeys');
//     const display = document.querySelector('#user-input');
//     let currentInput = '0';
//     let operator = null;
//     let previousInput = null;

//     keys.addEventListener('click', function (event) {
//         const target = event.target;
//         const value = target.textContent;

//         if (target.classList.contains('numbers')) {
//             handleNumber(value);
//         } else if (target.classList.contains('operations')) {
//             handleOperator(value);
//         }

//         updateDisplay();
//     });

//     function handleNumber(value) {
//         if (currentInput === '0') {
//             currentInput = value;
//         } else {
//             currentInput += value;
//         }
//     }

//     function handleOperator(value) {
//         switch (value) {
//             case 'AC':
//                 currentInput = '0';
//                 operator = null;
//                 previousInput = null;
//                 break;
//             case 'DEL':
//                 currentInput = currentInput.slice(0, -1) || '0';
//                 break;
//             case '=':
//                 if (operator && previousInput !== null) {
//                     currentInput = calculate(previousInput, currentInput, operator);
//                     operator = null;
//                     previousInput = null;
//                 }
//                 break;
//             default:
//                 if (operator && previousInput !== null) {
//                     currentInput = calculate(previousInput, currentInput, operator);
//                 }
//                 operator = value;
//                 previousInput = currentInput;
//                 currentInput = '0';
//                 break;
//         }
//     }

//     function calculate(a, b, operator) {
//         a = parseFloat(a);
//         b = parseFloat(b);
//         switch (operator) {
//             case '+':
//                 return (a + b).toString();
//             case '-':
//                 return (a - b).toString();
//             case '*':
//                 return (a * b).toString();
//             case '/':
//                 return (a / b).toString();
//             case '%':
//                 return (a % b).toString();
//             default:
//                 return b;
//         }
//     }

//     function updateDisplay() {
//         display.textContent = currentInput;
//     }
// });

document.addEventListener('DOMContentLoaded', function () {
    const keys = document.querySelector('.calculatorkeys');
    const display = document.querySelector('#user-input');
    let currentInput = '0';
    let operator = null;
    let previousInput = null;
    let operatorJustPressed = false;

    keys.addEventListener('click', function (event) {
        const target = event.target;
        const value = target.textContent;

        if (target.classList.contains('numbers')) {
            handleNumber(value);
        } else if (target.classList.contains('operations')) {
            handleOperator(value);
        }

        updateDisplay();
    });

    function handleNumber(value) {
        if (operatorJustPressed) {
            currentInput = value;
            operatorJustPressed = false;
        } else {
            if (currentInput === '0') {
                currentInput = value;
            } else {
                currentInput += value;
            }
        }
    }

    function handleOperator(value) {
        switch (value) {
            case 'AC':
                currentInput = '0';
                operator = null;
                previousInput = null;
                break;
            case 'DEL':
                currentInput = currentInput.slice(0, -1) || '0';
                break;
            case '=':
                if (operator && previousInput !== null) {
                    currentInput = calculate(previousInput, currentInput, operator);
                    operator = null;
                    previousInput = null;
                }
                break;
            default:
                if (operator && previousInput !== null) {
                    currentInput = calculate(previousInput, currentInput, operator);
                }
                operator = value;
                previousInput = currentInput;
                currentInput = '0';
                operatorJustPressed = true;
                break;
        }
    }

    function calculate(a, b, operator) {
        a = parseFloat(a);
        b = parseFloat(b);
        switch (operator) {
            case '+':
                return (a + b).toString();
            case '-':
                return (a - b).toString();
            case '*':
                return (a * b).toString();
            case '/':
                return (a / b).toString();
            case '%':
                return (a % b).toString();
            default:
                return b;
        }
    }

    function updateDisplay() {
        if (operatorJustPressed) {
            display.textContent = previousInput;
        } else {
            display.textContent = currentInput;
        }
    }
});
