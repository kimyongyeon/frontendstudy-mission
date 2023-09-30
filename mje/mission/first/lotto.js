// lotto.js (비즈니스 로직 모듈)
const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
let pastNums = [];

function getRandomNum() {
  return Math.floor(Math.random() * (45 - 1) + 1);
}

function updatePastLottoNumbers(lottoArr) {
  if (lottoArr.size === 6) {
    pastNums.push([...lottoArr]); // Set을 배열로 넣기. 이중배열
    console.log(pastNums);
    updatePastLottoNumbersView();
  }
}

export async function generateLottoNumbers(setCount, lottoRender, setSelect) {
  for (let i = 0; i < setCount; i++) {
    let lottoArr = new Set();
    await addNumber(lottoArr, lottoRender);
    console.log(lottoArr);
  }
}

function addNumber(lottoArr, lottoRender) {
  return new Promise((resolve) => {
    function add() {
      if (lottoArr.size < 6) {
        lottoArr.add(getRandomNum());
        updateLottoRender(lottoArr, lottoRender);
        console.log(lottoArr);
        setTimeout(add, 500);
      } else {
        updatePastLottoNumbers(lottoArr);
        resolve();
      }
    }
    add();
  });
}

function updateLottoRender(lottoArr, lottoRender) {
  lottoRender.innerHTML = "";
  [...lottoArr].forEach((num, index) => {
    let numElement = document.createElement("p");
    numElement.textContent = num;
    numElement.className = "lotto-balls";
    numElement.style.backgroundColor = colors[index];
    lottoRender.appendChild(numElement);
  });
}

function updatePastLottoNumbersView() {
  // pastNumsArea에 과거 로또 번호 업데이트
  // ...
}
