// 역할과 책임을 분리해 보자. 
// controller 에는 서비스와 뷰를 연결하는 역할만 담당하도록 하자.
// service 는 계산을 담당하고, view 는 화면에 표시하는 역할을 담당하도록 하자.
// domain 은 계산을 위한 데이터를 담당하도록 하자.
// view 는 화면에 표시하는 역할만 담당하도록 하자.

import { calculateExpression } from "./service.js";

class CalculatorController {
  constructor(inputSelector, buttonSelector) {
    this.inputElement = document.querySelector(inputSelector);
    this.buttonElement = document.querySelector(buttonSelector);
    this.bindEvents();
  }

  bindEvents() {
    this.buttonElement.addEventListener(
      "click",
      calculateExpression.bind(this, this.inputElement)
    );
    this.inputElement.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.keyCode === 13) {
        calculateExpression(this.inputElement);
      } else if (event.key === "Escape" || event.keyCode === 27) {
        this.inputElement.value = ""; // 입력 필드 초기화
      }
    });
  }
}

new CalculatorController("#inputField", "#calculateButton");
