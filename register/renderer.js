// Obtener referencias a los elementos del DOM
// botón de registro y campo de usuario
const registerButton = document.getElementById('register2');
const userInput = document.getElementById('userReg');
// Añadir evento al botón de registro
registerButton.addEventListener('click', () => {
  const username = userInput.value.trim();
  if (!username) return;
  // Enviar nombre al main
  window.electronAPI.writeName(username);
// Mostrar mensaje de registro exitoso
  alert('Usuario registrado correctamente');
  // Cierra la ventana de registro (opcional)
  window.close();
});
