var globalName = "";

window.globalName;

document.querySelector(".lottoButton").addEventListener("click", function (e) {
  alert("hello world");
  displayNumbersWithInterval();
});

function generateRandomNumbers() {
  let selectedNumbers = [];
  while (selectedNumbers.length < 6) {
    let randomNumber = Math.floor(Math.random() * 49) + 1;
    if (selectedNumbers.indexOf(randomNumber) === -1) {
      selectedNumbers.push(randomNumber);
    }
  }
  return selectedNumbers;
}

function displayNumbersWithInterval() {
  let numbers = generateRandomNumbers();
  let index = 0;
  let interval = setInterval(() => {
    console.log(numbers[index]);
    document.querySelector(".lottoDiv").innerHTML = numbers[index];
    index++;
    if (index === numbers.length) {
      clearInterval(interval);
      console.log("완료: " + numbers.join(", "));
    }
  }, 500);
}
