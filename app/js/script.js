let email = document.querySelector("#email");
const form = document.querySelector("form");
const validation = document.querySelector(".validation-text");
const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (email.value.match(pattern)) {
    form.classList.remove("invalid");
    validation.innerHTML = "Your interest has been registered!";
    validation.style.opacity = "1";
    validation.classList.add("true");
    validation.classList.remove("false");
  } else {
    form.classList.add("invalid");
    validation.innerHTML = "Please provide a valid email.";
    validation.style.opacity = "1";
    validation.classList.remove("true");
    validation.classList.add("false");
  }

  email.value = "";
});
