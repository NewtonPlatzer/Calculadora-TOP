// Operation functions
function add(n1, n2) {
  return n1 + n2;
}
function substract(n1, n2) {
  return n1 - n2;
}
function multiply(n1, n2) {
  return n1 * n2;
}
function divide(n1, n2) {
  return n1 / n2;
}
function operate(operator, number1, number2) {
  let result;
  switch (operator) {
    case "+":
      result = add(number1, number2);
      break;
    case "-":
      result = substract(number1, number2);
      break;
    case "*":
      result = multiply(number1, number2);
      break;
    case "/":
      result = divide(number1, number2);
      break;
  }
  return result;
}

// Numbers and Operators
const numbers = document.querySelectorAll("#number");
const operators = document.querySelectorAll(".btn-operator");
const resultText = document.querySelector("#result");
const btnClear = document.querySelector("#btnClear");
const btnEqual = document.querySelector("#btnEqual");
let displayValues = [];
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    displayValues.push(number.textContent);
    resultText.textContent = displayValues.join("");
  });
});
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    displayValues.push(operator.textContent);
    resultText.textContent = displayValues.join("");
  });
});

btnEqual.addEventListener("click", () => {
  for (let i = 0; i < displayValues.length; i++) {
    if (
      displayValues[i] == "+" ||
      displayValues[i] == "-" ||
      displayValues[i] == "*" ||
      displayValues[i] == "/"
    ) {
      let number1 = displayValues.slice(0, i).join("");
      let number2 = displayValues.slice(i + 1, undefined).join("");
      let operator = displayValues[i];
      let result = operate(operator, parseInt(number1), parseInt(number2));
      resultText.textContent = result;
      displayValues = [];
    }
  }
});

btnClear.addEventListener("click", () => {
  displayValues = [];
  resultText.textContent = "";
});
