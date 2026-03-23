const API_URL = "https://f3kl1bs4bi.execute-api.us-east-1.amazonaws.com/tasks";

window.onload = function () {
  document.getElementById("addBtn").addEventListener("click", addTask);
  loadTasks();
};

async function loadTasks() {
  try {
    const response = await fetch(API_URL);
    const tasks = await response.json();

    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach(function (task) {
      const li = document.createElement("li");

      const text = document.createTextNode(task.taskName + " ");
      li.appendChild(text);

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.onclick = function () {
        deleteTask(task.taskId);
      };

      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    });
  } catch (error) {
    console.error("Load error:", error);
  }
}

async function addTask() {
  const input = document.getElementById("taskInput");
  const taskName = input.value.trim();

  if (!taskName) return;

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ taskName: taskName })
    });

    console.log(await response.text());
    input.value = "";
    loadTasks();
  } catch (error) {
    console.error("Add error:", error);
  }
}

async function deleteTask(taskId) {
  try {
    const response = await fetch(API_URL, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ taskId: taskId })
    });

    console.log(await response.text());
    loadTasks();
  } catch (error) {
    console.error("Delete error:", error);
  }
}