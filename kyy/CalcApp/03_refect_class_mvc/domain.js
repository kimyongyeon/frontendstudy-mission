// operations.js
export const operations = {
  "+": {
    operate: (stack) => {
      let b = stack.pop();
      let a = stack.pop();
      stack.push(a + b);
    },
  },
  "-": {
    operate: (stack) => {
      let b = stack.pop();
      let a = stack.pop();
      stack.push(a - b);
    },
  },
  "*": {
    operate: (stack) => {
      let b = stack.pop();
      let a = stack.pop();
      stack.push(a * b);
    },
  },
  "/": {
    operate: (stack) => {
      let b = stack.pop();
      if (b === 0) throw new Error("Cannot divide by zero");
      let a = stack.pop();
      stack.push(a / b);
    },
  },
  "^": {
    operate: (stack) => {
      let b = stack.pop();
      let a = stack.pop();
      stack.push(Math.pow(a, b));
    },
  },
  "√": {
    operate: (stack) => {
      let a = stack.pop();
      stack.push(Math.sqrt(a));
    },
  },
};
