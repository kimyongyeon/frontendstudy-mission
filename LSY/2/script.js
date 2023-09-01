const monitor = document.getElementById("monitor");

const addMonitor = (props) => {
  monitor.value += props;
  console.log(monitor.value);
};
const clearResult = () => {
  monitor.value = "";
};
const showResult = () => {
  let result = eval(monitor.value);
  monitor.value = result ?? "계산오류";
};
