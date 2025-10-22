// Módulo necesario de Electron
const { contextBridge, ipcRenderer } = require('electron');
// enviar el nombre de usuario al main
contextBridge.exposeInMainWorld('electronAPI', {
  writeName: (username) => ipcRenderer.send('write-name', username)
});
