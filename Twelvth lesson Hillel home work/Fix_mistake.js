
// Exercise2 — делегування подій

const container = document.getElementById("button-container");
const result = document.getElementById("result");

container.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
  
    const allButtons = container.querySelectorAll("button");
    allButtons.forEach((btn) => btn.classList.remove("active"));
    event.target.classList.add("active");

    result.textContent = `Клікнуто на кнопці: ${event.target.textContent}`;
  }
});

