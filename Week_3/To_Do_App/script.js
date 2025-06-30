document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const totalTasksSpan = document.getElementById('totalTasks');
    const completedTasksSpan = document.getElementById('completedTasks');
    
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
    // Render tasks from local storage
    renderTasks();
    updateTaskStats();
    
    // Add task event
    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
    
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;
        
        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false
        };
        
        tasks.push(newTask);
        saveTasks();
        renderTask(newTask);
        taskInput.value = '';
        updateTaskStats();
    }
    
    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach(task => renderTask(task));
    }
    
    function renderTask(task) {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item' + (task.completed ? ' completed' : '');
        taskItem.dataset.id = task.id;
        
        taskItem.innerHTML = `
            <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''}>
            <span class="task-text">${task.text}</span>
            <div class="task-actions">
                <button class="edit-btn"><i class="fas fa-edit"></i></button>
                <button class="delete-btn"><i class="fas fa-trash"></i></button>
            </div>
        `;
        
        taskList.appendChild(taskItem);
        
        // Add event listeners to the new task
        const checkbox = taskItem.querySelector('.task-checkbox');
        const editBtn = taskItem.querySelector('.edit-btn');
        const deleteBtn = taskItem.querySelector('.delete-btn');
        
        checkbox.addEventListener('change', function() {
            toggleTaskComplete(task.id, this.checked);
            taskItem.classList.toggle('completed', this.checked);
            updateTaskStats();
        });
        
        editBtn.addEventListener('click', () => editTask(task.id));
        deleteBtn.addEventListener('click', () => deleteTask(task.id));
    }
    
    function toggleTaskComplete(id, completed) {
        const task = tasks.find(task => task.id === id);
        if (task) {
            task.completed = completed;
            saveTasks();
        }
    }
    
    function editTask(id) {
        const task = tasks.find(task => task.id === id);
        if (!task) return;
        
        const taskItem = document.querySelector(`.task-item[data-id="${id}"]`);
        const taskText = taskItem.querySelector('.task-text');
        const currentText = task.text;
        
        const input = document.createElement('input');
        input.type = 'text';
        input.value = currentText;
        input.className = 'edit-input';
        
        taskText.replaceWith(input);
        input.focus();
        
        function saveEdit() {
            const newText = input.value.trim();
            if (newText && newText !== currentText) {
                task.text = newText;
                saveTasks();
            }
            
            // Revert back to text display
            const newTaskText = document.createElement('span');
            newTaskText.className = 'task-text';
            newTaskText.textContent = newText || currentText;
            input.replaceWith(newTaskText);
        }
        
        input.addEventListener('blur', saveEdit);
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                saveEdit();
            }
        });
    }
    
    function deleteTask(id) {
        tasks = tasks.filter(task => task.id !== id);
        saveTasks();
        document.querySelector(`.task-item[data-id="${id}"]`)?.remove();
        updateTaskStats();
    }
    
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    
    function updateTaskStats() {
        const total = tasks.length;
        const completed = tasks.filter(task => task.completed).length;
        
        totalTasksSpan.textContent = `${total} ${total === 1 ? 'task' : 'tasks'}`;
        completedTasksSpan.textContent = `${completed} completed`;
    }
});