document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('todo-input');
    const addButton = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', addTodo);

    function addTodo() {
        const todoText = inputField.value.trim();

        if (todoText === '') {
            alert('Please enter a task.');
            return;
        }

        const listItem = document.createElement('li');

        const taskInput = document.createElement('input');
        taskInput.type = 'text';
        taskInput.value = todoText;
        taskInput.readOnly = true;
        listItem.appendChild(taskInput);

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'edit-btn';
        editButton.addEventListener('click', () => editTask(taskInput, editButton));
        listItem.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-btn';
        deleteButton.addEventListener('click', () => deleteTask(listItem));
        listItem.appendChild(deleteButton);

        todoList.appendChild(listItem);
        inputField.value = '';
    }

    function editTask(taskInput, editButton) {
        if (editButton.textContent === 'Edit') {
            taskInput.readOnly = false;
            taskInput.focus();
            editButton.textContent = 'Save';
        } else {
            taskInput.readOnly = true;
            editButton.textContent = 'Edit';
        }
    }

    function deleteTask(listItem) {
        todoList.removeChild(listItem);
    }
});
