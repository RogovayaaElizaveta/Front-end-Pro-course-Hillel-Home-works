let btn = document.querySelector(".button_simple");
let text = document.getElementById("text");

btn.addEventListener("click", function () {
  text.classList.toggle("active");
});
