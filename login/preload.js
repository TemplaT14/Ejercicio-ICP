
// Módulo necesario de Electron
const { contextBridge, ipcRenderer } = require('electron')

// Expone solo la función para abrir la ventana de registro

contextBridge.exposeInMainWorld('electronAPI', {
  // Abrir ventana de registro
  openRegister: () => ipcRenderer.send('open-register'),
  // Escucha desde el login
  onFillLogin: (callback) => ipcRenderer.on('fill-login', (event, username) => callback(username))
})



