console.log("Hello");

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
let errorMessage = document.getElementsByClassName("incorrect-password")[0];
let createAccountBtn = document.querySelector("#create-account-btn");
console.log(createAccountBtn.innerHTML);





createAccountBtn.addEventListener("click", () => {
    if(password.value !== confirmPassword.value) {
        errorMessage.innerText = "*Passwords do not match";
        errorMessage.style.color = "red";
    } else {
        errorMessage.innerText = "";
    }
    console.log("Button");
})





