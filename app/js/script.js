let email = document.querySelector("#email");
const form = document.querySelector("form");
const validation = document.querySelector(".validation-text");
const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const input = document.querySelector("input");
const errorIcon = document.querySelector(".error-icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (email.value.match(pattern)) {
    form.classList.add("success");
    form.classList.remove("invalid");
    validation.innerHTML = "Your interest has been registered!";
    validation.style.opacity = "1";
    validation.classList.add("true");
    form.classList.remove("false");
  } else {
    form.classList.add("invalid");
    form.classList.remove("success");
    validation.innerHTML = "Please provide a valid email.";
    validation.style.opacity = "1";
    validation.classList.remove("true");
    form.classList.add("false");
  }

  email.value = "";
});
