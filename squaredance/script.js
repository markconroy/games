const dancer = document.querySelector('.dancer');

function dance(e) {
  const right = 39;
  const left = 37;
  const down = 40;
  const up = 38;

  if (e.keyCode === right) {
    dancer.style.left = dancer.style.left + 10 + 'px';
  }
  if (e.keyCode === left) {
    dancer.style.right = dancer.style.right + 10 + 'px';
  }
  if (e.keyCode === up) {
    dancer.style.bottom = dancer.style.bottom + 10 + 'px';
  }
  if (e.keyCode === down) {
    dancer.style.top = dancer.style.top + 10 + 'px';
  }
  
}

document.addEventListener('keyup', dance);