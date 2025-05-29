const input = document.getElementById("taskInput");
const addButton = document.getElementById("addTask");
const list = document.getElementById("taskList");
const modalText = document.getElementById("modalTaskText");

addButton.addEventListener("click", () => {
  const text = input.value;

  if (text !== "") {
    const newItem = document.createElement("li");
    newItem.className = "list-group-item task-item";
    newItem.textContent = text;

    newItem.addEventListener("click", () => {
      modalText.textContent = text;
      const myModal = new bootstrap.Modal(document.getElementById("taskModal"));
      myModal.show();
    });

    list.appendChild(newItem);
    input.value = "";
  }
});
