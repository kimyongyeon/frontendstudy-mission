let operatorBtn = document.querySelectorAll(".operator");

// 이벤트위임~~~~ => 캡슐화, 버블링~~~

for (let x of operatorBtn) {
  x.addEventListener("click", function () {
    operator.innerText = x.innerText;
  });
}

calculator.addEventListener("click", function () {
  if (!/^[0-9]+$/.test(num1.value + num2.value)) {
    result.innerText = "숫자가 제대로 입력되지 않았습니다.";
    return;
  }
  switch (operator.innerText) {
    case "+":
      result.innerText = 1 * num1.value + 1 * num2.value;
      break;
    case "-":
      result.innerText = num1.value - num2.value;
      break;
    case "*":
      result.innerText = num1.value * num2.value;
      break;
    case "/":
      result.innerText = num1.value / num2.value;
      break;
  }
});
