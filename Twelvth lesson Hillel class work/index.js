let tdEvent = document.querySelectorAll("td");
let buttonEvent = document.querySelector("a");
tdEvent[0].addEventListener("click", function (event) {
  //делегування event
  console.log(event.target);
  if (event.target.tagName === "TD") {
    event.target.style.background = "red";
  }
});

//change url
buttonEvent.addEventListener("click", function () {
  window.location.href = "";
});
