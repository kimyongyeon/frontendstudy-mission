(function () {
  let lottoDiv;
  let lottoButton;
  function init() {
    this.lottoDiv = document.querySelector(".div");
    this.lottoButton = document.querySelector(".button");
    eventListener();
  }
  function randomLotto() {
    render();
  }
  function eventListener() {
    this.lottoButton.addEventListener("click", randomLotto);
  }

  function render() {
    this.lottoDiv.innerHTML = `
    
    `;
  }
})();

function Counter() {
  let count = 0;
  return function () {
    return count++;
  };
}

let cnt = new Counter();
console.log(cnt());
console.log(cnt());
console.log(cnt());
