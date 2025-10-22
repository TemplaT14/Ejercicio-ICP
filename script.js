const forms = document.querySelectorAll("form");

// Añadir validación a todos los formularios encontrados de forma segura
forms.forEach((form, idx) => {
  form.addEventListener("submit", (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add("was-validated");
  });
});

// Mostrar/ocultar contraseña (si existe el control)
const passToggle = document.getElementById("pass");
if (passToggle) {
  passToggle.addEventListener("change", (e) => {
    const passInput = document.getElementById("passwordReg");
    if (passInput) passInput.type = e.target.checked ? "text" : "password";
  });
}
//Mensaje de aviso de registo exitoso
