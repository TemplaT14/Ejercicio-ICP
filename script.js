const forms = document.querySelectorAll("form");

forms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    if (!forms[0].checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    forms[0].classList.add("was-validated");
  });
});

// Mostrar/ocultar contraseña
document.getElementById("pass").addEventListener("change", (e) => {
  const passInput = document.getElementById("passwordReg");
  passInput.type = e.target.checked ? "text" : "password";
});
