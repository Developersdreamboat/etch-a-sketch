"use strict"

const container = document.querySelector('.container');
const baseBoxBrightness = 1;
let isMouseDown;
let isCreated;

function createBoxGrid(quantity) {
  let width = container.offsetWidth/quantity;
  const div = document.createElement('div');
  div.classList.add('sector');
  div.style.cssText = `width: ${width}px;`;
  isCreated = true;
  for (let i = 0; i < quantity*quantity; i++) {    
    container.appendChild(div.cloneNode(true));
  }
}

function setUpBoxGrid(quantity, createGridCallback) {
  const boxes = Array.from(document.querySelectorAll('.sector'));
  if (boxes.length > 0) {
    for (let i = 0; i < boxes.length; i++) {
      container.removeChild(boxes[i]);
    }
  }
  createGridCallback(quantity);
}

const toRGBArray = rgbStr => rgbStr.match(/\d+/g).map(Number);

function changeColor(caller) {
  let rgbString = window.getComputedStyle( caller ,null).getPropertyValue('background-color');
  let rgbArray = toRGBArray(rgbString);
  for (let i = 0; i < rgbArray.length; i++) {
    if (rgbArray[i] == 5) {
      rgbArray[i] = 0;
    }
      rgbArray[i] -= 25;
    }
    caller.style['background-color'] = `rgb(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]})`;
}

const changeButton = document.querySelector('.change-box-quantity > button');

changeButton.addEventListener('click', () => {
  let userResponse = prompt('Print a number of boxes', 16);
  if (userResponse <= 1 || userResponse > 100) {
    alert("Inappropriate number of boxes!");
    return;
  }
  setUpBoxGrid(userResponse, createBoxGrid);
});

document.addEventListener('mousedown', () => isMouseDown = true);
document.addEventListener('mouseup', () => isMouseDown = false);

document.addEventListener("mouseover", function(e){
  const target = e.target.closest(".container");
  if(isMouseDown == true && 
      e.target && e.target.matches(".sector") ){
      changeColor(e.target);
  }
});

