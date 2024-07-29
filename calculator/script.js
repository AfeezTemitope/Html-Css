const buttons = document.querySelectorAll('button')
const display = document.querySelector('.display')
let firstOperand = null
let operator = null

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const buttonText = event.target.innerText

    if (!isNaN(parseFloat(buttonText))) {
      display.textContent += buttonText
    } else if (buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/') {
      firstOperand = parseFloat(display.textContent)
      display.textContent = ''
      operator = buttonText;
    } else if (buttonText === '=') {
      const secondOperand = parseFloat(display.textContent);
      let result;
      switch (operator) {
        case '+':
          result = firstOperand + secondOperand
          break;
        case '-':
          result = firstOperand - secondOperand
          break;
        case '*':
          result = firstOperand * secondOperand
          break;
        case '/':
          result = firstOperand / secondOperand
          break;
        default:
          result = 'Error'
      }
      display.textContent = result
      firstOperand = result
      operator = null
    } else if (buttonText === 'c') {
      display.textContent = ''
      firstOperand = null
      operator = null
    }
    display.style.color = 'white'
  })
})
