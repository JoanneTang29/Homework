// when the document is loaded, trigger the "documentLoaded" function
window.addEventListener('DOMContentLoaded', documentLoaded, false);

let startTime;
let limit;
let timer;

function documentLoaded() {
  "use strict";

  // listen for mouse clicks on the button
  // document.getElementById("btnStart").addEventListener("click", buttonClicked, false);

  console.log("Document loader");
}

// when we click on the button, we save the current time, and the time limit. We then
// create a timer to execute the "updateTime" function once a second.
function buttonClicked() {
  "use strict";

  startTime = new Date();

  console.log("start time", startTime);

  limit = parseInt(document.getElementById("txtTempo").value);
  
  clearInterval(timer);
  timer = setInterval(updateTime, 1000);
}

function updateTime() {
  "use strict";

  // read the current time
  var currentTime = new Date();

  // calculate how many seconds passed since the start of the timer
  var elapsed = (currentTime.getTime() - startTime.getTime()) / 1000;

  // convert seconds to minutes and seconds (below 60)
  var minutes = Math.floor(elapsed / 60);
  var seconds = Math.floor(elapsed % 60);

  // pad with zeroes on the left to look better
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  // show the elapsed time
  document.getElementById("clock-minutes").value = minutes;
  document.getElementById("clock-seconds").value = seconds;

  // check if we are above the time limit and set the color of the timer accordingly
  if (elapsed >= limit) {
    document.getElementById("clock").className = "red";
  } else {
    document.getElementById("clock").className = "blue";
  }

}

function enterMinutes(event) {
  if (event.keyCode === 13) {
    document.getElementById('clock-seconds').focus();
     console.log("Enter key is pressed");
     return true;
  } else {
     return false;
  }
}

function enterSeconds (event) {
  if (event.keyCode === 13) {
    let clockMinutes = parseInt(document.getElementById('clock-minutes').value);
    let clockSeconds = parseInt(document.getElementById('clock-seconds').value);
    console.log("minutes", clockMinutes, typeof(clockMinutes));
    console.log("seconds", clockSeconds, typeof(clockSeconds));
    let totalSeconds = ((clockMinutes * 60) + (clockSeconds));
    limit = totalSeconds;
    startTime = new Date();
    clearInterval(timer);
    timer = setInterval(updateTime, 1000);
  }
}

// const clockChange = document.querySelector("blue");
// clockChange.addEventListener("keyup", (event) => {
//   if (event.key === "Enter") {
//     console.log('Enter key pressed')
//   }
// });


// get value from html
// do function to set starting time
//start timer