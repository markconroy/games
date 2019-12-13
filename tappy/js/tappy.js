var score = 0;
function tapperClick() {
  score = score + 1;
  document.getElementById('score').innerHTML = score;
  document.getElementById('timer').innerHTML =  10;

  startTimer();

  function startTimer() {
    var amountOfTime = document.getElementById('timer').innerHTML;
    var timeLeft = checkSecond((amountOfTime - 1));

    document.getElementById('timer').innerHTML = timeLeft;
    setTimeout(startTimer, 1000);
  }

  function checkSecond(sec) {
    if (sec < 10 && sec >= 0) {
      sec = "0" + sec;
    }
    if (sec < 0) {
      alert('Game Over!');
      document.getElementById('timer').innerHTML =  10;
    }
    return sec;
  }

}

function reset() {
  score = 0;
  document.getElementById('score').innerHTML = 0;
  document.getElementById('timer').innerHTML =  60;
}
