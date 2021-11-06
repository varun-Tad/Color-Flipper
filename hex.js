const simpleBtn = document.querySelector("#simple-btn");
const hexBtn = document.querySelector("#hex-btn");
const clickMeBtn = document.querySelector("#clickMe-btn");
const mainContainer= document.querySelector("#main-container");
const colorText = document.querySelector("#color-text");


const colorArr=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];


const getRandomNumber=function()
{
    return Math.floor(Math.random() * colorArr.length ) 
}


const pickColor=function()
{
    let hexColor= "#";
    for(let i=0;i<6;i++)
    {
        hexColor+=colorArr[getRandomNumber()];
    }


  mainContainer.style.backgroundColor= hexColor;
  colorText.innerHTML =`<h1> Background Color: ${hexColor}</h1>`;

}




clickMeBtn.addEventListener('click',pickColor);