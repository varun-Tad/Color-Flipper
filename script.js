const simpleBtn = document.querySelector("#simple-btn");
const hexBtn = document.querySelector("#hex-btn");
const clickMeBtn = document.querySelector("#clickMe-btn");
const mainContainer= document.querySelector("#main-container");
const colorText = document.querySelector("#color-text");

const colorArr=['red','green','yellow','blue','violet','magenta']


const pickColor= function()
{
   let ranNum = Math.trunc(Math.random()*6)
   mainContainer.style.backgroundColor = colorArr[ranNum];
   let color=colorArr[ranNum];
   colorText.innerHTML =`<h1> Background Color: ${color}</h1>`;
   
}





clickMeBtn.addEventListener('click',pickColor);


