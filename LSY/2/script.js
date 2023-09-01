const monitor = document.getElementById("monitor");

const addMonitor = (props) => {
  monitor.value += props;
};

const addOperator = (props) => {
  const numberList = monitor.value
    .split(" ")
    .filter((element) => element !== "");
  const lastElement = numberList.at(-1);
  if (lastElement.split("").at(-1) === "." || /[/*+-]/.test(lastElement)) {
    return;
  }
  const addLine = " " + props + " ";
  addMonitor(addLine);
};

const addDot = () => {
  const numberList = monitor.value
    .split(" ")
    .filter((element) => element !== "");
  const lastElement = numberList.at(-1);
  if (lastElement.includes(".") || /[/*+-]/.test(lastElement)) {
    return;
  }
  addMonitor(".");
};

const clearResult = () => {
  monitor.value = "";
};

const showResult = () => {
  let result = eval(monitor.value);
  monitor.value = result;
};

//키보드 입력
document.addEventListener("keydown", function (event) {
  const key = event.key;
  if (/[0-9]/.test(key)) {
    addMonitor(key);
  } else if (/[/*+-]/.test(key)) {
    addOperator(key);
  } else if (key === ".") {
    addDot(key);
  } else if (key === "Enter") {
    showResult();
  } else if (key === "Escape" || key === "c") {
    clearResult();
  }
});
