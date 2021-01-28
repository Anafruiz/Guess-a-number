`use stric`


const buttonElement= document.querySelector(".js-button");
const inputElement=document.querySelector(".js-input");
const inputClue=document.querySelector(".js-clue");
const tryElement=document.querySelector(".js-try");
const numberRandom=getRandomNumber(100);
let intentos=0;


console.log(numberRandom);

function handleButton (){
const selectValue= parseInt(inputElement.value);

if (selectValue===numberRandom){
    inputClue.innerHTML='Has ganado campeona'
}
else if(selectValue<1 ||selectValue>100){
    inputClue.innerHTML='El número debe estar entre 1 y 100'
}
else if(selectValue<numberRandom){
    inputClue.innerHTML='Demasiado bajo'

}
else if(selectValue>numberRandom){
    inputClue.innerHTML='Demasiado alto'

}

intentos ++;
tryElement.innerHTML = 'Número de intentos :'+ intentos;

}

function getRandomNumber (max) {
const RandomNumber=Math.ceil(Math.random()*max);
return RandomNumber;

}



buttonElement.addEventListener('click',handleButton)