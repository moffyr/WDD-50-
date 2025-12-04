//RITIKA
//--Javascript form validation --

// selecting elements from the dom and assigning to them to variables
const form = document.querySelector(".rm form");
const nameError = document.querySelector(".rm #nameError");
const dateError = document.querySelector(".rm #dateError");
const nameInput = document.querySelector(".rm #fullName");
const dateInput = document.querySelector(".rm #birthDate");

// funtion to check if the form inputs are valid and ready for submition.
function validateForm() {
  //resetting error values everytime the function is called
  nameError.innerHTML = "";
  dateError.innerHTML = "";
  //selecting input values from the dom, trimming any whitespace at the ends and assigning them to variables(function scoped).
  const nameValue = nameInput.value.trim();
  const dateValue = dateInput.value.trim();
  // declaring variable to track validity
  let isValid = true;
  // checking if the name input feild is left empty
  // then checking if the value entered meets the conditions to be a full name
  const nameCharacters = /^[a-zA-Z\s'-]+$/; // allows alphabet letters(capital and small), spaces, apostrophes and hyphens
  if (nameValue === "") {
    nameError.innerHTML = "Please enter your full name, this feild is required";
    isValid = false;
  } else if (
    nameValue.length < 3 || //minimun of 3 character check
    !nameValue.includes(" ") || // check to ensure its a full name with at least a first name and a last name
    !nameValue.test(nameCharacters) // check to ensure only valid characters are used (hyphen and apostrophes included to accomodate for names like O'Connor and Mary-Jane)
  ) {
    nameError.innerHTML =
      "ensure that you entered your full name(can only contain letters and spaces, minimum of 3 characters)";
    isValid = false;
  }

  // declaring and assigning variables to hold input date value and todays date
  //then calculating the date 16 years ago from today
  const dateToday = new Date();
  const birthDate = new Date(dateValue);
  const yearsAgo_16 = new Date(
    dateToday.getFullYear() - 16,
    dateToday.getMonth(),
    dateToday.getDate()
  );
  // checking if the date input feild is left empty
  // then checking if the value entered is a valid birthdate
  // then checking if the value entered meets the conditions to be at least 16 years old at the time of filling the form
  if (dateValue === "") {
    dateError.innerHTML = "please enter your birthdate, this feild is required";
    isValid = false;
  } else if (birthDate > dateToday) {
    dateError.innerHTML = "enter a valid birthdate";
    isValid = false;
  } else if (birthDate >= yearsAgo_16) {
    dateError.innerHTML = "You must be at least 16 years old to register";
    isValid = false;
  }
  return isValid;
}
// adding event listener to the form to execute when submit buttom in the form is clicked
form.addEventListener("submit", (e) => {
  // preventing default behaviour of form submission to allow for validation and client side error display if applicable
  e.preventDefault();
  // calling the validate form function and submitting the form only if all inputs are valid
  if (validateForm()) {
    e.target.submit();
  }
});