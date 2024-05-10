let displayValue = '0';
let currentNumber = '';
let operator = '';
let result = '';

function updateDisplay() {
  document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
  displayValue = '0';
  currentNumber = '';
  operator = '';
  result = '';
  updateDisplay();
}

function appendToDisplay(value) {
  if (displayValue === '0' && value !== '.') {
    displayValue = '';
  }
  displayValue += value;
  currentNumber += value;
  updateDisplay();
}

function appendOperator(op) {
  if (operator !== '') {
    calculate();
  }
  operator = op;
  displayValue += op;
  currentNumber = '';
  updateDisplay();
}

function calculate() {
  const num1 = parseFloat(result === '' ? currentNumber : result);
  const num2 = parseFloat(currentNumber);
  switch (operator) {
    case '+':
      result = (num1 + num2).toString();
      break;
    case '-':
      result = (num1 - num2).toString();
      break;
    case '*':
      result = (num1 * num2).toString();
      break;
    case '/':
      result = (num1 / num2).toString();
      break;
  }
  displayValue = result;
  currentNumber = '';
  operator = '';
  updateDisplay();
}
