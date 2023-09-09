// 주제
// 1. 모듈화 되지 않은 코드 엿보기 

const operations = {
  "+": {
    precedence: 1,
    operate: (a, b) => a + b,
  },
  "-": {
    precedence: 1,
    operate: (a, b) => a - b,
  },
  "*": {
    precedence: 2,
    operate: (a, b) => a * b,
  },
  "/": {
    precedence: 2,
    operate: (a, b) => {
      if (b === 0) {
        throw new Error("Cannot divide by zero");
      }
      return a / b;
    },
  },
  "^": {
    precedence: 3, // 거듭제곱 연산자의 우선순위를 곱셈과 나눗셈보다 높게 설정
    operate: (a, b) => Math.pow(a, b),
  },
};

const infixToPostfix = (infixTokens) => {
  let output = [];
  let ops = [];

  infixTokens.forEach((token) => {
    if (!isNaN(token)) {
      output.push(token);
    } else if (operations[token]) {
      while (
        ops.length &&
        operations[ops[ops.length - 1]].precedence >=
          operations[token].precedence
      ) {
        output.push(ops.pop());
      }
      ops.push(token);
    }
  });

  while (ops.length) {
    output.push(ops.pop());
  }

  return output;
};

const evaluatePostfix = (postfixTokens) => {
  let stack = [];
  postfixTokens.forEach((token) => {
    if (!isNaN(token)) {
      stack.push(parseFloat(token));
    } else if (operations[token]) {
      let b = stack.pop();
      let a = stack.pop();
      stack.push(operations[token].operate(a, b));
    }
  });
  return stack[0];
};

const Calculator = {
  init: (inputSelector, buttonSelector) => {
    const inputElement = document.querySelector(inputSelector);
    const buttonElement = document.querySelector(buttonSelector);

    const calculateExpression = () => {
      const infixExpression = inputElement.value
        .split(/([\+\-\*\/])/)
        .map((t) => t.trim())
        .filter(Boolean);
      const postfixExpression = infixToPostfix(infixExpression);
      const result = evaluatePostfix(postfixExpression);
      Calculator.render(inputSelector, result);
    };

    buttonElement.addEventListener("click", calculateExpression);

    // 엔터 키 이벤트 추가
    inputElement.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.keyCode === 13) {
        calculateExpression();
      }
    });
  },

  render: (selector, value) => {
    const element = document.querySelector(selector);
    element.value = value;
  },
};
Calculator.init("#inputField", "#calculateButton");
