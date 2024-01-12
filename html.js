let ms = 0;
let s = 0;
let m = 0;
let h = 0;
let timer;
let focusedTime = 0; // Variable to track focused time

function update_chrono() {
  ms += 100;
  focusedTime += 100; // Increase focused time

  if (ms === 1000) {
    ms = 0;
    s++;
  }
  if (s === 60) {
    s = 0;
    m++;
  }
  if (m === 60) {
    m = 0;
    h++;
  }

  const displayHours = (h < 10 ? '0' : '') + h;
  const displayMinutes = (m < 10 ? '0' : '') + m;
  const displaySeconds = (s < 10 ? '0' : '') + s;
  const displayMilliseconds =
    (ms < 10 ? '00' : ms < 100 ? '0' : '') + ms;

  document.getElementById('div3').value = `   ${displayHours}h:${displayMinutes}min:${displaySeconds}s.${displayMilliseconds}ms`;

  // Check if the user has been focused for 30 minutes
  if (focusedTime === 1800000) {
    stop(); // Stop the timer
    showMotivationalMessage(); // Display motivational message
    setTimeout(() => {
      start(); // Restart the timer after 5 minutes of rest
      focusedTime = 0; // Reset focused time
    }, 300000); // 5 minutes in milliseconds
  }
}

function showMotivationalMessage() {
  
  alert("You've been focused for 30 minutes! Take a 5-minute break and come back refreshed!");
}

function start() {
  if (!timer) {
    timer = setInterval(update_chrono, 100);
  }
}

function stop() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  clearInterval(timer);
  ms = 0;
  s = 0;
  m = 0;
  h = 0;
  focusedTime = 0; // Reset focused time
  document.getElementById('div3').value = '00:00:00.000';
  timer = null;
}
