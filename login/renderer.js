const registerButton = document.getElementById('register')

registerButton.addEventListener('click', () => {
  window.electronAPI.openRegister()
})

const userLoginInput = document.getElementById('userIni');

// Recibir nombre desde el main y asignarlo al input
window.electronAPI.onFillLogin((username) => {
  userLoginInput.value = username;
  alert('Usuario registrado correctamente');
});


