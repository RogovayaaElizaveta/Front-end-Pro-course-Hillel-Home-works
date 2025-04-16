//Exercise1
let userLink = "";

function getLink() {
  const link = prompt("Введіть посилання (наприклад, https://example.com):");
  if (link) {
    userLink = link;
    alert("Посилання збережено!");
  }
}

function goToLink() {
  if (userLink) {
    window.location.href = userLink;
  } else {
    alert("Спочатку введіть посилання!");
  }
}
//Exercise2

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const result = document.getElementById("result");

const buttons = [btn1, btn2, btn3];

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));

    button.classList.add("active");

    result.textContent = `Клікнуто на кнопці: ${button.textContent}`;
  });
});

//Exercise3
