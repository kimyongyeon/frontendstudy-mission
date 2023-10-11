// DOM 요소 생성 및 속성 설정 함수
export function createAndSetElement(tagName, className, innerHTML) {
  const element = document.createElement(tagName);
  if (className) {
    element.className = className;
  }
  if (innerHTML) {
    element.innerHTML = innerHTML;
  }
  return element;
}

// 클릭 이벤트 핸들러 함수
export function addClickEventHandler(selector, callback) {
  const element = document.querySelector(selector);
  if (element) {
    element.addEventListener("click", callback);
  }
}

// 이벤트 핸들러 함수
export function addEventHandler(selector, event, callback) {
  const element = document.querySelector(selector);
  if (element) {
    element.addEventListener(event, callback);
  }
}
