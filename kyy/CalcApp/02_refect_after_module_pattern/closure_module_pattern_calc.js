// 주제
// 1. ES3 -> ES6로 변경
// 2. 클로저 모듈 패턴을 이해하자.
const CalculatorModule = (function() {
  // Private variables and functions
  const operations = {
      // ... (기존 연산자들)
  };

  function tokenize(expression) {
      // ... (기존 tokenize 함수 내용)
  }

  function infixToPostfix(infixTokens) {
      // ... (기존 infixToPostfix 함수 내용)
  }

  function evaluatePostfix(postfixTokens) {
      // ... (기존 evaluatePostfix 함수 내용)
  }

  // Public API
  return {
      init: function(inputSelector, buttonSelector) {
          const inputElement = document.querySelector(inputSelector);
          const buttonElement = document.querySelector(buttonSelector);

          function calculateExpression() {
              try {
                  const infixExpression = tokenize(inputElement.value);
                  const postfixExpression = infixToPostfix(infixExpression);
                  const result = evaluatePostfix(postfixExpression);
                  inputElement.value = result;
              } catch (error) {
                  inputElement.value = `Error: ${error.message}`;
              }
          }

          buttonElement.addEventListener("click", calculateExpression);
          inputElement.addEventListener("keydown", (event) => {
              if (event.key === "Enter" || event.keyCode === 13) {
                  calculateExpression();
              } else if (event.key === "Escape" || event.keyCode === 27) {
                  inputElement.value = ""; // 입력 필드 초기화
              }
          });
      }
  };
})();

// 사용 예:
CalculatorModule.init("#inputField", "#calculateButton");
