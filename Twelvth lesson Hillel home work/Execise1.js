//Exercise1
let userLink = "";

function getLink() {
  const link = prompt("Введіть посилання ");
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