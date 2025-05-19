 $(document).ready(function () {
      $('#addTask').click(function () {
        const taskText = $('#taskInput').val().trim();
        if (taskText !== '') {
          const taskItem = $('<li class="list-group-item task-item"></li>').text(taskText);
          $('#taskList').append(taskItem);
          $('#taskInput').val('');
        }
      });

      $('#taskList').on('click', '.task-item', function () {
        const taskText = $(this).text();
        $('#modalTaskText').text(taskText);
        const myModal = new bootstrap.Modal(document.getElementById('taskModal'));
        myModal.show();
      });
    });