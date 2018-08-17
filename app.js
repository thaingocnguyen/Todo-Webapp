// Create references to page elements
var input = document.getElementById("task");
var addButton = document.getElementById("add");
var clearButton = document.getElementById("clear");
var taskList = document.getElementById("taskList");
var taskValue;

// add new item to task list
addButton.addEventListener("click", addTask);
function addTask() {
    taskValue = input.value;
    if (isValidInput()) {
        alert("Invalid Input! Task cannot be empty.");
    }
    else {
        var newTask = document.createElement("li");
        var newText = document.createTextNode(taskValue);
        newTask.appendChild(newText);
        taskList.appendChild(newTask);
        var doneButton = document.createElement("button");
        doneButton.innerHTML = "Done";
        doneButton.addEventListener("click", doneHandler);
        newTask.appendChild(doneButton);
        input.value = "";
    }
};

// clear task list
clearButton.addEventListener("click", clearTasks);
function clearTasks() {
    taskList.innerHTML = "";
};

function isValidInput() {
    return taskValue == "";
} 

function doneHandler(e) {
    var taskItem = e.target.parentElement;
    taskList.removeChild(taskItem);
};