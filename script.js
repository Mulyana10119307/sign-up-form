const password = document.querySelector("#password1");
const confirmPassword = document.querySelector("#password2");
const passwordError = document.querySelector("#passwordError");

// Check if the passwords match
function validatePasswords() {
  if (password.value !== confirmPassword.value) {
    passwordError.setAttribute(
      "style",
      "color: red; font-size: 0.75em; font-weight: normal; margin-top: -1.5em"
    );
    password.setAttribute("style", "border-color: red");
    confirmPassword.setAttribute("style", "border-color: red");
    passwordError.textContent = "* Password do not match";
  } else {
    passwordError.textContent = "";
    password.setAttribute("style", "border-color: blue");
    confirmPassword.setAttribute("style", "border-color: blue");
  }
}
