let operator = "";
let total = 0;
let operandOne = "";
let operandTwo = "";
let input = document.querySelector("input");
// display numbers in input field on clicking numbers ui
// clear display
document.getElementById("clear").addEventListener("click", () => {
  input.value = "";
  operator = "";
  operandOne = operandTwo = 0;
});

document.getElementById("numbers").addEventListener("click", (event) => {
  let target = event.target;
  switch (target.className) {
    case "number 0":
      input.value += 0;
      break;
    case "number 1":
      input.value += 1;
      break;
    case "number 2":
      input.value += 2;
      break;
    case "number 3":
      input.value += 3;
      break;
    case "number 4":
      input.value += 4;
      break;
    case "number 5":
      input.value += 5;
      break;
    case "number 6":
      input.value += 6;
      break;
    case "number 7":
      input.value += 7;
      break;
    case "number 8":
      input.value += 8;
      break;
    case "number 9":
      input.value += 9;
      break;
  }
});
// dispay operators in input fields on clicking operators ui
document.getElementById("operators").addEventListener("click", (event) => {
  let target = event.target;
  if (operandOne != "" || operandOne == null) {
    operandTwo = parseFloat(document.querySelector("input").value);
    // console.log(operandTwo);
  } else {
    operandOne = parseFloat(document.querySelector("input").value);
  }
  if (!operator) {
    switch (target.className) {
      case "operator plus":
        input.value += "+";
        operator = "+";
        break;
      case "operator minus":
        input.value += "-";
        operator = "-";
        break;
      case "operator multiply":
        input.value += "x";
        operator = "*";
        break;
      case "operator divide":
        input.value += "%";
        operator = "/";
        break;
    }
  }
});
function operate() {
  switch (operator) {
    case "+":
      total = operandOne + operandTwo;
      break;
    case "-":
      total = operandOne - operandTwo;
      break;
    case "*":
      total = operandOne * operandTwo;
      break;
    case "/":
      total = operandOne / operandTwo;
      break;
  }
  return total;
}
document.getElementById("equals").addEventListener("click", () => {
  document.querySelector("input").value = operate();
  console.log(operandOne);
  console.log(operandTwo);
});
