const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();

  const inputEmail = form.elements.email;
  const inputPass = form.elements.password;

  if (inputEmail.value === "" || inputPass.value === "") {
    alert("Будь ласка, заповніть всі поля форми.");
    return;
  }

  const formData = {
    email: inputEmail.value,
    password: inputPass.value,
  };
  console.log(formData);

  form.reset();
}
