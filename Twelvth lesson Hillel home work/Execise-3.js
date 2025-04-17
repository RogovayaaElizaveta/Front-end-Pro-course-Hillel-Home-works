//Execise3
const tasks = document.getElementsByClassName("To-Do");
const Input = document.getElementsByClassName("input");
const AddBtn = document.getElementsByClassName("btn");
taskList.addEventListener("click", function (event) {
  if (event.target.tagName === "button") {
    event.target.parentElement.remove();
  }
});

addBtn.addEventListener("click", function () {
  const Text = Input.value.trim();
  if (Text) {

    
    const li = document.createElement("li");
    li.innerHTML = `${Text} <button>Видалити</button>`;
    List.appendChild(li);
    Input.value = "";
  }
});
