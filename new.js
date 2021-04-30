// const onSubmit = document.querySelector(".form__submit");

// onSubmit.addEventListener("click", showTask);

// function showTask() {
//   alert("Show task");
// }

// const taskNameInput = document.querySelector(".form__input");
// const formSubmitInput = document.querySelector(".form__submit");

// function handleClick() {
//   console.log(taskNameInput.value);
// }

// formSubmitInput.onclick = function () {
//   console.log(taskNameInput.value);
// };

// const taskNameInput = document.querySelector(".radio-group__input:checked").value;

//
/* ///// FORMS //// */

const taskNameInput = document.querySelector(".form__input");
const formElement = document.querySelector(".form");

// WEITERLEITUNG

function goToPage(href) {
  location.href = href;
}
// WEITERLEITUNG

// ///////////////////////////////////////////
// FORM ELEMENT ON SUBMIT ///////////////////
// /////////////////////////////////////////

formElement.onsubmit = function (event) {
  event.preventDefault();
  const taskNameInput = document.querySelector(".form__input");
  const checkedDateInput = document.querySelector(
    ".radio-group__input:checked"
  );

  if (!taskNameInput.value && !checkedDateInput) {
    alert("Please enter task & date");
  } else if (!taskNameInput.value) {
    alert("Please enter task.");
  } else if (!checkedDateInput) {
    alert("Please choose date");
  } else {
    const tasks = {
      description: taskNameInput.value,
      date: checkedDateInput.value,
    };
    // //////////////////////////////////////////////////////////////////
    // Get and parse taskList; create empty array if taskList is null
    // //////////////////////////////////////////////////////////////////

    // const taskListJSON = localStorage.getItem("taskList");

    // let taskList = JSON.parse(taskListJSON);
    // if (taskList === null) {
    //   taskList = [];
    // }
    // console.log(taskList);

    // taskList.push(tasks);
    // console.log(taskList);

    // const newTaskListJSON = JSON.stringify(taskList);
    // localStorage.setItem("taskList", newTaskListJSON);

    const taskList = JSON.parse(localStorage.getItem("taskList")) || [];
    console.log(taskList);
    taskList.push(tasks);
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }

  goToPage("./dashboard.html");
};
