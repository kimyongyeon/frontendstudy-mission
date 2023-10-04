document.addEventListener("DOMContentLoaded", function () {
  const textField = document.querySelector(".text-field");
  const buttons = document.querySelectorAll(".item");
  const negativeBtn = document.querySelector(".negative");
  const percentBtn = document.querySelector(".percent");
  const resultBtn = document.querySelector(".result-btn");

  let currentInput = "";
  let isFirstInput = true;
  textField.value = "0";
  textField.focus();

  //텍스트 필드에 연산자와 숫자 이외의 것이 들어갔을 때 에러메세지 출력
  //keydown event가 일어났을때, 정규식에 맞지 않다면 값을 넣어주지 않기
  textField.addEventListener("keydown", (event) => {
    const textFieldRegex = /^[\d-+x/%.\b]+$/;
    // /([-]?\d+(\.\d+)?)(?:\s*([-+x/%]|\\b)\s*([-]?\d+(\.\d+)?))?/;

    if (!event.key.match(textFieldRegex)) {
      event.preventDefault();
      alert("숫자와 연산자만 입력가능합니다.");
      return;
    }

    currentInput = textField.value + event.key;
    isFirstInput = false;
  });

  // 숫자와 연산자 버튼 클릭 시 텍스트 필드에 추가
  buttons.forEach((button) => {
    const btnValue = button.textContent;

    button.addEventListener("click", () => {
      if (isFirstInput && isNaN(btnValue)) {
        alert("연산자를 선택하기 이전에 숫자를 먼저 입력해주세요.");
        return;
      }
      isFirstInput = false;

      // 연속으로 연산자가 입력되지 않도록 처리
      if (
        btnValue !== "=" &&
        btnValue !== "+/-" &&
        btnValue !== "%" &&
        btnValue !== "."
      ) {
        if (
          isOperator(currentInput.charAt(currentInput.length - 1)) &&
          isOperator(btnValue)
        ) {
          // 이전 입력과 새 입력이 모두 연산자인 경우 이전 연산자를 대체
          currentInput = currentInput.slice(0, -1) + btnValue;
        } else {
          currentInput += btnValue;
        }
        textField.value = currentInput;
      } else if (btnValue === ".") {
        const addValue = isNaN(textField.value.slice(-1))
          ? `0${btnValue}`
          : btnValue;
        currentInput = currentInput + addValue;
      }
      textField.value = currentInput.replace(/(^0+)/, "");
      textField.focus();
    });
  });

  // 연산자인지 확인하는 함수
  function isOperator(value) {
    return ["+", "-", "*", "/"].includes(value);
  }
  // +/- 버튼 클릭 시 음/양수 변환
  negativeBtn.addEventListener("click", () => {
    currentInput *= -1;
    currentInput = String(currentInput);
    textField.value = currentInput;
  });

  // % 버튼 클릭 시 % 계산
  percentBtn.addEventListener("click", () => {
    currentInput /= 100;
    currentInput = String(currentInput);
    textField.value = currentInput;
  });

  // AC(All Clear) 버튼 클릭 시 입력 초기화
  document.querySelector(".ac-btn").addEventListener("click", () => {
    currentInput = "";
    textField.value = "0";
    isFirstInput = true;
  });

  // = 버튼 클릭 시 계산 & 결과 표시
  resultBtn.addEventListener("click", () => {
    // 마지막 입력값이 연산자라면, 그 연산자 없애주기.
    if (isNaN(currentInput.slice(-1))) {
      currentInput = currentInput.slice(0, -1);
    }
    const result = eval(currentInput); // 입력된 수식을 계산
    textField.value = result;
    currentInput = result.toString();
  });
});
