function Calculator() {
  this.monitor = document.getElementById("monitor");
}

Calculator.prototype.addMonitor = (props) => {
  this.monitor.value += props;
};

Calculator.prototype.addOperator = (props) => {
  const numberList = this.monitor.value
    .split(" ")
    .filter((element) => element !== "");
  const lastElement = numberList.at(-1);
  if (lastElement.split("").at(-1) === "." || /[/*+-]/.test(lastElement)) {
    return;
  }
  const addLine = " " + props + " ";
  this.addMonitor(addLine);
};

Calculator.prototype.addDot = () => {
  const numberList = this.monitor.value
    .split(" ")
    .filter((element) => element !== "");
  const lastElement = numberList.at(-1);
  if (lastElement.includes(".") || /[/*+-]/.test(lastElement)) {
    return;
  }
  this.addMonitor(".");
};

Calculator.prototype.clearResult = () => {
  this.monitor.value = "";
};

Calculator.prototype.showResult = () => {
  let result = eval(this.monitor.value);
  this.monitor.value = result;
};

Calculator.prototype.handleKeyDown = (event) => {
  const key = event.key;
  if (/[0-9]/.test(key)) {
    this.addMonitor(key);
  } else if (/[/*+-]/.test(key)) {
    this.addOperator(key);
  } else if (key === ".") {
    this.addDot(key);
  } else if (key === "Enter") {
    this.showResult();
  } else if (key === "Escape" || key === "c") {
    this.clearResult();
  }
};

Calculator.prototype.init = () => {
  document.addEventListener("keydown", this.handleKeyDown);
};

const calculator = new Calculator();
calculator.init();
