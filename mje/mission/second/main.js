

document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".item");
  const textField = document.querySelector(".text-field");
  const acButton = document.querySelector(".ac-button");

  let isFirstInput = true;

  items.forEach((item) => {
    item.addEventListener("click", function () {
      const value = item.textContent;

      console.log(value);

      const updatedText = textField.textContent.replace(/^0+/, "");

      if (isFirstInput && isNaN(value)) {
        alert("연산자를 선택하기 이전에 숫자를 먼저 입력해주세요.");
        return;
      }

      isFirstInput = false;

      textField.textContent = updatedText + value;
      console.log(textField.textContent);
    });

    // AC버튼 클릭 시 textfield 0으로 초기화
    acButton.addEventListener("click", function () {
      textField.textContent = "0";
      isFirstInput = true; // 초기화된 후 다시 첫 번째 입력으로 설정하기
    });
  });
});
