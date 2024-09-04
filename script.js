document.getElementById('add-task').addEventListener('click', function () {
    const taskText = document.getElementById('new-task').value;
    if (taskText.trim() !== '') {
        addTask(taskText);
        document.getElementById('new-task').value = '';
    }
});

function addTask(text) {
    const li = document.createElement('li');
    li.textContent = text;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            li.classList.add('completed');
            checkbox.classList.add('completed');
            checkbox.nextSibling.textContent = ' Completed';
        } else {
            li.classList.remove('completed');
            checkbox.classList.remove('completed');
            checkbox.nextSibling.textContent = '';
        }
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete');
    deleteBtn.addEventListener('click', function () {
        li.remove();
    });

    li.prepend(checkbox);
    li.appendChild(deleteBtn);
    document.getElementById('task-list').appendChild(li);
}
