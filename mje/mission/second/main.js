document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".item");
  const textField = document.querySelector(".text-field");
  const acBtn = document.querySelector(".ac-btn");
  const resultBtn = document.querySelector(".result-btn");

  let isFirstInput = true;
  const regex = /([-]?\d+(\.\d+)?)\s*([-+x/%])\s*([-]?\d+(\.\d+)?)/;

  items.forEach((item) => {
    item.addEventListener("click", function () {
      const value = item.textContent;

      console.log(value);
      const updatedText = textField.textContent.replace(/^0+/, "");
      const matches = updatedText.match(regex);
      if (matches) {
        textField.textContent = updatedText + value;
      }

      if (isFirstInput && isNaN(value)) {
        alert("연산자를 선택하기 이전에 숫자를 먼저 입력해주세요.");
        return;
      }

      isFirstInput = false;
      if (value !== "=") {
        textField.textContent = updatedText + value;
      }
      console.log(textField.textContent);
      console.log(typeof textField.textContent);
      console.log(textField.textContent.split(""));
    });
  });

  // AC버튼 클릭 시 textfield 0으로 초기화
  acBtn.addEventListener("click", function () {
    textField.textContent = "0";
    isFirstInput = true; // 초기화된 후 다시 첫 번째 입력으로 설정하기
  });

  //= 버튼 클릭 시 사칙연산
  resultBtn.addEventListener("click", function () {
    const expression = textField.textContent;
    // const regex = /([-]?\d+(\.\d+)?)\s*([-+x/%])\s*([-]?\d+(\.\d+)?)/;

    // 정규식을 사용하여 숫자와 연산자를 추출합니다.
    const matches = expression.match(regex);
    console.log(matches);

    if (matches) {
      const num1 = parseFloat(matches[1]);
      const operator = matches[3];
      const num2 = parseFloat(matches[4]);

      let result;

      // 연산 수행
      switch (operator) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "x":
          result = num1 * num2;
          break;
        case "/":
          if (num2 !== 0) {
            result = num1 / num2;
          } else {
            alert("0으로 나눌 수 없습니다.");
            return;
          }
          break;
        case "%":
          result = num1 * 0.01;
          break;
        default:
          alert("잘못된 연산자입니다.");
          return;
      }

      // 결과를 textField에 표시합니다.
      textField.textContent = result.toString();
    } else {
      alert("올바른 수식을 입력하세요.");
      textField.textContent = expression;
    }
  });
});
