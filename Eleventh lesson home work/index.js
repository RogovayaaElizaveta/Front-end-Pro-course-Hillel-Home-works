//Exercise 1
const container = document.getElementById("table");
let html = "<table border='1'>";

for (let i = 1; i <= 10; i++) {
  html += "<tr>";
  for (let j = 1; j <= 10; j++) {
    html += `<td>${i * j}</td>`;
  }
  html += "</tr>";
}

html += "</table>";
container.innerHTML = html;

//Exercise 2

//Exercise 3
