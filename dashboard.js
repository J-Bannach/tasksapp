// //////////////////////////////////////////
// CREATE HTML ELEMENTS IN JS (Aufgabe 1) //
// ////////////////////////////////////////

function createTaskElement(taskName) {
  const label = document.createElement("label");
  const input = document.createElement("input");
  const span = document.createElement("span");

  input.type = "checkbox";
  input.className = "checkbox-group__input";

  span.className = "checkbox-group__task";
  span.innerText = taskName;

  label.append(input, span);
  return label;
}
// const heatTeeElement = createTaskElement("Tee kochen");
// const drinkTeaElement = createTaskElement("Tee trinken");

// const taskGroupElement = document.querySelector(".checkbox-group");
// taskGroupElement.append(heatTeeElement, drinkTeaElement);

// ////////////////////////////////////////////////////
// DISPLAY TASKS FROM LOCAL STORAGE (Aufgabe 2) ///////
// ////////////////////////////////////////////////////

function parseJSONFromLocalStorage(key, defaultValue) {
  const json = localStorage.getItem(key);
  if (json === null) {
    return defaultValue;
  }
  const data = JSON.parse(json);
  return data;
}

// Get array with task objects from local storage
const taskList = parseJSONFromLocalStorage("taskList", "[]");

//Function to create new filtered task list
function createTaskList(date) {
  //Get filtered LocalStorage Array by date
  const filteredTaskList = taskList.filter((task) => task.date === date);

  // Create task elements array consisting of HTML elements based on the amount of objects
  const taskElements = filteredTaskList.map(function (task) {
    return createTaskElement(task.description);
  });

  //Get parent element of tasks
  const taskListElement = document.querySelector(".checkbox-group");

  // Append all elements in task element to task list
  taskListElement.append(...taskElements);
}
// ////////////////////////////////////////////////////
// PHILIPP'S LÖSUNG ///////////////////////////////////
// ////////////////////////////////////////////////////
// select all date radio buttons
const radioButtons = document.querySelectorAll(".radio-group__input");

console.log(radioButtons);

// what should happen onchange to these radio buttons
radioButtons.forEach((radioButton) => {
  radioButton.onchange = () => createTaskList(radioButton.value);
});

// ////////////////////////////////////////////////////
// ENDE PHILIPP'S LÖSUNG /////////////////////////////
// //////////////////////////////////////////////////
