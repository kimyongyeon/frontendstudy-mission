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
