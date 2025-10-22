// Abrir ventana de registro al hacer click en el botón
const registerButton = document.getElementById('register')

//añadir evento al botón
registerButton.addEventListener('click', () => {
  window.electronAPI.openRegister()
});
// Obtener referencia al input de usuario en el login
const userLoginInput = document.getElementById('userLog');

// Recibir nombre desde el main y asignarlo al input
window.electronAPI.onFillLogin((username) => { // Asignar el valor recibido al input de usuario
  userLoginInput.value = username; // Rellenar el campo de usuario en el login
  alert('Usuario registrado correctamente');// Mostrar mensaje de registro exitoso
});


