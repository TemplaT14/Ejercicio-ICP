const registerButton = document.getElementById('register')

registerButton.addEventListener('click', () => {
  window.electronAPI.openRegister()
})