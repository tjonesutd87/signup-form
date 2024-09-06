var email = document.getElementById("email");
var emailError = document.getElementById("email-error");

var firstName = document.getElementById("first-name");
var firstNameError = document.getElementById("first-name-error");

var lastName = document.getElementById("last-name");
var lastNameError = document.getElementById("last-name-error");

var phone = document.getElementById("phone");
var phoneError = document.getElementById("phone-error");
var phoneRegex = /((\(\d{3}\)\d{3}(.|-)\d{4})|(\d{3}(.|-)\d{3}(.|-)\d{4}))|(\d{10})/;

var pwd = document.getElementById("pwd");
var pwdError = document.getElementById("pwd-error");

var pwdConfirm = document.getElementById("pwd-confirm");
var pwdConfirmError = document.getElementById("pwd-confirm-error");
var pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

var submitBtn = document.getElementById("signup-submit");



email.addEventListener("input", () =>{
    if (email.validity.valid) {
        emailError.textContent ="";
        emailError.className = "error";
    } else {
        showError();
    }
});

firstName.addEventListener("input", () =>{
    if (firstName.validity.valid) {
        firstNameError.textContent ="";
        firstNameError.className = "error";
    } else {
        showError();
    }
});

lastName.addEventListener("input", () =>{
    if (lastName.validity.valid) {
        lastNameError.textContent ="";
        lastNameError.className = "error";
    } else {
        showError();
    }
});

phone.addEventListener("input", () =>{
    if (phone.validity.valid) {
        phoneError.textContent ="";
        phoneError.className = "error";
    } else {
        showError();
    }
    console.log(!(phoneRegex.test(phone)));
});

pwd.addEventListener("input", () =>{
    if (pwd.validity.valid) {
        pwdError.textContent ="";
        pwdError.className = "error";
    } else {
        showError();
    }
});

pwdConfirm.addEventListener("input", () =>{
    if (pwdConfirm.validity.valid) {
        pwdConfirmError.textContent ="";
        pwdConfirmError.className = "error";
    } else {
        showError();
    }
    console.log(pwdRegex.test(pwd));
});

submitBtn.addEventListener("click", () =>{
        showError();
});



function showError() {
    if (email.validity.typeMismatch) {
        emailError.textContent = "Email address not valid!";
    } else if (email.validity.valueMissing) {
        emailError.textContent = "Please enter an email.";
    } else if (email.validity.tooShort) {
        emailError.textContent = `Email address should be at least ${email.minLength} characters.`;
    }
    if (firstName.validity.valueMissing) {
        firstNameError.textContent = "Please enter your first name.";
    }
    if (lastName.validity.valueMissing) {
        lastNameError.textContent = "Please enter your last name.";
    }
    if (!(phoneRegex.test(phone.value))) {
        phoneError.textContent = "Phone number format not valid!";
    } else if (phone.validity.valueMissing) {
        phoneError.textContent = "Please enter a phone number.";
    }
    if (!(pwdRegex.test(pwd.value))) {
        pwdError.textContent = "Password must be 8 characters minimum and contain one uppercase letter, one lowercase letter, one number, and one special character.";
    } else if (phone.validity.valueMissing) {
        pwdError.textContent = "Please enter a password.";
    }
    if (!(pwd.value === pwdConfirm.value)) {
        pwdConfirmError.textContent = "Passwords don't match!";
    } else if (phone.validity.valueMissing) {
        pwdConfirmError.textContent = "Please confirm your password.";
    }
}