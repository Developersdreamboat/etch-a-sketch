"use strict"

const container = document.querySelector('.container');
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

const changeButton = document.querySelector('.change-box-quantity > button');

changeButton.addEventListener('click', () => {
  let userResponse = prompt('Print a number of boxes', 16);
  if (userResponse > 100) {
    alert("Too many boxes!");
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
    e.target.style['background-color'] = 'white';
  }
});
