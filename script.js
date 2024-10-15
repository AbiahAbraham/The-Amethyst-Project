// Add JavaScript code for your web site here and call it from index.html.
document.addEventListener("DOMContentLoaded", function () {
    // Initialize task lists storage
    let taskLists = {};

    // Add event listeners to all plus icons (these should be inside each card)
    document.querySelectorAll('.plus-icon').forEach(function (plusIcon) {
        plusIcon.addEventListener('click', function () {
            let card = plusIcon.closest('.card');
            let taskInput = card.querySelector('.task-input');
            if (taskInput.value.trim()) {
                let listName = card.getAttribute('data-list-name');
                if (!listName) {
                    listName = 'List-' + Math.random().toString(36).substr(2, 9);
                    card.setAttribute('data-list-name', listName);
                    taskLists[listName] = [];
                }
                addTask(listName, taskInput.value, card);
                taskInput.value = ''; // Clear the input field
            }
        });
    });

    // Function to add a task to a specific card/list
    function addTask(listName, taskName, card) {
        let taskId = `task-${listName}-${taskLists[listName].length}`;
        taskLists[listName].push({ id: taskId, name: taskName, completed: false }); // Add task to internal data structure

        // Create task item and add to the card
        let taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        taskItem.id = taskId;
        taskItem.innerHTML = `
            <span class="task-name">${taskName}</span>
            <button class="delete-task-btn">🗑️</button>
        `;

        // Append task to the task list area in the card
        let taskListElement = card.querySelector('.task-list-items');
        taskListElement.appendChild(taskItem);

        // Add event listener for the delete task button (trash icon)
        taskItem.querySelector('.delete-task-btn').addEventListener('click', function () {
            deleteTask(listName, taskId, taskItem);
        });
    }

    // Function to delete a task
    function deleteTask(listName, taskId, taskItem) {
        taskItem.remove(); // Remove task from the DOM

        // Remove task from the internal taskLists data structure
        taskLists[listName] = taskLists[listName].filter(task => task.id !== taskId);
    }
});
