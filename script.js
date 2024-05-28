const hr = document.querySelector(".hr");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
const laps = document.querySelector(".laps");
let start = false;
let paused = false;
let lapCounter = 1;
const time = setInterval(() => {
  if (start === false) {
    sec.textContent = "00";
    sec.textContent = "00";
    sec.textContent = "00";
  }
  if (!paused && start === true) {
    sec.textContent = parseInt(sec.textContent) + 1;
    if (parseInt(sec.textContent) === 60) {
      min.textContent = parseInt(min.textContent) + 1;
      sec.textContent = "00";
    }
    if (parseInt(min.textContent) === 60) {
      hr.textContent = parseInt(hr.textContent) + 1;
      min.textContent = "00";
    }
  }
}, 1000);
document.querySelector('.lap').addEventListener("click", ()=>{
  laps.innerHTML += `<div class="lapCount">
    <span>lap ${lapCounter} :</span> <span>${hr.textContent} hr : ${min.textContent} min : ${sec.textContent} sec</span>
  </div>`;
  lapCounter++;
})

document.querySelector(".stop").addEventListener("click", (e) => {
  if (paused === false) {
    paused = true;
    e.target.textContent = "resume";
  } else {
    paused = false;
    e.target.textContent = "pause";
  }
});
document.querySelector(".start").addEventListener("click", (e) => {
  if (start === false) {
    start = true;
    e.target.textContent = "reset";
  } else {
    start = false;
    e.target.textContent = "start";
    laps.innerHTML = ` <h1>Laps</h1><span style="color: white; font-size: xx-large; padding-left: 10px;">:</span>`;
  }
});
document.querySelector(".clearlap").addEventListener("click", (e) => {
  laps.innerHTML = ` <h1>Laps</h1><span style="color: white; font-size: xx-large; padding-left: 10px;">:</span>`;
})