const CalculatorModule = (function () {
  // 프라이빗 변수 및 함수 정의
  let textField, buttons, negativeBtn, percentBtn, resultBtn;
  let currentInput = "";
  let isFirstInput = true;

  // 연산자인지 확인하는 함수
  function isOperator(value) {
    return ["+", "-", "*", "/"].includes(value);
  }

  // 텍스트 필드에 연산자와 숫자 이외의 것이 들어갔을 때 에러메세지 출력
  function handleTextFieldKeydown(event) {
    const textFieldRegex = /^[\d-+x/%.\b]+$/;

    if (!event.key.match(textFieldRegex)) {
      event.preventDefault();
      alert("숫자와 연산자만 입력가능합니다.");
      return;
    }

    currentInput = textField.value + event.key;
    isFirstInput = false;
  }

  // 숫자와 연산자 버튼 클릭 시 텍스트 필드에 추가
  function handleButtonClick() {
    const btnValue = this.textContent;

    if (isFirstInput && isNaN(btnValue)) {
      alert("연산자를 선택하기 이전에 숫자를 먼저 입력해주세요.");
      return;
    }
    isFirstInput = false;

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
  }

  // +/- 버튼 클릭 시 음/양수 변환
  function handleNegativeClick() {
    currentInput *= -1;
    currentInput = String(currentInput);
    textField.value = currentInput;
  }

  // % 버튼 클릭 시 % 계산
  function handlePercentClick() {
    currentInput /= 100;
    currentInput = String(currentInput);
    textField.value = currentInput;
  }

  // AC(All Clear) 버튼 클릭 시 입력 초기화
  function handleAllClearClick() {
    currentInput = "";
    textField.value = "0";
    isFirstInput = true;
  }

  // = 버튼 클릭 시 계산 & 결과 표시
  function handleResultClick() {
    if (isNaN(currentInput.slice(-1))) {
      currentInput = currentInput.slice(0, -1);
    }
    const result = eval(currentInput);
    textField.value = result;
    currentInput = result.toString();
  }

  // Calculator 모듈 초기화 함수
  function initialize() {
    textField = document.querySelector(".text-field");
    buttons = document.querySelectorAll(".item");
    negativeBtn = document.querySelector(".negative");
    percentBtn = document.querySelector(".percent");
    resultBtn = document.querySelector(".result-btn");
    currentInput = "";
    isFirstInput = true;

    textField.value = "0";
    textField.focus();

    textField.addEventListener("keydown", handleTextFieldKeydown);
    buttons.forEach((button) =>
      button.addEventListener("click", handleButtonClick)
    );
    negativeBtn.addEventListener("click", handleNegativeClick);
    percentBtn.addEventListener("click", handlePercentClick);
    document
      .querySelector(".ac-btn")
      .addEventListener("click", handleAllClearClick);
    resultBtn.addEventListener("click", handleResultClick);
  }

  // Calculator 모듈 공개 API
  return {
    initialize: initialize,
  };
})();

// 페이지 로드 시 Calculator 모듈 초기화
document.addEventListener("DOMContentLoaded", function () {
  CalculatorModule.initialize();
});
