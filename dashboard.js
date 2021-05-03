// //////////////////////////////////////////
// CREATE HTML ELEMENTS IN JS //////////////
// ////////////////////////////////////////

function createTaskElement(taskName, taskCompleted) {
  const label = document.createElement("label");
  const input = document.createElement("input");
  const span = document.createElement("span");

  input.type = "checkbox";
  input.className = "checkbox-group__input";
  input.checked = taskCompleted;
  span.className = "checkbox-group__task";
  span.innerText = taskName;
  input.onchange = function () {
    changeStatus(taskName);
  };

  label.append(input, span);
  return label;
}

// ////////////////////////////////////////////////////
// DISPLAY TASKS FROM LOCAL STORAGE  /////////////////
// ///////////////////////////////////////////////////

function parseJSONFromLocalStorage(key, defaultValue) {
  const json = localStorage.getItem(key);
  if (json === null) {
    return defaultValue;
  }
  const data = JSON.parse(json);
  return data;
}

function changeStatus(taskName) {
  const taskList = parseJSONFromLocalStorage("taskList", []);
  const changedTaskObject = taskList.find(
    (task) => task.description === taskName
  );
  console.log(changedTaskObject);
  changedTaskObject.completed = !changedTaskObject.completed;

  localStorage.setItem("taskList", JSON.stringify(taskList));
}
// Get array with task objects from local storage
const taskList = parseJSONFromLocalStorage("taskList", []);

// call for function to create ALL tasks.
createTaskList();

//Function to create new filtered task list
function createTaskList(date) {
  //Get filtered LocalStorage Array by date
  const filteredTaskList = taskList.filter(
    (task) => task.date === date || date === undefined
  );

  // Create task elements array filtered by date (consisting of HTML elements based on the amount of objects)
  const taskElements = filteredTaskList.map(function (task) {
    return createTaskElement(task.description, task.completed);
  });

  //Get parent element of tasks
  const taskListElement = document.querySelector(".checkbox-group");

  // Remove all children
  removeAllChildren(taskListElement);

  // Replace all labels with empty string and append selected elements in task element to task list
  // taskListElement.innerHTML = "";
  taskListElement.append(...taskElements);
}

function removeAllChildren(taskListElement) {
  taskListElement.innerHTML = "";
}
// select all date radio buttons
const radioButtons = document.querySelectorAll(".radio-group__input");

console.log(radioButtons);

// what should happen onchange to these radio buttons
radioButtons.forEach((radioButton) => {
  radioButton.onchange = () => createTaskList(radioButton.value);
});
