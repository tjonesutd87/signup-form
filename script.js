var email = document.getElementById("email");
var emailError = document.getElementById("email-error");
console.log(emailError);

email.addEventListener("input", () =>{
    if (email.validity.valid) {
        emailError.textContent ="";
        emailError.className = "error";
    } else {
        showError();
    }
});

function showError() {
    if (email.validity.typeMismatch) {
        emailError.textContent = "Email address not valid!";
    } else if (email.validity.valueMissing) {
        emailError.textContent = "Please enter an email.";
    } else if (email.validity.tooShort) {
        emailError.textContent = `Email address should be at least ${email.minLength} characters,
        you entered ${email.value.length} characters.`;
    }
}