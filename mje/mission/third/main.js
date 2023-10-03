const moduleCalculator = () => {
  const textField = document.querySelector(".text-field");
  const buttons = document.querySelectorAll(".item");
  const negativeBtn = document.querySelector(".negative");
  const percentBtn = document.querySelector(".percent");
  const resultBtn = document.querySelector(".result-btn");

  let currentInput = "";
  let isFirstInput = true;

  const isOperator = (value) => ["+", "-", "*", "/"].includes(value);

  const handleButtonClick = (btnValue) => {
    if (isFirstInput && isNaN(btnValue)) {
      alert("연산자를 선택하기 이전에 숫자를 먼저 입력해주세요.");
      return;
    }
    isFirstInput = false;

    if (
      btnValue !== "=" &&
      btnValue !== "+/-" &&
      btnValue !== "%" &&
      btnValue !== "."
    ) {
      if (
        isOperator(currentInput.charAt(currentInput.length - 1)) &&
        isOperator(btnValue)
      ) {
        currentInput = currentInput.slice(0, -1) + btnValue;
      } else {
        currentInput += btnValue;
      }
      textField.textContent = currentInput;
    } else if (btnValue === ".") {
      const addValue = isNaN(textField.textContent.slice(-1))
        ? `0${btnValue}`
        : btnValue;
      currentInput = currentInput + addValue;
      textField.textContent = currentInput;
    }
    textField.textContent = currentInput.replace(/(^0+)/, "");
  };

  const handleNegativeClick = () => {
    currentInput *= -1;
    currentInput = String(currentInput);
    textField.textContent = currentInput;
  };

  const handlePercentClick = () => {
    currentInput /= 100;
    currentInput = String(currentInput);
    textField.textContent = currentInput;
  };

  const handleAllClearClick = () => {
    currentInput = "";
    textField.textContent = "0";
    isFirstInput = true;
  };

  const handleResultClick = () => {
    if (isNaN(currentInput.slice(-1))) {
      currentInput = currentInput.slice(0, -1);
    }
    const result = eval(currentInput);
    textField.textContent = result;
    currentInput = result.toString();
  };

  buttons.forEach((button) => {
    const btnValue = button.textContent;
    button.addEventListener("click", () => {
      handleButtonClick(btnValue);
    });
  });

  negativeBtn.addEventListener("click", () => {
    handleNegativeClick();
  });

  percentBtn.addEventListener("click", () => {
    handlePercentClick();
  });

  document.querySelector(".ac-btn").addEventListener("click", () => {
    handleAllClearClick();
  });

  resultBtn.addEventListener("click", () => {
    handleResultClick();
  });

  return {
    handleButtonClick,
    handleNegativeClick,
    handlePercentClick,
    handleAllClearClick,
    handleResultClick,
  };
};

const moduleCalc = moduleCalculator();
moduleCalc.handleButtonClick();
moduleCalc.handleNegativeClick();
moduleCalc.handlePercentClick();
moduleCalc.handleAllClearClick();
moduleCalc.handleResultClick();
