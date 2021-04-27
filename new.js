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

/* ///// FORMS //// */

const taskNameInput = document.querySelector(".form__input");
const formElement = document.querySelector(".form");

formElement.onsubmit = function (event) {
  event.preventDefault();
  const taskNameInput = document.querySelector(".form__input");
  const checkedDateInput = document.querySelector(
    ".radio-group__input:checked"
  );

  // if (checkedDateInput && taskNameInput.value !== "") {
  //   console.log(taskNameInput.value + " " + checkedDateInput.value);
  // } else {
  //   alert("Please enter task and date");
  //   return;
  // }

  if (!taskNameInput.value) {
    alert("Please enter task");
  }
  if (!checkedDateInput) {
    alert("Please choose date");
  }
  // console.log(taskNameInput.value, checkedDateInput.value);
};

/* //// IF STATEMENT //// */

// if (taskNameInput.value !== null && checkedDateInput.value !== "") {
//   console.log(taskNameInput.value + " " + checkedDateInput.value);
// } else {
//   alert("Please enter task and date");
// }

// if (!checkedDateInput.value) {
//   alert("Please enter task & date");
// } else {
//   console.log(taskNameInput.value, checkedDateInput.value);
// }
