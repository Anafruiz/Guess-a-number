`use stric`;

const buttonElement = document.querySelector(".js-button");
const inputElement = document.querySelector(".js-input");
const inputTips = document.querySelector(".js-clue");
const tryElement = document.querySelector(".js-try");
const numberRandom = getRandomNumber(100);
let tries = 0;
function getRandomNumber(max) {
  const RandomNumber = Math.ceil(Math.random() * max);
  return RandomNumber;
}
function writteTips(message) {
  inputTips.innerHTML = "Pista:" + message;
}
console.log(numberRandom);

function handleButton() {
  const selectValue = parseInt(inputElement.value);

  if (selectValue === numberRandom) {
    writteTips("Has ganado campeona!!!");
  } else if (selectValue < 1 || selectValue > 100) {
    writteTips("El número debe estar entre 1 y 100");
  } else if (selectValue < numberRandom) {
    writteTips("El número es demasiado bajo");
  } else if (selectValue > numberRandom) {
    writteTips("El número es demasiado alto");
  }
  triesNumber();
}

function triesNumber() {
  tries++;
  tryElement.innerHTML = "Número de intentos :" + tries;
}

buttonElement.addEventListener("click", handleButton);
