import Calculator from "./Calculator.js";

const calculator = document.querySelector("#calculator");
const previousOperation = document.querySelector("#previous-op");
const currentOperation = document.querySelector("#current-op");
const btns = document.querySelectorAll(
  '#buttons-container input[type="button"]'
);

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let value = e.target.value;

    if (+value >= 0 || value == ".") {
      console.log(value);
    } else {
      console.log("Op: " + value);
    }
  });
});
