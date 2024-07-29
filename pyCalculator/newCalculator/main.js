document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button-row.operand, button-row.numbers, button-row.operator');
    const display = document.querySelector('.calculator-display');
    let firstOperand = null;
    let operator = null;

    const operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => (b !== 0 ? a / b : 'Error')
    }

    buttons.forEach((button) => {
        button.addEventListener('click', handleButtonClick);
    });

    function handleButtonClick(event) {
        const buttonText = event.target.innerText;

        if (!isNaN(parseFloat(buttonText))) {
            display.textContent += buttonText;
        } else if ('+-*/'.includes(buttonText)) {
            firstOperand = parseFloat(display.textContent);
            display.textContent = '';
            operator = buttonText;
        } else if (buttonText === '=') {
            const secondOperand = parseFloat(display.textContent);
            const operationFunc = operations[operator];
            if (operationFunc) {
                const result = operationFunc(firstOperand, secondOperand);
                display.textContent = result;
                firstOperand = result;
                operator = null;
            } else {
                display.textContent = 'Error';
            }
        } else if (buttonText === 'AC') {
            clearDisplay();
        } else if (buttonText === 'DEL') {
            display.textContent = display.textContent.slice(0, -1);
        } else if (buttonText === '%') {
            const currentValue = parseFloat(display.textContent);
            display.textContent = (currentValue / 100).toString();
        }

        display.style.color = 'blue';
    }

    function clearDisplay() {
        display.textContent = '';
        firstOperand = null;
        operator = null;
    }

})