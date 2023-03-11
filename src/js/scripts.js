import Calculator from "./Calculator.js";

const calculator = document.querySelector("#calculator");
const previousOperation = document.querySelector("#previous-op");
const currentOperation = document.querySelector("#current-op");
const btns = document.querySelectorAll(
  '#buttons-container input[type="button"]'
);
const calc = new Calculator(previousOperation, currentOperation);

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let value = e.target.value;

    if (+value >= 0 || value == ".") {
      calc.addDigit(value);
    } else {
      calc.processOperation(value);
    }
  });
});

const clearConsole = () => {
  setTimeout(() => {
    console.clear();
  }, 2000);
};

clearConsole();
