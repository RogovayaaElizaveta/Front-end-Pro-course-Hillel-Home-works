
    var input = document.getElementById("taskInput");
    var addButton = document.getElementById("addTask");
    var list = document.getElementById("taskList");
    var modalText = document.getElementById("modalTaskText");

    // При натисканні кнопки "Додати"
    addButton.addEventListener("click", function () {
      var text = input.value;

      // Якщо поле не пусте
      if (text !== "") {
        var newItem = document.createElement("li");
        newItem.className = "list-group-item task-item";
        newItem.textContent = text;

        // Додавання обробнику кліку 
        newItem.addEventListener("click", function () {
          modalText.textContent = text;
          var myModal = new bootstrap.Modal(document.getElementById("taskModal"));
          myModal.show();
        });

        // Додаємо в список
        list.appendChild(newItem);
      }
    });