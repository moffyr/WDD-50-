// selecting elements from the dom and assigning to them to variables
const form = document.querySelector("form");
const nameError = document.querySelector("#nameError");
const dateError = document.querySelector("#dateError");
const nameInput = document.querySelector("#fullName");
const dateInput = document.querySelector("#birthDate");
const textareaInput = document.querySelector("#textarea");

//form validation
function validateForm() {
  //resetting error values
  nameError.innerHTML = "";
  dateError.innerHTML = "";
  //selecting input values from the dom
  const nameValue = nameInput.value.trim();
  const dateValue = dateInput.value.trim();
  const textareaValue = textareaInput.value.trim();
  //
  if (nameValue === "" && dateValue === "") {
    nameError.innerHTML = "Please enter your full name";
    dateError.innerHTML = "please enter your birthdate";
    return false;
  }
  if (nameValue === "") {
    nameError.innerHTML = "Please enter your full name";
    return false;
  }
  if (dateValue === "") {
    dateError.innerHTML = "please enter your birthdate";
    return false;
  }
  return true;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateForm()) {
    e.target.submit();
  }
});
