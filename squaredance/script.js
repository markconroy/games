function movePosition(item, positionX, positionY) {
  const dancer = document.querySelector(item);
  dancer.style.left = positionX + 'px';
  dancer.style.top = positionY + 'px';
}

function keyPress(e) {
  const dancerPosition = document.querySelector('.dancer').getBoundingClientRect();
  let keyPressed = e.code;

  const moveRight = 'ArrowRight';
  const moveLeft = 'ArrowLeft';
  const moveDown = 'ArrowDown';
  const moveUp = 'ArrowUp';
 
  let left = parseInt(dancerPosition.left, 10);
  let top = parseInt(dancerPosition.top, 10)
    
  switch (keyPressed) {
    case (moveLeft):
      movePosition('#dancer', left -10,  top);
      break;

    case (moveRight):
      movePosition('#dancer', left + 10,  top);
      break;

    case (moveUp):
      movePosition('#dancer', left,  top - 10);
      break;

    case (moveDown):
      movePosition('#dancer', left,  top + 10);
      break;
  }
}

document.addEventListener('keydown', keyPress);