const registerButton = document.getElementById('register')

registerButton.addEventListener('click', () => {
  window.electronAPI.openRegister()
})

const userLoginInput = document.getElementById('userIni');

window.electronAPI.onFillLogin((name) => {
  userLoginInput.value = name;
  alert('Usuario registrado correctamente');
});
