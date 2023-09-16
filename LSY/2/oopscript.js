var calc = new CalcProgram();

CalcProgram.prototype.init = function () {
  this.monitor = document.getElementById("monitor");
  document.addEventListener("keydown", function (event) {
    const key = event.key;
    EVENT_MAP(key)();
    if (/[0-9]/.test(key)) {
      addMonitor(key);
    } else if (/[/*+-]/.test(key)) {
      addOperator(key);
    } else if (key === ".") {
      addDot(key);
    } else if (key === "Enter") {
      showResult();
    } else if (isEscapeAndC()) {
      clearResult();
    }
  });
};

function CalcProgram() {
  let monitor;

  // this.init = function () {
  //   this.monitor = document.getElementById("monitor");
  //   this.eventListener();
  // };

  var EVENT_MAP = {
    "/[0-9]/.test(key)": () => {
      addMonitor(key);
    },
    "/[0-9]/.test(key)": () => {
      addMonitor(key);
    },
    "/[0-9]/.test(key)": () => {
      addMonitor(key);
    },
    "/[0-9]/.test(key)": () => {
      addMonitor(key);
    },
  };

  this.isEscapeAndC = function () {
    return key === "Escape" || key === "c";
  };

  // this.eventListener = function () {
  //   document.addEventListener("keydown", function (event) {
  //     const key = event.key;
  //     EVENT_MAP(key)();
  //     if (/[0-9]/.test(key)) {
  //       addMonitor(key);
  //     } else if (/[/*+-]/.test(key)) {
  //       addOperator(key);
  //     } else if (key === ".") {
  //       addDot(key);
  //     } else if (key === "Enter") {
  //       showResult();
  //     } else if (isEscapeAndC()) {
  //       clearResult();
  //     }
  //   });
  // };

  // this.render
  // this.draw

  this.render = function () {
    // view 영역...
  };

  this.controller = function () {
    // view와 모델 연결 처리 ....
    this.addOperator = function (props) {};
    this.addDot = function () {};
  };

  this.model = function () {
    // 비즈니스로직 처리 ...
  };

  this.addMonitor = function (props) {
    monitor.value += props;
  };

  this.addOperator = function (props) {
    const numberList = monitor.value
      .split(" ")
      .filter((element) => element !== "");
    const lastElement = numberList.at(-1);
    if (lastElement.split("").at(-1) === "." || /[/*+-]/.test(lastElement)) {
      return;
    }
    const addLine = " " + props + " ";
    this.addMonitor(addLine);
  };

  this.addDot = function () {
    const numberList = monitor.value
      .split(" ")
      .filter((element) => element !== "");
    const lastElement = numberList.at(-1);
    if (lastElement.includes(".") || /[/*+-]/.test(lastElement)) {
      return;
    }
    addMonitor(".");
  };

  this.clearResult = function () {
    monitor.value = "";
  };

  this.showResult = function () {
    let result = eval(monitor.value);
    monitor.value = result;
  };
}
