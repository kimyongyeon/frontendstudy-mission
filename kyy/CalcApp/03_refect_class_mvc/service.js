import { operations } from './domain.js';
import { render } from './view.js';

export function calculateExpression(inputElement) {
  try {
    const infixExpression = tokenize(inputElement.value);
    const postfixExpression = infixToPostfix(infixExpression);
    const result = evaluatePostfix(postfixExpression);
    render(inputElement, result);
  } catch (error) {
    render(inputElement, `Error: ${error.message}`);
  }
}

export function tokenize(expression) {
  expression = expression.replace(/π/g, Math.PI.toString());
  const operators = Object.keys(operations)
    .map((op) => {
      return op.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // 정규 표현식에 사용되는 특수 문자를 escape
    })
    .join("|");
  const regex = new RegExp(`(${operators}|\\d+\\.?\\d*)`, "g"); // 숫자와 연산자만을 허용하는 정규 표현식
  let tokens = expression
    .match(regex)
    .map((t) => t.trim())
    .filter(Boolean);

  // 마지막 토큰이 숫자가 아닌 연산자라면 제거
  if (tokens.length && operations[tokens[tokens.length - 1]]) {
    tokens.pop();
  }

  return tokens;
}

export function infixToPostfix(infixTokens) {
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
}

export function evaluatePostfix(postfixTokens) {
  let stack = [];
  postfixTokens.forEach((token) => {
    if (!isNaN(token)) {
      stack.push(parseFloat(token));
    } else if (operations[token]) {
      operations[token].operate(stack);
    }
  });
  return stack[0];
}
