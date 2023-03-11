export default class Calculator {
  constructor(previousOpText, currentOpText) {
    this.previousOpText = previousOpText;
    this.currentOpText = currentOpText;
    this.currentOp = "";
  }

  addDigit(digit) {
    if (digit === "." && this.currentOpText.innerText.includes(".")) {
      return;
    }
    this.currentOp = digit;
    this.updateScreen();
  }

  processOperation(operation) {
    if (this.currentOpText.innerText === "") {
      if (this.previousOpText.innerText !== "") {
        this.changeOperation(operation);
      }
      return;
    }
    let operationValue;
    let previous = +this.previousOpText.innerText.split(" ")[0];
    let current = +this.currentOpText.innerText;

    switch (operation) {
      case "+":
        operationValue = previous + current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "-":
        operationValue = previous - current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "/":
        operationValue = previous / current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "*":
        operationValue = previous * current;
        this.updateScreen(operationValue, operation, current, previous);
        break;

      default:
        return;
    }
  }

  updateScreen(
    operationValue = null,
    operation = null,
    current = null,
    previous = null
  ) {
    if (operationValue === null) {
      this.currentOpText.innerText += this.currentOp;
    } else {
      if (previous === 0) {
        operationValue = current;
      }

      this.previousOpText.innerText = `${operationValue} ${operation}`;
      this.currentOpText.innerText = "";
    }
  }

  changeOperation(operation) {
    const operations = ["+", "-", "/", "*"];

    if (!operations.includes(operation)) {
      return;
    }

    this.previousOpText.innerText =
      this.previousOpText.innerText.slice(0, -1) + operation;
  }
}
