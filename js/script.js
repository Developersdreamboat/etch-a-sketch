"use strict"

const container = document.querySelector('.container');

function createBox() {
  let width = container.offsetWidth/16;
  const div = document.createElement('div');
  div.classList.add('sector');
  div.style.cssText = `width: ${width}px;`;
  console.log(width);
    
  for (let i = 0; i < 256; i++) {    
    container.appendChild(div.cloneNode(true));
    console.log(div);
  }
}

createBox();