const registerButton = document.getElementById('register2');
const userInput = document.getElementById('userReg');

registerButton.addEventListener('click', () => {
  const username = userInput.value.trim();
  if (!username) return;

  // Enviar nombre al main
  window.electronAPI.writeName(username);

  alert('Usuario registrado correctamente');

  // Cierra la ventana de registro (opcional)
  window.close();
});
