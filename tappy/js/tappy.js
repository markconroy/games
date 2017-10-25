var score = 0;
function tapperClick() {
  score = score + 1;
  document.getElementById('score').innerHTML = score;
}

function reset() {
  score = 0;
  document.getElementById('score').innerHTML = 0;
}
