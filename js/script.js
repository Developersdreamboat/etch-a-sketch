"use strict"

const container = document.querySelector('.container');
let isMouseDown;

function createBoxGrid(quantity) {
  let width = container.offsetWidth/quantity;
  const div = document.createElement('div');
  div.classList.add('sector');
  div.style.cssText = `width: ${width}px;`;
  console.log(div);
    
  for (let i = 0; i < quantity*quantity; i++) {    
    container.appendChild(div.cloneNode(true));
  }
}

createBoxGrid(40);

document.addEventListener('mousedown', () => isMouseDown = true);
document.addEventListener('mouseup', () => isMouseDown = false);

document.addEventListener("mouseover", function(e){
  const target = e.target.closest(".container");
  console.log(isMouseDown);
  if(isMouseDown == true && 
      e.target && e.target.matches(".sector") ){
    e.target.style['background-color'] = 'white';
  }
});

//when hover change state, but unhover dont leave it