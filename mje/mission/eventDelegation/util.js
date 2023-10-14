const util = {
  ceateAndSetElement: function (tagName, className, innerHTML) {
    const element = document.createElement(tagName);
    if (className) {
      element.className = className;
    }
    if (innerHTML) {
      element.innerHTML = innerHTML;
    }
    return element;
  },
};
util.ceateAndSetElement("div", "box", "hello");

const util2 = (function () {
  function createAndSetElement(tagName, className, innerHTML) {
    const element = document.createElement(tagName);
    if (className) {
      element.className = className;
    }
    if (innerHTML) {
      element.innerHTML = innerHTML;
    }
    return element;
  }
  return {
    createAndSetElement: createAndSetElement,
  };
})();
util2.createAndSetElement("div", "box", "hello");

function test() {}

function Test() {}

Test.prototype.createAndSetElement = function (
  tagName,
  className,
  innerHTML
) {};

class ParentUtil {
  constructor() {}
  createAndSetElement(tagName, className, innerHTML) {
    const element = document.createElement(tagName);
    if (className) {
      element.className = className;
    }
    if (innerHTML) {
      element.innerHTML = innerHTML;
    }
    return element;
  }
}

class ChildUtil extends ParentUtil {}

const util3 = new Util(); // file.js
const util4 = new Util(); // file2.js
util3.createAndSetElement("div", "box", "hello");

export default util;
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
