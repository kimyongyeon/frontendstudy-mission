import { generateLottoNumbers } from "./lotto.js";

// 로또 생성 버튼과 결과를 표시할 요소 지정
const lottoBtn = document.querySelector("#lottoButton");
const lottoRender = document.querySelector("#lottoRender");
const setSelect = document.querySelector("#setSelect");

lottoBtn.addEventListener("click", () => {
  let setCount = parseInt(setSelect.value);
  generateLottoNumbers(setCount, lottoRender, setSelect);
});
