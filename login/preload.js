const { contextBridge, ipcRenderer } = require('electron')

// 👉 Expone solo la función para abrir la ventana de registro
contextBridge.exposeInMainWorld('electronAPI', {
  openRegister: () => ipcRenderer.send('open-register'),
  // Escucha desde el login
  onFillLogin: (callback) => ipcRenderer.on('fill-login', (event, name) => callback(name))
})