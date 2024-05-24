function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskName = taskInput.value.trim();
    const taskTime = document.getElementById("input-time").value;
    if (taskName) {
        const taskList = document.getElementById("taskList");
        const li = document.createElement("li");
        li.classList.add("task-item");
        const now = new Date();
        const time = taskTime || `${now.getHours()}:${now.getMinutes()}`;
        li.innerHTML = `
            <input type="checkbox" onchange="toggleComplete(this)">
            <span>${taskName}</span>
            <span>${time}</span>
            <button class="remove-btn" onclick="removeTask(this)">X</button>
        `;
        taskList.appendChild(li);
        taskInput.value = "";
        document.getElementById("input-time").value = "";
    }
}

function removeTask(btn) {
    btn.parentNode.remove();
}

function toggleComplete(checkbox) {
    checkbox.parentNode.classList.toggle("completed");
}