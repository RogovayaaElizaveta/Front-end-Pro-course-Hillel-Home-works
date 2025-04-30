document.addEventListener('DOMContentLoaded', function () {
    const Forma = document.querySelector('.js--form'); 
    const ButtonFormInput = document.querySelector('.js--form__input'); 
    const ToDo_Wrapper = document.querySelector('.js--todos-wrapper');

    let ToDos = JSON.parse(localStorage.getItem('ToDos')) || [];

    function saveToLocalStorage() {
        localStorage.setItem('ToDos', JSON.stringify(ToDos));
    }

    function showTodos() {
        ToDo_Wrapper.innerHTML = '';

        for (let i = 0; i < ToDos.length; i++) {
            const todo = ToDos[i];

            const li = document.createElement('li');
            li.className = 'todo-item';
            if (todo.done) {
                li.classList.add('todo-item--checked');
            }

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = todo.done;
            checkbox.addEventListener('change', function () {
                todo.done = checkbox.checked;
                saveToLocalStorage();
                showTodos();
            });

            const span = document.createElement('span');
            span.className = 'todo-item__description';
            span.textContent = todo.text;

            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'todo-item__delete';
            deleteBtn.textContent = 'Видалити';
            deleteBtn.addEventListener('click', function () {
                ToDos.splice(i, 1);
                saveToLocalStorage();
                showTodos();
            });

            li.appendChild(checkbox);
            li.appendChild(span);
            li.appendChild(deleteBtn);
            ToDo_Wrapper.appendChild(li);
        }
    }

    Forma.addEventListener('submit', function (e) {
        e.preventDefault();

        const newTask = ButtonFormInput.value.trim();
        if (newTask !== '') {
            ToDos.push({ text: newTask, done: false });
            ButtonFormInput.value = '';
            saveToLocalStorage();
            showTodos();
        }
    });

    showTodos();
});
