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
  const checkedDateInput = document.querySelector(
    ".radio-group__input:checked"
  );
  console.log(taskNameInput.value, checkedDateInput.value);
};
