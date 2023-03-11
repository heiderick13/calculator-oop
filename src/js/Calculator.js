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

  updateScreen() {
    this.currentOpText.innerText += this.currentOp;
  }
}
