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
const heatTeeElement = createTaskElement("Tee kochen");
const drinkTeaElement = createTaskElement("Tee trinken");

const taskGroupElement = document.querySelector(".checkbox-group");
taskGroupElement.append(heatTeeElement, drinkTeaElement);

// /////////////////////////////////////////
// DISPLAY TASKS FROM LOCAL STORAGE ///////
// ////////////////////////////////////////
