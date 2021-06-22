var timeLeft = 30;
var elem = document.getElementById('Timer');

var timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft == 0) {
    clearTimeout(timerId);
    doSomething();
  } else {
    elem.innerHTML = timeLeft;
    timeLeft--;
  }
}

// use "Timer" as text id to display time//
