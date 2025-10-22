const registerButton = document.getElementById('register2');
const userInput = document.getElementById('userReg');
console.log(registerButton);
registerButton.addEventListener('click', () => {
  const name = userInput.value;
  console.log(name);
  if (!name) return;

  // Envía el nombre al proceso principal
  window.electronAPI.writeName(name);

  alert('Usuario registrado correctamente');
  window.close(); // opcional: cierra la ventana de registro
});
