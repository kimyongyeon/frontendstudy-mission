document.addEventListener("DOMContentLoaded", function () {
  const textField = document.querySelector(".text-field");
  const buttons = document.querySelectorAll(".item");
  const resultButton = document.querySelector(".result-btn");
  let currentInput = "";

  // 숫자와 연산자 버튼 클릭 시 텍스트 필드에 추가
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      currentInput += button.textContent;
      textField.textContent = currentInput;
    });
  });

  // AC(All Clear) 버튼 클릭 시 입력 초기화
  document.querySelector(".ac-btn").addEventListener("click", () => {
    currentInput = "";
    textField.textContent = "0";
  });

  // = 버튼 클릭 시 계산 결과 표시
  resultButton.addEventListener("click", () => {
    try {
      const result = eval(currentInput); // 입력된 수식을 계산
      textField.textContent = result;
      currentInput = result.toString();
    } catch (error) {
      textField.textContent = "오류";
      currentInput = "";
    }
  });
});
