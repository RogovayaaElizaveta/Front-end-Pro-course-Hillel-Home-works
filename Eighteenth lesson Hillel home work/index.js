let CurentTime = 90; 
const Timer = document.getElementsByClassName("Simple_timer")[0];

setInterval(function() {
  if (CurentTime < 0) return;

  let Minutes = Math.floor(CurentTime / 60);
  let Seconds = CurentTime % 60;

  if (Minutes < 10) Minutes = "0" + Minutes;
  if (Seconds < 10) Seconds = "0" + Seconds;

  Timer.textContent = Minutes + ":" + Seconds;
  CurentTime = CurentTime - 1;
}, 1000);
